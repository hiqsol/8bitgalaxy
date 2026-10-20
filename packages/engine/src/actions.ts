// [[PerformAction]]: declare, validate, resolve, [[Deplete]], see RulesReview P34.
import {
  card,
  cardController,
  controller,
  freeSlot,
  freeSlots,
  isActiveFor,
  locate,
  log,
  moveCard,
  pinsFor,
  place,
  publicName,
  remove,
  rowFor,
  starOf,
  starTechs,
} from './board';
import { costOf, defOf, endOf, hubKlass, hubTech, isActor, isSocialType, isStructure, sizeOf, typeOf } from './cards';
import { startCombat } from './combat';
import { check } from './errors';
import { distance, distances, isRevealed, neighbours, type RouteRules } from './field';
import { buildPool, type Contribution, hasTech, type Pool } from './pool';
import type { ActionDecl, Card, CardType, Klass, ManageOp, PlayerId, Prerequisite, State } from './types';

export const ACTIONS = {
  move: 'Move',
  attack: 'Attack',
  explore: 'Explore',
  research: 'Research',
  manage: 'Manage',
  create: 'Create',
  upgrade: 'Upgrade',
  recover: 'Recover',
} as const;

/** [[Manage]] table: Classes of power that manage each Type */
export const MANAGE: Record<CardType, Klass[]> = {
  Base: ['P', 'S'],
  Colony: ['C', 'S'],
  Ship: ['M', 'P', 'S'],
  Hero: ['M', 'C', 'S'],
};

/** Common checks and the pool, without resolving: for validation and previews */
export function prepareAction(state: State, player: PlayerId, decl: ActionDecl): Pool {
  check(!state.winner, 'the game is over');
  check(!state.combat, 'finish the Combat first');
  check(state.turn.player === player, 'not your Turn');
  check(ACTIONS[decl.kind], `unknown action ${decl.kind}`);
  const source = state.stars[decl.source];
  check(source, 'the source must be a Star');
  check(controller(state, decl.source) === player, 'the source must be a Star you control');
  check(state.stars[decl.destination] || state.spaces[decl.destination], 'unknown destination');
  const pool = buildPool(state, player, decl);
  check(pool.boost <= state.homes[player].energy, 'not enough Energy to boost');
  check(pool.boost <= pool.capacity, 'a boost is limited by the Capacity of the participants');
  return pool;
}

export function performAction(state: State, player: PlayerId, decl: ActionDecl): void {
  const pool = prepareAction(state, player, decl);
  if (decl.kind === 'attack') {
    startCombat(state, player, decl, pool);
    return;
  }
  const keep = RESOLVERS[decl.kind](state, player, decl, pool);
  finishAction(state, player, decl, pool, keep);
}

type Resolver = (state: State, player: PlayerId, decl: ActionDecl, pool: Pool) => Set<string>;

const RESOLVERS: Record<Exclude<ActionDecl['kind'], 'attack'>, Resolver> = {
  move: resolveMove,
  explore: resolveExplore,
  research: resolveResearch,
  create: resolveCreate,
  upgrade: resolveUpgrade,
  recover: resolveRecover,
  manage: resolveManage,
};

/** Spend the boost, reveal Hidden participants, deplete all but `keep` */
function finishAction(state: State, player: PlayerId, decl: ActionDecl, pool: Pool, keep: Set<string>): void {
  state.homes[player].energy -= pool.boost;
  for (const c of pool.contributions) {
    if (keep.has(c.card)) continue;
    if (decl.kind !== 'move') revealOnField(state, c.card);
    deplete(state, c.card);
  }
  state.turn.played++;
}

function revealOnField(state: State, uid: string): void {
  const c = card(state, uid);
  if (c.face === 'hidden' && locate(state, uid).zone === 'slot') c.face = 'front';
}

/** [[Deplete]]: a Unit goes to Discard, a Structure turns to its weak End */
export function deplete(state: State, uid: string): void {
  const c = card(state, uid);
  const loc = locate(state, uid);
  if (loc.zone !== 'hand' && loc.zone !== 'slot') return;
  if (isStructure(c)) {
    c.end = 'weak';
    return;
  }
  if (c.face === 'damaged') return;
  moveCard(state, uid, { zone: 'discard', player: c.owner });
  c.face = 'front';
  c.end = 'strong';
  delete c.known;
}

