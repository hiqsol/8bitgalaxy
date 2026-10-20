// [[Turn]], [[Takeoff]], [[Draw]], [[Shuffle]] and the [[Goal]] paths.
import {
  card,
  cardController,
  cardsIn,
  controller,
  freeSlot,
  isActiveFor,
  locate,
  log,
  place,
  remove,
  starTechs,
} from './board';
import { allCardDefs, cardDef, endOf, isActor, isHero, printsTech, typeOf } from './cards';
import { check } from './errors';
import { randomInt, shuffle } from './rng';
import { START, STARTING_CARDS } from './scenario';
import { type EndName, KLASSES, type Klass, type PlayerId, type State, type Winner } from './types';

const name = (state: State, player: PlayerId) => state.players.find((p) => p.id === player)!.name;

/**
 * New id for a card that leaves public view, so a rival can't follow it
 * from Discard through Reserve and Hand to a Hidden card on the Field.
 */
function rekey(state: State, uid: string): string {
  const c = state.cards[uid];
  let fresh: string;
  do fresh = `${c.owner}-${randomInt(state, 36 ** 4).toString(36).padStart(4, '0')}`;
  while (state.cards[fresh]);
  delete state.cards[uid];
  state.cards[fresh] = { ...c, uid: fresh };
  return fresh;
}

/** [[Draw]] from the top of Reserve, [[Shuffle]] Discard when Reserve is empty */
export function drawCards(state: State, player: PlayerId, n: number): void {
  const home = state.homes[player];
  for (let i = 0; i < n; i++) {
    if (!home.reserve.length) {
      if (!home.discard.length) return;
      home.reserve = shuffle(state, home.discard.splice(0)).map((uid) => rekey(state, uid));
      log(state, 'shuffles Discard into Reserve', player);
    }
    home.hand.push(home.reserve.pop()!);
  }
}

export function takeoff(state: State, player: PlayerId, move: { card: string; star: string; slot?: number; end: EndName; hidden?: boolean }): void {
  check(!state.winner, 'the game is over');
  check(!state.combat, 'finish the Combat first');
  check(state.turn.player === player, 'not your Turn');
  check(state.homes[player].hand.includes(move.card), 'Takeoff plays a card from your Hand');
  const c = card(state, move.card);
  check(isActor(c), 'only Units take off');
  const star = state.stars[move.star];
  check(star && controller(state, move.star) === player, 'Takeoff goes to a Star you control');
  const index = freeSlot(star, 'units', move.slot);
  check(index >= 0, `no free Unit Slot at ${move.star}`);
  if (move.hidden) {
    // the Hidden End needs Stealth from the card itself or an own Enabled card there
    check(printsTech(cardDef(c.def), 'Stealth') || starTechs(state, move.star, player).includes('Stealth'), 'the Hidden End needs Stealth');
  }
  remove(state, move.card);
  place(state, move.card, { zone: 'slot', star: move.star, row: 'units', index });
  c.end = move.end;
  c.face = move.hidden ? 'hidden' : 'front';
  state.turn.played++;
  log(state, move.hidden ? `takes off a hidden card at ${move.star}` : `takes off ${c.def} (${move.end}) at ${move.star}`, player);
}

/** A player reveals own Hidden card on the Field at any time of own Turn */
export function reveal(state: State, player: PlayerId, uid: string): void {
  check(state.turn.player === player && !state.combat, 'reveal at your own Turn');
  const c = card(state, uid);
  check(c.owner === player && c.face === 'hidden' && locate(state, uid).zone === 'slot', 'reveal your own Hidden card on the Field');
  c.face = 'front';
  log(state, `reveals ${c.def}`, player);
}

/** Structures the player may [[Restore]] at the end of the Turn */
export function restorable(state: State, player: PlayerId): string[] {
  const res: string[] = [];
  for (const star of Object.keys(state.stars)) {
    for (const c of cardsIn(state, star)) {
      if (!isActor(c) && c.face === 'front' && c.end === 'weak' && cardController(state, c.uid) === player) res.push(c.uid);
    }
  }
  return res;
}

export function endTurn(state: State, player: PlayerId, restore?: string): void {
  check(!state.winner, 'the game is over');
  check(!state.combat, 'finish the Combat first');
  check(state.turn.player === player, 'not your Turn');
  const home = state.homes[player];
  check(state.turn.played > 0 || home.hand.length === 0, "a player can't pass: play at least one card");

  // 1. Restore 1 Structure
  const candidates = restorable(state, player);
  if (restore) check(candidates.includes(restore), 'restore a Depleted Structure you control');
  const restored = restore ?? candidates.sort((a, b) => endOf(card(state, b), 'strong').level - endOf(card(state, a), 'strong').level)[0];
  if (restored) {
    card(state, restored).end = 'strong';
    log(state, `restores ${card(state, restored).def}`, player);
  }
  // 2. Income: Star Abilities that give Energy, see SimplificationReview S21 a
  for (const star of Object.values(state.stars)) {
    if (star.revealed && star.def.ability.kind === 'energy' && controller(state, star.id) === player) {
      home.energy += star.def.ability.n;
    }
  }
  // 3. Goal: has no leader, Singularity
  if (!hasLeader(state, player)) {
    state.players.find((p) => p.id === player)!.over = true;
    log(state, `${name(state, player)} has no leader and is over`, player);
  } else if (reachesSingularity(state, player)) {
    win(state, { players: [player], path: 'singularity' });
    return;
  }
  // 5-6. unused Hand to Discard, Draw a full Hand
  home.discard.push(...home.hand.splice(0));
  drawCards(state, player, START.handSize);

  if (checkTwilight(state, player)) return;
  if (checkGoals(state)) return;
  nextTurn(state);
}

