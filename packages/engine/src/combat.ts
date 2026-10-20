// [[Combat]]: commit, alternate add or pass, reveal, resolve; see RulesReview P28, Guidance G5-G7.
import { deplete, routeRules } from './actions';
import {
  card,
  cardsIn,
  controller,
  freeSlot,
  isActiveFor,
  locate,
  log,
  moveCard,
  opponentOf,
  publicName,
  starOf,
  starPower,
} from './board';
import { endOf, isActor, typeOf } from './cards';
import { check } from './errors';
import { distance } from './field';
import { abilitiesInUse, plusOf, type Pool, powerOf } from './pool';
import { checkGoals } from './turn';
import type { ActionDecl, Combat, CombatEntry, PlayerId, State } from './types';

export function startCombat(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): void {
  const target = state.stars[decl.destination];
  check(target && target.revealed, 'Attack is directed to a revealed Star');
  const direct = pool.contributions.filter((c) => c.mode === 'direct');
  check(
    direct.some((c) => isActor(card(state, c.card)) && c.klass === 'M'),
    'at least one direct participant must be a Military Actor',
  );
  if (decl.source !== decl.destination) {
    const rules = routeRules(state, player, pool, true);
    for (const g of pool.groups) {
      const d = distance(state, g.star, decl.destination, rules);
      check(d <= g.range, `the group at ${g.star} can't reach ${decl.destination}: Range ${g.range}`);
    }
  }
  const defender = opponentOf(state, player);
  const defenders = cardsIn(state, target.id).filter((c) => c.owner === defender && c.face !== 'damaged');
  check(defenders.length > 0, `${decl.destination} has no rival cards to attack`);

  const entries: CombatEntry[] = [];
  for (const c of pool.contributions) {
    entries.push({
      card: c.card,
      side: player,
      mode: c.mode,
      use: c.mode === 'support' ? (c.starter ? decl.starterUse : decl.participants.find((p) => p.card === c.card)?.use) : undefined,
      end: c.end,
      // every Hand supporter but the starter is committed face down, see SimplificationReview S26
      secret: c.from === 'hand' && !c.starter,
      boost: c.starter ? pool.boost : 0,
    });
  }
  // the defending participants are all the defender's cards in the target IPS, P28 a
  for (const c of defenders) entries.push({ card: c.uid, side: defender, mode: 'direct', end: c.end, secret: false, boost: 0 });

  state.homes[player].energy -= pool.boost;
  state.turn.played++;
  state.combat = {
    attacker: player,
    defender,
    source: decl.source,
    target: decl.destination,
    starter: decl.starter,
    entries,
    toAct: defender,
    passes: 0,
    phase: 'commit',
  };
  log(state, `attacks ${decl.destination} from ${decl.source}`, player);
}

function requireToAct(state: State, player: PlayerId, phase: Combat['phase']): Combat {
  const combat = state.combat;
  check(combat, 'no Combat');
  check(combat.phase === phase, phase === 'commit' ? 'the Combat is resolved' : 'the Combat is not resolved yet');
  check(combat.toAct === player, 'not your move in the Combat');
  return combat;
}

/** Add one card: from Hand face down, or a Field card */
export function combatAdd(state: State, player: PlayerId, move: { card: string; end?: 'strong' | 'weak'; use?: CombatEntry['use']; boost?: number }): void {
  const combat = requireToAct(state, player, 'commit');
  check(!combat.entries.some((e) => e.card === move.card), 'the card takes part already');
  check(isActiveFor(state, move.card, player), 'the card is not active for you');
  const c = card(state, move.card);
  const loc = locate(state, move.card);
  const boost = move.boost ?? 0;
  check(boost >= 0 && boost <= state.homes[player].energy, 'not enough Energy to boost');
  let entry: CombatEntry;
  if (loc.zone === 'hand') {
    check(move.end && move.use, 'a Hand supporter needs an End and the ability it gives');
    check(isActor(c), 'only Actors join from Hand');
    entry = { card: move.card, side: player, mode: 'support', use: move.use, end: move.end, secret: true, boost };
  } else {
    const star = starOf(state, move.card)!;
    if (star === combat.target) {
      entry = { card: move.card, side: player, mode: 'direct', end: c.end, secret: false, boost };
    } else {
      check(move.use, 'a remote supporter needs the ability it gives');
      const d = distance(state, star, combat.target);
      const range = isActor(c) ? endOf(c).level : 0;
      check(d <= range, `${publicName(state, move.card)} can't reach ${combat.target}`);
      entry = { card: move.card, side: player, mode: 'support', use: move.use, end: c.end, secret: false, boost };
    }
  }
  check(boost <= capacity(state, entry), 'a boost is limited by the Capacity of the card');
  state.homes[player].energy -= boost;
  combat.entries.push(entry);
  combat.passes = 0;
  combat.toAct = other(combat, player);
  log(state, entry.secret ? 'adds a card face down' : `adds ${publicName(state, move.card)}`, player);
}

export function combatPass(state: State, player: PlayerId): void {
  const combat = requireToAct(state, player, 'commit');
  combat.passes++;
  log(state, 'passes', player);
  if (combat.passes >= 2) resolveCombat(state);
  else combat.toAct = other(combat, player);
}

/** [[Retreat]]: finish the Combat, own participants are Depleted, not Damaged */
export function combatRetreat(state: State, player: PlayerId): void {
  const combat = requireToAct(state, player, 'commit');
  const has = combat.entries.some(
    (e) => e.side === player && abilitiesFor(state, e).some((a) => a.kind === 'tech' && a.tech === 'Retreat'),
  );
  check(has, 'Retreat needs a participant with Retreat');
  log(state, 'retreats', player);
  revealAll(state, combat);
  for (const e of combat.entries) {
    if (e.mode === 'support' || e.side === player) deplete(state, e.card);
  }
  endCombat(state);
}