export function routeRules(state: State, player: PlayerId, pool: Pool, pinning: boolean): RouteRules {
  const rules: RouteRules = { navigation: hasTech(pool, 'Navigation') };
  // Hidden cards neither pin nor get pinned, see [[Pinning]] 3
  const movers = pool.contributions.filter((c) => c.from !== 'hand' && c.mode === 'direct');
  if (pinning && movers.some((c) => !c.hidden)) rules.pins = pinsFor(state, player);
  return rules;
}

/** Every group must reach the destination, see [[PerformAction]] 4 */
export function checkGroups(state: State, pool: Pool, destination: string, rules: RouteRules): void {
  for (const g of pool.groups) {
    const d = distance(state, g.star, destination, rules);
    check(d <= g.range, `the group at ${g.star} can't reach ${destination}: distance ${fmt(d)}, Range ${g.range}`);
  }
}

const fmt = (d: number) => (d === Infinity ? 'no route' : String(d));

function requireHub(state: State, star: string, player: PlayerId, tech: string): void {
  check(state.stars[star] && starTechs(state, star, player).includes(tech), `${star} has no ${tech} of yours`);
}

function requirePower(pool: Pool, klass: Klass, cost: number, what: string): void {
  check(pool.power[klass] >= cost, `${what} costs ${cost} ${klass} power, the participants give ${pool.power[klass]}`);
}

// --- Move

function resolveMove(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  const dest = state.stars[decl.destination];
  check(dest, "a Move can't finish in Space");
  check(dest.revealed, "cards can't enter a hidden Star");
  const movers = pool.contributions.filter((c) => c.mode === 'direct' && c.from === decl.source && isActor(card(state, c.card)));
  check(movers.length > 0, 'select the cards that move: Actors in the source');
  const cargo = decl.cargo ?? [];
  const ships = movers.filter((m) => typeOf(card(state, m.card)) === 'Ship' || m.hidden);
  let size = 0;
  for (const uid of cargo) {
    const c = card(state, uid);
    check(starOf(state, uid) === decl.source, 'cargo is taken from the source');
    check(isActiveFor(state, uid, player), `cargo ${publicName(state, uid)} is not active for you`);
    check(!pool.contributions.some((p) => p.card === uid), 'cargo is a target, not a participant');
    size += sizeOf(c);
    check(ships.some((s) => carries(card(state, s.card), s.klass, c)), `no Ship in the group carries ${publicName(state, uid)}`);
  }
  const capacity = movers.reduce((n, m) => n + m.capacity, 0) + pool.contributions.filter((c) => c.mode === 'support').reduce((n, c) => n + c.capacity, 0);
  check(size <= capacity, `cargo Size ${size} is over the group Capacity ${capacity}`);
  if (decl.source !== decl.destination) {
    checkGroups(state, pool, decl.destination, routeRules(state, player, pool, true));
  }

  const travellers = [...movers.map((m) => m.card), ...cargo];
  // the move works on a copy of the state: a failed check leaves nothing half done
  for (const uid of travellers) remove(state, uid);
  for (const uid of travellers) {
    const row = rowFor(card(state, uid));
    const index = freeSlot(dest, row, decl.slots?.[uid]);
    check(index >= 0, `no free ${row === 'units' ? 'Unit' : 'Structure'} Slot at ${dest.id} for ${publicName(state, uid)}`);
    place(state, uid, { zone: 'slot', star: dest.id, row, index });
  }
  log(state, `moves ${travellers.map((uid) => publicName(state, uid)).join(', ')} from ${decl.source} to ${dest.id}`, player);
  return new Set(travellers);
}

/** [[Move]] 6.3: which Ship Class carries the cargo card */
function carries(ship: Card, klass: Klass, cargo: Card): boolean {
  if (ship.face === 'hidden') return isActor(cargo) && typeOf(cargo) === 'Hero';
  if (typeOf(cargo) === 'Hero') return true;
  if (klass === 'S') return true;
  if (klass === 'M') return isActor(cargo);
  if (klass === 'C') return isSocialType(typeOf(cargo));
  return !isSocialType(typeOf(cargo));
}

