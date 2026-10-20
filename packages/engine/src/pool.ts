// What the participants of an action provide, see [[PerformAction]] and [[Support]].
import { card, isActiveFor, isOverlapped, locate, starOf, starPower, starTechs } from './board';
import { capacityOf, endOf, isActor, isPlayable, rangeOf } from './cards';
import { RuleError } from './errors';
import { type Ability, type ActionDecl, type EndName, KLASSES, type Klass, type PlayerId, type State, type SupportUse } from './types';

export interface Contribution {
  card: string;
  mode: 'direct' | 'support';
  /** 'hand' or the Star the card is in */
  from: string;
  end: EndName;
  klass: Klass;
  level: number;
  /** abilities in use */
  abilities: Ability[];
  power: number;
  techs: string[];
  range: number;
  capacity: number;
  /** Hand supporter giving Range: the group it joins */
  group?: string;
  starter?: boolean;
  hidden: boolean;
}

export interface Group {
  star: string;
  range: number;
  cards: string[];
}

export interface Pool {
  contributions: Contribution[];
  power: Record<Klass, number>;
  /** technology -> Classes of the Ends that provide it */
  techs: Map<string, Klass[]>;
  /** groups of participants outside the destination, see [[PerformAction]] 4 */
  groups: Group[];
  capacity: number;
  boost: number;
}

const zero = (): Record<Klass, number> => ({ M: 0, C: 0, P: 0, S: 0 });

/** Abilities a card gives with the chosen use, see [[Support]] 2 */
export function abilitiesInUse(state: State, uid: string, end: EndName, mode: 'direct' | 'support', use?: SupportUse): Ability[] {
  const c = card(state, uid);
  const e = endOf(c, end);
  const onField = locate(state, uid).zone === 'slot';
  const secondary = onField && isOverlapped(state, uid) ? [] : e.secondary;
  // `+Y` of a printed power is added on the Field, see [[PrimaryAbility]]
  const primary = e.primary.map((a) => (a.kind === 'power' && !onField ? { ...a, field: 0 } : a));
  let list: Ability[];
  if (mode === 'direct') list = [...primary, ...secondary];
  else if (use === 'primary') list = primary;
  else if (use === 'secondary') list = secondary;
  else list = [];
  return list.filter(isPlayable);
}

export function powerOf(abilities: Ability[]): number {
  let n = 0;
  for (const a of abilities) {
    if (a.kind === 'power') n += a.base + a.field;
    if (a.kind === 'plus' && a.what === 'power') n += a.n;
  }
  return n;
}

export const plusOf = (abilities: Ability[], what: string) =>
  abilities.reduce((n, a) => n + (a.kind === 'plus' && a.what === what ? a.n : 0), 0);

export function contribution(
  state: State,
  uid: string,
  mode: 'direct' | 'support',
  from: string,
  opts: { end?: EndName; use?: SupportUse; moving?: boolean } = {},
): Contribution {
  const c = card(state, uid);
  const end = opts.end ?? c.end;
  const e = endOf(c, end);
  // a Hidden card in a Move gives only Range 1 and Capacity 1, see [[Hidden]]
  const hiddenMove = c.face === 'hidden' && opts.moving;
  const abilities = hiddenMove ? [] : abilitiesInUse(state, uid, end, mode, opts.use);
  const virtual = hiddenMove ? c : { ...c, face: 'front' as const };
  const direct = mode === 'direct';
  return {
    card: uid,
    mode,
    from,
    end,
    klass: e.klass,
    level: e.level,
    abilities,
    power: powerOf(abilities),
    techs: abilities.filter((a) => a.kind === 'tech').map((a) => (a as { tech: string }).tech),
    range: (direct || opts.use === 'range' ? rangeOf(virtual, end) : 0) + plusOf(abilities, 'range'),
    capacity: (direct || opts.use === 'capacity' ? capacityOf(virtual, end) : 0) + plusOf(abilities, 'capacity'),
    hidden: c.face === 'hidden',
  };
}