function nextTurn(state: State): void {
  const order = state.players.map((p) => p.id);
  let i = order.indexOf(state.turn.player);
  for (let tries = 0; tries < order.length; tries++) {
    i = (i + 1) % order.length;
    const p = state.players[i];
    if (p.over) continue;
    state.turn = { player: p.id, number: state.turn.number + 1, played: 0 };
    state.undo = [];
    // Start of turn: a player who can make neither a Takeoff nor an Action is over
    if (!canMove(state, p.id)) {
      p.over = true;
      log(state, `${p.name} can not make a move and is over`, p.id);
      if (checkGoals(state)) return;
      continue;
    }
    return;
  }
}

/** Approximation of [[Goal]] 4.1: controls a Star and has a card in Hand */
function canMove(state: State, player: PlayerId): boolean {
  const controls = Object.keys(state.stars).some((s) => controller(state, s) === player);
  return controls && state.homes[player].hand.length > 0;
}

/** Has an Enabled Hero on the Field, in Hand, Reserve or Discard */
export function hasLeader(state: State, player: PlayerId): boolean {
  return Object.values(state.cards).some((c) => {
    if (c.owner !== player || !isHero(c) || c.face !== 'front') return false;
    const zone = locate(state, c.uid).zone;
    return zone === 'slot' || zone === 'hand' || zone === 'reserve' || zone === 'discard';
  });
}

/** The highest Level of each Class in the faction deck, see [[Singularity]] */
export function topLevels(): Record<Klass, number> {
  const starting = new Set(STARTING_CARDS.map((c) => c.id));
  const top: Record<Klass, number> = { M: 0, C: 0, P: 0, S: 0 };
  for (const def of allCardDefs()) {
    if (starting.has(def.id)) continue;
    for (const e of [def.strong, def.weak]) top[e.klass] = Math.max(top[e.klass], e.level);
  }
  return top;
}

/** For every Class an active card provides it at the top Level, one card per Class */
export function reachesSingularity(state: State, player: PlayerId): boolean {
  const top = topLevels();
  const options: Klass[][] = [];
  for (const c of Object.values(state.cards)) {
    if (c.owner !== player || c.face === 'damaged' || !isActiveFor(state, c.uid, player)) continue;
    const ends: EndName[] = locate(state, c.uid).zone === 'hand' ? ['strong', 'weak'] : [c.end];
    const provides = ends.map((e) => endOf(c, e)).filter((e) => e.level >= top[e.klass]).map((e) => e.klass);
    if (provides.length) options.push(provides);
  }
  const used = new Set<number>();
  const assign = (k: number): boolean => {
    if (k === KLASSES.length) return true;
    for (let i = 0; i < options.length; i++) {
      if (used.has(i) || !options[i].includes(KLASSES[k])) continue;
      used.add(i);
      if (assign(k + 1)) return true;
      used.delete(i);
    }
    return false;
  };
  return assign(0);
}

/** Culture points: current Levels of controlled Colonies plus printed points of active cards */
export function culturePoints(state: State, player: PlayerId): number {
  let points = 0;
  for (const star of Object.keys(state.stars)) {
    for (const c of cardsIn(state, star)) {
      if (typeOf(c) === 'Colony' && c.face === 'front' && cardController(state, c.uid) === player) points += endOf(c).level;
    }
  }
  return points;
}

/** [[Twilight]]: an empty Laboratory makes it the last Turn of the player, every rival gets one more */
function checkTwilight(state: State, player: PlayerId): boolean {
  if (!state.twilight && state.homes[player].laboratory.every((p) => p.cards.length === 0)) {
    const order = state.players.map((p) => p.id);
    const i = order.indexOf(player);
    const last = [...order.slice(i + 1), ...order.slice(0, i)].filter((p) => !state.players.find((x) => x.id === p)!.over);
    state.twilight = { by: player, last };
    log(state, 'Twilight: every rival makes one last Turn', player);
  } else if (state.twilight && state.twilight.by !== player) {
    state.twilight.last = state.twilight.last.filter((p) => p !== player);
  }
  if (state.twilight && state.twilight.last.length === 0) {
    const scores = state.players.filter((p) => !p.over).map((p) => ({ id: p.id, points: culturePoints(state, p.id) }));
    const best = Math.max(...scores.map((s) => s.points));
    win(state, { players: scores.filter((s) => s.points === best).map((s) => s.id), path: 'culture' });
    return true;
  }
  return false;
}

/** Military path: every rival is over */
export function checkGoals(state: State): boolean {
  if (state.winner) return true;
  const alive = state.players.filter((p) => !p.over);
  if (alive.length === 1) {
    win(state, { players: [alive[0].id], path: 'military' });
    return true;
  }
  return false;
}

export function win(state: State, winner: Winner): void {
  state.winner = winner;
  state.undo = [];
  log(state, `${winner.players.map((p) => name(state, p)).join(' and ')} ${winner.players.length > 1 ? 'draw' : 'wins'} by ${winner.path}`, winner.players[0]);
}

export function concede(state: State, player: PlayerId): void {
  check(!state.winner, 'the game is over');
  state.players.find((p) => p.id === player)!.over = true;
  log(state, `${name(state, player)} concedes`, player);
  checkGoals(state);
}