// --- Explore

export function exploreCost(state: State, decl: ActionDecl): number {
  const t = decl.target!;
  if (t.kind === 'card') return costOf(defOf(card(state, t.card)));
  const star = state.stars[t.id];
  if (star) return star.def.units + star.def.structures + star.def.extraCost;
  return state.spaces[t.id].cost;
}

function resolveExplore(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  check(hasTech(pool, 'Explore'), 'Explore needs a participant with Explore');
  const t = decl.target;
  check(t, 'select what to explore');
  const groups = pool.groups.length ? pool.groups : [{ star: decl.source, range: 0, cards: [] }];
  const rules = routeRules(state, player, pool, false);
  if (t.kind === 'tile') {
    check(state.stars[t.id] || state.spaces[t.id], 'unknown tile');
    check(!isRevealed(state, t.id), 'the tile is revealed already');
    const bordering = neighbours(state, t.id).filter((n) => isRevealed(state, n));
    for (const g of groups) {
      const dist = distances(state, g.star, rules);
      check(
        bordering.some((n) => (dist.get(n) ?? Infinity) <= g.range),
        `the target must border ${g.star} or a revealed tile within Range ${g.range}`,
      );
    }
  } else {
    const c = card(state, t.card);
    const star = starOf(state, t.card);
    check(star && c.face === 'hidden' && c.owner !== player, 'the target must be a rival Hidden card on the Field');
    checkGroups(state, pool, star, rules);
  }
  const cost = exploreCost(state, decl);
  const classes = pool.techs.get('Explore')!;
  const best = Math.max(...classes.map((k) => pool.power[k]));
  check(best >= cost, `Explore costs ${cost} ${classes.join('/')} power, the participants give ${best}`);

  if (t.kind === 'tile') {
    (state.stars[t.id] ?? state.spaces[t.id]).revealed = true;
    log(state, `explores ${state.stars[t.id] ? `Star ${t.id}: ${state.stars[t.id].def.name}` : `Space ${t.id}`}`, player);
  } else {
    const c = card(state, t.card);
    if (t.reveal) c.face = 'front';
    else c.known = [...new Set([...(c.known ?? []), player])];
    log(state, t.reveal ? `explores and reveals ${c.def}` : 'explores a hidden card', player);
  }
  return new Set();
}

// --- Research

/** Each Prerequisite pair is provided by a separate participant, see [[Prerequisites]] */
export function matchPrerequisites(reqs: Prerequisite[], providers: Contribution[]): boolean {
  const used = new Set<number>();
  const assign = (i: number): boolean => {
    if (i === reqs.length) return true;
    for (let j = 0; j < providers.length; j++) {
      const p = providers[j];
      if (used.has(j) || p.klass !== reqs[i].klass || p.level < reqs[i].level) continue;
      used.add(j);
      if (assign(i + 1)) return true;
      used.delete(j);
    }
    return false;
  };
  return assign(0);
}

function resolveResearch(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  const r = decl.research;
  check(r, 'select a Laboratory pile');
  const home = state.homes[player];
  const pile = home.laboratory[r.pile];
  check(pile && pile.cards.length, 'the Laboratory pile is empty');
  const uid = pile.cards[pile.cards.length - 1];
  const def = defOf(card(state, uid));
  requireHub(state, decl.destination, player, hubTech(def.type));
  checkGroups(state, pool, decl.destination, routeRules(state, player, pool, false));
  if (r.toLab !== undefined) {
    check(home.laboratory[r.toLab] && r.toLab !== r.pile, 'select another Laboratory pile');
    requirePower(pool, 'S', 1, 'Moving a card between Laboratory piles');
    moveCard(state, uid, { zone: 'laboratory', player, pile: r.toLab });
    log(state, `shifts ${def.id} in the Laboratory`, player);
  } else {
    check(matchPrerequisites(def.prerequisites, pool.contributions), `${def.id} needs ${def.prerequisites.map((p) => p.level + p.klass).join(', ')} from separate participants`);
    requirePower(pool, 'S', costOf(def), `Research of ${def.id}`);
    const to = home.factory.findIndex((p) => p.type === def.type);
    moveCard(state, uid, { zone: 'factory', player, pile: to });
    log(state, `researches ${def.id}`, player);
  }
  return new Set();
}

