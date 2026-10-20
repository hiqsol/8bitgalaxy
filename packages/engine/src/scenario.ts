// First duel [[Scenario]]: field, Star deck and [[StartDraw]].
// Values the docs don't set yet are marked ASSUMPTION, change them here.
import type { CardDef, CardType, StarDef } from './types';

/** Field rows of Star ids, see [[Scenario]] 3.2 */
export const FIELD_ROWS = [
  ['00', '01'],
  ['10', '11', '12'],
  ['20', '21'],
];

/** Home Stars in seat order, see [[Scenario]] 3.3 */
export const HOME_STARS = ['21', '00'];

/** [[Void]]s keep the home Stars apart: Star and bearings, as in game.png */
export const VOIDS: Record<string, number[]> = {
  '11': [1, 4, 5, 6, 7, 10, 11, 12],
};

/** First duel Spaces have length 1, see [[Scenario]] 3.4. ASSUMPTION: Explore Cost = length */
export const SPACE = { length: 1, cost: 1 };

/** Home Star: [[Ability]] gives 1 [[Energy]]. ASSUMPTION: Size 6, 3+3 */
export const HOME_STAR: StarDef = {
  name: 'Home',
  klass: 'C',
  units: 3,
  structures: 3,
  extraCost: 0,
  ability: { kind: 'energy', n: 1 },
};

/**
 * Star deck, see RulesReview P36 i, Guidance G3.
 * ASSUMPTION: every Star has Size 4, 2+2; Class of Energy, Defense and Shipyard Stars.
 */
export const STAR_DECK: StarDef[] = [
  { name: 'Energy', klass: 'P', units: 2, structures: 2, extraCost: 1, ability: { kind: 'energy', n: 1 } },
  { name: 'Military', klass: 'M', units: 2, structures: 2, extraCost: 2, ability: { kind: 'power', n: 1 } },
  { name: 'Science', klass: 'S', units: 2, structures: 2, extraCost: 2, ability: { kind: 'power', n: 1 } },
  { name: 'Defense', klass: 'C', units: 2, structures: 2, extraCost: 2, ability: { kind: 'defense', n: 1 } },
  { name: 'Shipyard', klass: 'P', units: 2, structures: 2, extraCost: 3, ability: { kind: 'tech', tech: 'Shipyard' } },
];

/**
 * Starting cards: technology-free, level 1/1, Primary 1, one per Class,
 * see RulesReview P27 a, Guidance G1. ASSUMPTION: Ships with ExtraCost 0.
 */
export const STARTING_CARDS: CardDef[] = (['M', 'C', 'P', 'S'] as const).map((klass) => {
  const end = { level: 1, extraCost: 0, klass, primary: [{ kind: 'power' as const, base: 1, field: 0 }], secondary: [] };
  return { id: `Ship 1${klass}`, type: 'Ship', strong: end, weak: end, prerequisites: [], culturePoints: 0 };
});

/** [[StartDraw]] by RulesReview P27, Guidance G1 */
export const START = {
  reserve: ['Ship 2M', 'Ship 2C', 'Ship 2P', 'Ship 2S', 'Hero 1M', 'Hero 1P', ...STARTING_CARDS.map((c) => c.id)],
  homeStar: ['Colony 2C', 'Base 2P'],
  /** one pile per Type, top card last */
  factory: {
    Ship: [],
    Hero: ['Hero 2C', 'Hero 2M'],
    Base: ['Base 2S', 'Base 2C', 'Base 2M'],
    Colony: ['Colony 2S', 'Colony 2P', 'Colony 2M'],
  } as Record<CardType, string[]>,
  /** all level 3-4 cards, lowest Level on top */
  laboratory: {
    Ship: ['Ship 4S', 'Ship 4P', 'Ship 4C', 'Ship 4M'],
    Hero: ['Hero 4C', 'Hero 4M', 'Hero 3C', 'Hero 3M'],
    Base: ['Base 4S', 'Base 4P', 'Base 4C', 'Base 4M'],
    Colony: ['Colony 4S', 'Colony 4P', 'Colony 4C', 'Colony 4M'],
  } as Record<CardType, string[]>,
  handSize: 5,
  firstHand: 3,
};
