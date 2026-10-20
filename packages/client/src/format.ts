// Short texts for cards and moves.
import { type Ability, type Card, cardDef, type EndDef, isPlayable, isUnknown, type Klass } from '@8bitgalaxy/engine';

export const KLASS_NAMES: Record<Klass, string> = { M: 'Military', C: 'Culture', P: 'Production', S: 'Science' };

const TECH_SHORT: Record<string, string> = {
  Academy: 'Acad',
  Shipyard: 'Yard',
  Upgrade: 'Upgr',
  Recover: 'Recv',
  Explore: 'Expl',
  Retreat: 'Retr',
  Stealth: 'Stlh',
  Navigation: 'Navi',
  Militarization: 'Milz',
  Trade: 'Trad',
  Export: 'Expt',
  Extract: 'Extr',
  Recycle: 'Recy',
  Exhaust: 'Exht',
  Smuggle: 'Smgl',
  allacad: 'alac',
};

export function abilityText(a: Ability, short = false): string {
  if (a.kind === 'power') return a.field ? `${a.base}+${a.field}` : `${a.base}`;
  if (a.kind === 'plus') return a.what === 'power' ? `+${a.n}` : `+${a.n} ${short ? a.what.slice(0, 3) : a.what}`;
  const name = short ? (TECH_SHORT[a.tech] ?? a.tech.slice(0, 4)) : a.tech;
  return isPlayable(a) ? name : `(${name})`;
}

export const abilitiesText = (list: Ability[], short = false) => list.map((a) => abilityText(a, short)).join(', ') || '-';

/** `2+1` as printed: Level and ExtraCost */
export function levelText(e: EndDef): string {
  if (!e.extraCost) return `${e.level}`;
  return e.extraCost > 0 ? `${e.level}+${e.extraCost}` : `${e.level}${e.extraCost}`;
}

export function cardName(card: Card | undefined): string {
  if (!card) return '?';
  if (isUnknown(card.def)) return card.def === '?Unit' ? 'hidden Unit' : 'hidden Structure';
  return card.def;
}

export const defOf = (card: Card) => cardDef(card.def);

/** Card face words of the legacy version: lowercase, at most 7 letters */
const TECH_WORDS: Record<string, string> = {
  Shipyard: 'shpyrd',
  Militarization: 'mobilz',
  Navigation: 'navi',
  ForceDiscard: 'fdiscrd',
  DoNotDeplete: 'nodeplt',
  PlusFactory: '+fctry',
  PlusLaboratory: '+lab',
  EfficientUpgrade: 'effupgr',
  MinusRequirement: '-req',
  PlusHero: '+hero',
};

/** One Ability as printed on the card: `2+1`, `+1`, `+1rng`, `academy` */
export function cardWord(a: Ability): string {
  if (a.kind === 'power') return a.field ? `${a.base}+${a.field}` : `${a.base}`;
  if (a.kind === 'plus') return a.what === 'power' ? `+${a.n}` : `+${a.n}${a.what === 'range' ? 'rng' : a.what.slice(0, 3)}`;
  return TECH_WORDS[a.tech] ?? a.tech.toLowerCase().slice(0, 7);
}