// --- Create

function resolveCreate(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  const piles = decl.create?.piles ?? [];
  check(piles.length, 'select Factory piles to create from');
  const factory = state.homes[player].factory.map((p) => [...p.cards]);
  const uids = piles.map((i) => {
    check(factory[i]?.length, 'the Factory pile is empty');
    return factory[i].pop()!;
  });
  const cards = uids.map((uid) => card(state, uid));
  const types = new Set(cards.map(typeOf));
  const hub = hubTech(typeOf(cards[0]));
  check(cards.every((c) => hubTech(typeOf(c)) === hub), 'create cards of one Origin in an action');
  const structures = cards.every(isStructure);
  check(structures || cards.every(isActor), 'create either Actors or Structures in an action');
  check(hasTech(pool, hub), `Create of ${[...types].join(', ')} needs ${hub} as a participant`);
  for (const c of cards) {
    // a Social card is created only when its lower Level is 1, see [[Create]] 4
    check(!isSocialType(typeOf(c)) || defOf(c).weak.level === 1, `${c.def} comes only by Upgrade`);
  }
  const cost = cards.reduce((n, c) => n + costOf(defOf(c)), 0);
  requirePower(pool, hubKlass(hub), cost, 'Create');

  if (structures) {
    requireHub(state, decl.source, player, hub);
    const dest = state.stars[decl.destination];
    check(dest && dest.revealed, 'a Structure is created in a revealed Star');
    check(freeSlots(dest, 'structures') >= cards.length, `no free Structure Slot at ${dest.id}`);
  } else {
    requireHub(state, decl.destination, player, hub);
  }
  checkGroups(state, pool, decl.destination, routeRules(state, player, pool, false));

  for (const c of cards) {
    remove(state, c.uid);
    c.face = 'front';
    c.end = 'strong';
    if (structures) {
      const dest = state.stars[decl.destination];
      const index = freeSlot(dest, 'structures', decl.slots?.[c.uid]);
      check(index >= 0, `the Slot at ${dest.id} is taken`);
      place(state, c.uid, { zone: 'slot', star: dest.id, row: 'structures', index });
    } else {
      place(state, c.uid, { zone: 'discard', player });
    }
  }
  log(state, `creates ${cards.map((c) => c.def).join(', ')}${structures ? ` at ${decl.destination}` : ''}`, player);
  return new Set();
}

// --- Upgrade

function resolveUpgrade(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  const u = decl.upgrade;
  check(u, 'select the card to upgrade');
  check(hasTech(pool, 'Upgrade'), 'Upgrade needs a participant with Upgrade');
  const old = card(state, u.old);
  check(old.owner === player, 'upgrade your own card');
  const pile = state.homes[player].factory[u.pile];
  check(pile?.cards.length, 'the Factory pile is empty');
  const fresh = card(state, pile.cards[pile.cards.length - 1]);
  check(typeOf(fresh) === typeOf(old), 'the new card must be of the same Type');
  const diff = costOf(defOf(fresh)) - costOf(defOf(old));
  check(diff > 0, "the new card's Cost must be greater");
  const hub = hubTech(typeOf(old));
  check(hasTech(pool, hub), `Upgrade of a ${typeOf(old)} needs ${hub} as a participant`);
  const oldLoc = locate(state, u.old);
  if (isActor(old)) {
    check(oldLoc.zone === 'discard' && oldLoc.player === player, 'an Actor is upgraded in your Discard');
    requireHub(state, decl.destination, player, hub);
  } else {
    check(oldLoc.zone === 'slot' && cardController(state, u.old) === player, 'a Structure is upgraded on the Field');
    check(oldLoc.zone === 'slot' && decl.destination === oldLoc.star, "direct the Upgrade to the old card's Star");
    requireHub(state, decl.source, player, hub);
  }
  requirePower(pool, hubKlass(hub), diff, 'Upgrade');
  checkGroups(state, pool, decl.destination, routeRules(state, player, pool, false));
  const oldTo = u.oldTo ?? state.homes[player].factory.findIndex((p) => p.type === typeOf(old));
  check(state.homes[player].factory[oldTo], 'select a Factory pile for the old card');

  remove(state, fresh.uid);
  remove(state, old.uid);
  place(state, fresh.uid, oldLoc);
  fresh.face = 'front';
  fresh.end = 'strong';
  place(state, old.uid, { zone: 'factory', player, pile: oldTo });
  old.face = 'front';
  old.end = 'strong';
  log(state, `upgrades ${old.def} to ${fresh.def}`, player);
  return new Set();
}

