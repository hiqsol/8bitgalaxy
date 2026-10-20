// Card locations, [[Control]], [[ControlledBy]] and [[ActiveFor]].
import { endOf, isActor, techsOf } from './cards';
import type { Card, Klass, Location, PlayerId, Row, Star, State } from './types';

export function card(state: State, uid: string): Card {
  const c = state.cards[uid];
  if (!c) throw new Error(`unknown card ${uid}`);
  return c;
}

export function locate(state: State, uid: string): Location {
  for (const [player, home] of Object.entries(state.homes)) {
    for (const zone of ['hand', 'reserve', 'discard'] as const) {
      if (home[zone].includes(uid)) return { zone, player };
    }
    for (const zone of ['factory', 'laboratory'] as const) {
      const pile = home[zone].findIndex((p) => p.cards.includes(uid));
      if (pile >= 0) return { zone, player, pile };
    }
  }
  for (const star of Object.values(state.stars)) {
    for (const row of ['units', 'structures'] as const) {
      const index = star[row].indexOf(uid);
      if (index >= 0) return { zone: 'slot', star: star.id, row, index };
    }
  }
  throw new Error(`card ${uid} is nowhere`);
}

/** Star the card is in, or null when it is not on the [[Field]] */
export function starOf(state: State, uid: string): string | null {
  const loc = locate(state, uid);
  return loc.zone === 'slot' ? loc.star : null;
}

export function remove(state: State, uid: string): Location {
  const loc = locate(state, uid);
  if (loc.zone === 'slot') {
    state.stars[loc.star][loc.row][loc.index] = null;
  } else if (loc.zone === 'factory' || loc.zone === 'laboratory') {
    const cards = state.homes[loc.player][loc.zone][loc.pile].cards;
    cards.splice(cards.indexOf(uid), 1);
  } else {
    const cards = state.homes[loc.player][loc.zone];
    cards.splice(cards.indexOf(uid), 1);
  }
  return loc;
}

/** Put a card on top of a pile or into a free slot */
export function place(state: State, uid: string, to: Location): void {
  if (to.zone === 'slot') {
    const slots = state.stars[to.star][to.row];
    if (slots[to.index] === undefined) throw new Error(`no slot ${to.index} at ${to.star}`);
    if (slots[to.index] !== null) throw new Error(`slot ${to.index} at ${to.star} is taken`);
    slots[to.index] = uid;
  } else if (to.zone === 'factory' || to.zone === 'laboratory') {
    state.homes[to.player][to.zone][to.pile].cards.push(uid);
  } else {
    state.homes[to.player][to.zone].push(uid);
  }
}

export function moveCard(state: State, uid: string, to: Location): void {
  remove(state, uid);
  place(state, uid, to);
}

export const rowFor = (c: Card): Row => (isActor(c) ? 'units' : 'structures');

export function freeSlot(star: Star, row: Row, preferred?: number): number {
  if (preferred !== undefined) return star[row][preferred] === null ? preferred : -1;
  return star[row].indexOf(null);
}

export const freeSlots = (star: Star, row: Row) => star[row].filter((s) => s === null).length;

export const cardsIn = (state: State, star: string): Card[] =>
  [...state.stars[star].units, ...state.stars[star].structures]
    .filter((uid): uid is string => uid !== null)
    .map((uid) => state.cards[uid]);

/** A card is overlapped when the next lower slot of its row holds a card, see [[Slot]] */
export function isOverlapped(state: State, uid: string): boolean {
  const loc = locate(state, uid);
  if (loc.zone !== 'slot') return false;
  return state.stars[loc.star][loc.row][loc.index + 1] != null;
}

/** [[Control]] level: 0 none, 1 Structure, 2 Actor; Enabled or Hidden cards count */
export function controlLevel(state: State, star: string, player: PlayerId): number {
  let level = 0;
  for (const c of cardsIn(state, star)) {
    if (c.owner !== player || c.face === 'damaged') continue;
    level = Math.max(level, isActor(c) ? 2 : 1);
  }
  return level;
}

/** Star [[ControlledBy]]: strictly the highest Control, null when nobody or [[Disputed]] */
export function controller(state: State, star: string): PlayerId | null {
  let best: PlayerId | null = null;
  let bestLevel = 0;
  let tie = false;
  for (const p of state.players) {
    const level = controlLevel(state, star, p.id);
    if (level > bestLevel) {
      best = p.id;
      bestLevel = level;
      tie = false;
    } else if (level === bestLevel && level > 0) tie = true;
  }
  return tie ? null : best;
}

export function isDisputed(state: State, star: string): boolean {
  const levels = state.players.map((p) => controlLevel(state, star, p.id));
  const top = Math.max(...levels);
  return top > 0 && levels.filter((l) => l === top).length > 1;
}

/** Card [[ControlledBy]] */
export function cardController(state: State, uid: string): PlayerId | null {
  const c = card(state, uid);
  if (c.face === 'damaged') return null;
  const star = starOf(state, uid);
  if (!star || isActor(c)) return c.owner;
  if (isDisputed(state, star)) {
    const levels = state.players.map((p) => controlLevel(state, star, p.id));
    const top = Math.max(...levels);
    return controlLevel(state, star, c.owner) === top ? c.owner : null;
  }
  return controller(state, star);
}

/** [[ActiveFor]]: not Damaged, controlled by the player, on the Field or in Hand */
export function isActiveFor(state: State, uid: string, player: PlayerId): boolean {
  const loc = locate(state, uid);
  if (loc.zone === 'hand') return loc.player === player;
  if (loc.zone !== 'slot') return false;
  return cardController(state, uid) === player;
}

/** Stars with rival Enabled Military Actors, see [[Pinning]] */
export function pinsFor(state: State, player: PlayerId): Set<string> {
  const pins = new Set<string>();
  for (const star of Object.keys(state.stars)) {
    for (const c of cardsIn(state, star)) {
      if (c.owner !== player && c.face === 'front' && isActor(c) && endOf(c).klass === 'M') pins.add(star);
    }
  }
  return pins;
}

/** Technologies the cards up in a Star give to the Star's controller, Star Ability included */
export function starTechs(state: State, star: string, player: PlayerId): string[] {
  const s = state.stars[star];
  const techs: string[] = [];
  if (s.revealed && s.def.ability.kind === 'tech' && controller(state, star) === player) techs.push(s.def.ability.tech);
  for (const c of cardsIn(state, star)) {
    if (c.face !== 'front' || cardController(state, c.uid) !== player) continue;
    const e = endOf(c);
    techs.push(...techsOf(e.primary));
    if (!isOverlapped(state, c.uid)) techs.push(...techsOf(e.secondary));
  }
  return techs;
}

/** Star [[Ability]] for its controller: power of the Star Class to own actions there */
export function starPower(state: State, star: string, player: PlayerId): { klass: Klass; n: number } | null {
  const s = state.stars[star];
  if (!s?.revealed || s.def.ability.kind !== 'power' || controller(state, star) !== player) return null;
  return { klass: s.def.klass, n: s.def.ability.n };
}

export const opponentOf = (state: State, player: PlayerId): PlayerId =>
  state.players.find((p) => p.id !== player)!.id;

export function log(state: State, text: string, player: PlayerId = state.turn.player): void {
  state.log.push({ turn: state.turn.number, player, text });
}

/** Name of a card for the public log: Hidden and unknown cards are not named */
export function publicName(state: State, uid: string): string {
  const c = card(state, uid);
  return c.face === 'hidden' ? 'a hidden card' : c.def;
}

