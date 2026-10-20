// Card definitions and derived [[Property]]s.
import deck from './data/deck.json';
import { STARTING_CARDS } from './scenario';
import type { Ability, Card, CardDef, CardType, EndDef, EndName, Klass, TechScope } from './types';

/** Placeholders for cards a viewer doesn't know: only the Role is seen, see view.ts */
export const UNKNOWN_UNIT = '?Unit';
export const UNKNOWN_STRUCTURE = '?Structure';
const unknown = (id: string, type: CardType): CardDef => {
  const end: EndDef = { level: 1, extraCost: 0, klass: 'M', primary: [], secondary: [] };
  return { id, type, strong: end, weak: end, prerequisites: [], culturePoints: 0 };
};

const DEFS: Record<string, CardDef> = {};
for (const def of [...(deck.cards as CardDef[]), ...STARTING_CARDS, unknown(UNKNOWN_UNIT, 'Ship'), unknown(UNKNOWN_STRUCTURE, 'Base')]) {
  DEFS[def.id] = def;
}
export const isUnknown = (id: string) => id.startsWith('?');

export const TECH_SCOPES = deck.techScopes as Record<string, TechScope>;

export function cardDef(id: string): CardDef {
  const def = DEFS[id];
  if (!def) throw new Error(`unknown card ${id}`);
  return def;
}

export const allCardDefs = (): CardDef[] => Object.values(DEFS).filter((d) => !isUnknown(d.id));

export const isActorType = (type: CardType) => type === 'Ship' || type === 'Hero';
export const isStructureType = (type: CardType) => type === 'Base' || type === 'Colony';
export const isSocialType = (type: CardType) => type === 'Hero' || type === 'Colony';

/** [[Origin]] hub technology: [[Academy]] for Social, [[Shipyard]] for Industrial */
export const hubTech = (type: CardType) => (isSocialType(type) ? 'Academy' : 'Shipyard');
/** [[Hub]] Class pays for [[Create]], [[Upgrade]], [[Recover]] */
export const hubKlass = (tech: string): Klass => (tech === 'Academy' ? 'C' : 'P');

export const defOf = (card: Card) => cardDef(card.def);
export const typeOf = (card: Card) => defOf(card).type;
export const isActor = (card: Card) => isActorType(typeOf(card));
export const isStructure = (card: Card) => isStructureType(typeOf(card));
export const isHero = (card: Card) => typeOf(card) === 'Hero';

export function endOf(card: Card, end: EndName = card.end): EndDef {
  return defOf(card)[end];
}

/** [[Cost]] = strong End Level + its ExtraCost, at least 1 */
export const costOf = (def: CardDef) => Math.max(1, def.strong.level + def.strong.extraCost);

/** [[Size]] = current Level + ExtraCost, Level for a Hero, at least 1 */
export function sizeOf(card: Card, end: EndName = card.end): number {
  if (card.face === 'hidden') return 1;
  const e = endOf(card, end);
  return Math.max(1, isHero(card) ? e.level : e.level + e.extraCost);
}

/** [[Range]]: current Level for moving cards, 0 for Structures, 1 for Hidden */
export function rangeOf(card: Card, end: EndName = card.end): number {
  if (card.face === 'hidden') return 1;
  return isActor(card) ? endOf(card, end).level : 0;
}

/** [[Capacity]]: current Level, 1 for Hidden */
export function capacityOf(card: Card, end: EndName = card.end): number {
  if (card.face === 'hidden') return 1;
  return endOf(card, end).level;
}

/**
 * A printed technology that is not `core` is blank in the first duel,
 * see Guidance G2.
 */
export function isPlayable(ability: Ability): boolean {
  return ability.kind !== 'tech' || TECH_SCOPES[ability.tech] === 'core';
}

export function techsOf(abilities: Ability[]): string[] {
  return abilities.filter((a) => a.kind === 'tech' && isPlayable(a)).map((a) => (a as { tech: string }).tech);
}

/** Does any End of the card print the technology */
export function printsTech(def: CardDef, tech: string): boolean {
  return [def.strong, def.weak].some((e) => techsOf([...e.primary, ...e.secondary]).includes(tech));
}

/** Short label of an ability for logs and UI */
export function abilityLabel(a: Ability, klass?: Klass): string {
  if (a.kind === 'power') return a.field ? `${a.base}+${a.field}${klass ?? ''}` : `${a.base}${klass ?? ''}`;
  if (a.kind === 'plus') return a.what === 'power' ? `+${a.n}${klass ?? ''}` : `+${a.n} ${a.what}`;
  return isPlayable(a) ? a.tech : `(${a.tech})`;
}