// --- Recover

function resolveRecover(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  const uid = decl.recover?.card;
  check(uid, 'select the Damaged card');
  const target = card(state, uid);
  check(target.owner === player && target.face === 'damaged', 'recover your own Damaged card');
  const star = starOf(state, uid);
  check(star === decl.destination, "direct Recover to the card's Star");
  check(hasTech(pool, 'Recover'), 'Recover needs a participant with Recover');
  const hub = hubTech(typeOf(target));
  check(hasTech(pool, hub), `Recover of a ${typeOf(target)} needs ${hub} as a participant`);
  requireHub(state, decl.source, player, hub);
  requirePower(pool, hubKlass(hub), endOf(target).level, 'Recover');
  checkGroups(state, pool, decl.destination, routeRules(state, player, pool, false));
  target.face = 'front';
  log(state, `recovers ${target.def} at ${star}`, player);
  return new Set();
}

// --- Manage

function resolveManage(state: State, player: PlayerId, decl: ActionDecl, pool: Pool): Set<string> {
  const ops = decl.manage ?? [];
  check(ops.length, 'select what to manage');
  const klass = endOf(card(state, decl.starter), decl.starterEnd).klass;
  // only the power of the starter's Class, see [[Manage]] 4
  check(pool.power[klass] >= ops.length, `Manage costs ${ops.length} ${klass} power, the participants give ${pool.power[klass]}`);
  checkGroups(state, pool, decl.destination, routeRules(state, player, pool, false));
  const home = state.homes[player];
  const allowed = (type: CardType) => check(MANAGE[type].includes(klass), `${klass} power doesn't manage a ${type}`);
  for (const op of ops) manageOne(state, player, decl, op, home, allowed);
  return new Set();
}

function manageOne(
  state: State,
  player: PlayerId,
  decl: ActionDecl,
  op: ManageOp,
  home: State['homes'][string],
  allowed: (type: CardType) => void,
): void {
  if (op.op === 'rotate' || op.op === 'shift') {
    const c = card(state, op.card);
    check(starOf(state, op.card) === decl.destination, 'direct Manage to the Star of the card');
    check(c.face === 'front' && cardController(state, op.card) === player, 'manage a card you control');
    allowed(typeOf(c));
    if (op.op === 'rotate') {
      c.end = c.end === 'strong' ? 'weak' : 'strong';
      log(state, `rotates ${c.def} to its ${c.end} End`, player);
    } else {
      check(isStructure(c), 'only Structures shift between Slots, Actors Move');
      const star = state.stars[decl.destination];
      check(star.structures[op.slot] === null, 'the Slot is taken');
      moveCard(state, op.card, { zone: 'slot', star: star.id, row: 'structures', index: op.slot });
      log(state, `shifts ${c.def} at ${star.id}`, player);
    }
    return;
  }
  const zone = op.op === 'labShift' ? 'laboratory' : 'factory';
  const from = home[zone][op.from];
  check(from?.cards.length && home[zone][op.to] && op.from !== op.to, 'select two piles');
  const uid = from.cards[from.cards.length - 1];
  const type = typeOf(card(state, uid));
  allowed(type);
  requireHub(state, decl.destination, player, hubTech(type));
  moveCard(state, uid, { zone, player, pile: op.to });
  log(state, `shifts ${card(state, uid).def} in the ${zone === 'factory' ? 'Factory' : 'Laboratory'}`, player);
}