/**
 * Collect the participants of an action: the starter and supporters from
 * Hand, direct participants in the source and destination, remote
 * supporters from other Stars.
 */
export function buildPool(state: State, player: PlayerId, decl: ActionDecl): Pool {
  const moving = decl.kind === 'move';
  const seen = new Set<string>();
  const contributions: Contribution[] = [];
  const destStar = state.stars[decl.destination] ? decl.destination : null;

  const starter = card(state, decl.starter);
  if (!state.homes[player].hand.includes(decl.starter)) throw new RuleError('the starter must be a card from your Hand');
  if (!isActor(starter)) throw new RuleError('the starter must be an Actor');
  contributions.push({
    ...contribution(state, decl.starter, 'support', 'hand', { end: decl.starterEnd, use: decl.starterUse }),
    starter: true,
    group: decl.starterUse === 'range' ? decl.source : undefined,
  });
  seen.add(decl.starter);

  for (const p of decl.participants) {
    if (seen.has(p.card)) throw new RuleError('a card takes part only once');
    seen.add(p.card);
    if (!isActiveFor(state, p.card, player)) throw new RuleError(`${p.card} is not active for you`);
    const star = starOf(state, p.card);
    if (!star) {
      if (!p.use || !p.end) throw new RuleError('a Hand supporter needs an End and the ability it gives');
      contributions.push({
        ...contribution(state, p.card, 'support', 'hand', { end: p.end, use: p.use }),
        group: p.use === 'range' ? (p.group ?? decl.source) : undefined,
      });
    } else if (star === decl.source || star === destStar) {
      contributions.push(contribution(state, p.card, 'direct', star, { moving }));
    } else {
      if (!p.use) throw new RuleError('a remote supporter needs the ability it gives');
      contributions.push(contribution(state, p.card, 'support', star, { use: p.use, moving }));
    }
  }

  const power = zero();
  const techs = new Map<string, Klass[]>();
  for (const c of contributions) {
    power[c.klass] += c.power;
    for (const t of c.techs) techs.set(t, [...(techs.get(t) ?? []), c.klass]);
  }
  // Star Abilities apply to own actions with source or destination there, see SimplificationReview S21 b
  for (const star of new Set([decl.source, destStar].filter((s): s is string => !!s))) {
    const sp = starPower(state, star, player);
    if (sp) power[sp.klass] += sp.n;
    const s = state.stars[star];
    if (s.def.ability.kind === 'tech' && starTechs(state, star, player).includes(s.def.ability.tech)) {
      techs.set(s.def.ability.tech, [...(techs.get(s.def.ability.tech) ?? []), s.def.klass]);
    }
  }

  const boost = Object.values(decl.boost ?? {}).reduce((a, b) => a + (b ?? 0), 0);
  for (const k of KLASSES) {
    const n = decl.boost?.[k] ?? 0;
    if (n < 0 || !Number.isInteger(n)) throw new RuleError('boost must be a whole number');
    power[k] += n;
  }

  // groups: participants from one IPS other than the destination
  const groups = new Map<string, Group>();
  for (const c of contributions) {
    const star = c.from === 'hand' ? c.group : c.from;
    if (!star || star === destStar) continue;
    if (!groups.has(star)) groups.set(star, { star, range: 0, cards: [] });
    const g = groups.get(star)!;
    if (c.from !== 'hand') g.cards.push(c.card);
    g.range += c.from === 'hand' ? c.range : rangeOf(c.hidden && moving ? card(state, c.card) : { ...card(state, c.card), face: 'front' }, c.end) + plusOf(c.abilities, 'range');
  }

  return {
    contributions,
    power,
    techs,
    groups: [...groups.values()],
    capacity: contributions.reduce((n, c) => n + c.capacity, 0),
    boost,
  };
}

export const hasTech = (pool: Pool, tech: string) => pool.techs.has(tech);