const other = (combat: Combat, player: PlayerId) => (player === combat.attacker ? combat.defender : combat.attacker);

function abilitiesFor(state: State, e: CombatEntry) {
  return abilitiesInUse(state, e.card, e.end ?? card(state, e.card).end, e.mode, e.use);
}

function capacity(state: State, e: CombatEntry): number {
  const c = card(state, e.card);
  return endOf(c, e.end ?? c.end).level;
}

/** [[AttackPower]] of an entry: power of its Military abilities in use */
export function attackOf(state: State, e: CombatEntry): number {
  const c = card(state, e.card);
  if (endOf(c, e.end ?? c.end).klass !== 'M') return 0;
  return powerOf(abilitiesFor(state, e));
}

/** [[Defense]] = AttackPower, at least 1, plus `+N Defense`, see Guidance G6 */
export function defenseOf(state: State, e: CombatEntry): number {
  return Math.max(1, attackOf(state, e)) + plusOf(abilitiesFor(state, e), 'defense');
}

export function combatTotals(state: State, combat: Combat): { attack: number; defense: number } {
  let attack = 0;
  let defense = 0;
  for (const e of combat.entries) {
    if (e.side === combat.attacker) attack += attackOf(state, e) + e.boost;
    else defense += defenseOf(state, e) + e.boost;
  }
  for (const star of new Set([combat.source, combat.target])) {
    const sp = starPower(state, star, combat.attacker);
    if (sp?.klass === 'M') attack += sp.n;
  }
  const target = state.stars[combat.target];
  if (target.def.ability.kind === 'defense' && controller(state, target.id) === combat.defender) {
    defense += target.def.ability.n;
  }
  return { attack, defense };
}

function revealAll(state: State, combat: Combat): void {
  for (const e of combat.entries) {
    e.secret = false;
    const c = card(state, e.card);
    if (c.face === 'hidden') c.face = 'front';
  }
}

function resolveCombat(state: State): void {
  const combat = state.combat!;
  revealAll(state, combat);
  const { attack, defense } = combatTotals(state, combat);
  // a tie goes to the defender
  const winner = attack > defense ? combat.attacker : combat.defender;
  const advantage = Math.abs(attack - defense);
  combat.result = { winner, attack, defense, advantage };
  log(state, `Combat at ${combat.target}: attack ${attack}, defense ${defense}, ${state.players.find((p) => p.id === winner)!.name} wins`, winner);
  const savable = combat.entries.filter((e) => e.side === winner && e.mode === 'direct' && level(state, e.card) <= advantage);
  if (savable.length) {
    combat.phase = 'save';
    combat.toAct = winner;
  } else {
    finishCombat(state, []);
  }
}

const level = (state: State, uid: string) => endOf(card(state, uid)).level;

/** Winner saves direct participants with total Level not more than the advantage */
export function combatSave(state: State, player: PlayerId, cards: string[]): void {
  const combat = requireToAct(state, player, 'save');
  const own = new Set(combat.entries.filter((e) => e.side === player && e.mode === 'direct').map((e) => e.card));
  check(cards.every((uid) => own.has(uid)), 'save only your own direct participants');
  check(new Set(cards).size === cards.length, 'save a card once');
  const total = cards.reduce((n, uid) => n + level(state, uid), 0);
  check(total <= combat.result!.advantage, `saved Levels ${total} are over the advantage ${combat.result!.advantage}`);
  finishCombat(state, cards);
}

function finishCombat(state: State, saved: string[]): void {
  const combat = state.combat!;
  const direct = combat.entries.filter((e) => e.mode === 'direct');
  for (const e of direct) if (!saved.includes(e.card)) damage(state, e.card);

  if (combat.result!.winner === combat.attacker) {
    // surviving attacking Units move to free Slots of the target, the rest stay
    const target = state.stars[combat.target];
    for (const e of direct) {
      const c = card(state, e.card);
      if (e.side !== combat.attacker || c.face === 'damaged' || !isActor(c) || !state.cards[e.card]) continue;
      if (starOf(state, e.card) === combat.target) continue;
      const index = freeSlot(target, 'units');
      if (index >= 0) moveCard(state, e.card, { zone: 'slot', star: target.id, row: 'units', index });
    }
  }
  for (const e of combat.entries) if (e.mode === 'support') deplete(state, e.card);
  endCombat(state);
}

function endCombat(state: State): void {
  destroyLonelyWrecks(state);
  state.combat = null;
  checkGoals(state);
}

/** [[Damaged]]: a Damaged card that gets Damaged again is [[Destroyed]] */
export function damage(state: State, uid: string): void {
  const c = card(state, uid);
  if (locate(state, uid).zone !== 'slot') return;
  if (c.face === 'damaged') destroy(state, uid);
  else c.face = 'damaged';
}

/** [[Destroyed]]: to the top of the faction's Factory pile of its Type */
export function destroy(state: State, uid: string): void {
  const c = card(state, uid);
  const pile = state.homes[c.owner].factory.findIndex((p) => p.type === typeOf(c));
  moveCard(state, uid, { zone: 'factory', player: c.owner, pile });
  c.face = 'front';
  c.end = 'strong';
  delete c.known;
  log(state, `${c.def} is destroyed`, c.owner);
}

/** A Damaged card in a Star where its faction has no Enabled card is Destroyed, [[Damaged]] 7 */
export function destroyLonelyWrecks(state: State): void {
  for (const star of Object.keys(state.stars)) {
    const cards = cardsIn(state, star);
    for (const c of cards) {
      if (c.face !== 'damaged') continue;
      if (!cards.some((o) => o.owner === c.owner && o.face === 'front')) destroy(state, c.uid);
    }
  }
}

