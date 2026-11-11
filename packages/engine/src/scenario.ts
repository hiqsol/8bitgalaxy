// First duel [[Scenario]]: field, Star deck and [[StartDraw]].
// Values the docs don't set yet are marked ASSUMPTION, change them here.
import type { CardType, StarDef } from './types';

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

/** **Starting cards** of [[Deck]]: Ships 1/0, one per Class */
export const STARTING_CARDS = ['Ship 1M', 'Ship 1C', 'Ship 1P', 'Ship 1S'];

/**
 * [[StartDraw]] by RulesReview P27, Guidance G1, Heroes renamed by [[Deck]] Notes 8.
 * ASSUMPTION: no Tools, Hyperstructures and Level 6-8 cards yet.
 */
export const START = {
  reserve: ['Ship 2M', 'Ship 2C', 'Ship 2P', 'Ship 2S', 'Hero 2M', 'Hero 2P', ...STARTING_CARDS],
  homeStar: ['Colony 2C', 'Base 2P'],
  /** one pile per Type, top card last */
  factory: {
    Ship: [],
    Hero: ['Hero 2C', 'Hero 2S'],
    Base: ['Base 2S', 'Base 2C', 'Base 2M'],
    Colony: ['Colony 2S', 'Colony 2P', 'Colony 2M'],
  } as Partial<Record<CardType, string[]>>,
  /** all Level 4 cards */
  laboratory: {
    Ship: ['Ship 4S', 'Ship 4P', 'Ship 4C', 'Ship 4M'],
    Hero: ['Hero 4C', 'Hero 4M', 'Hero 4S', 'Hero 4P'],
    Base: ['Base 4S', 'Base 4P', 'Base 4C', 'Base 4M'],
    Colony: ['Colony 4S', 'Colony 4P', 'Colony 4C', 'Colony 4M'],
  } as Partial<Record<CardType, string[]>>,
  handSize: 5,
  firstHand: 3,
};

/** Every card a faction is dealt by [[StartDraw]] */
export const dealtCards = (): string[] => [
  ...START.reserve,
  ...START.homeStar,
  ...Object.values(START.factory).flat(),
  ...Object.values(START.laboratory).flat(),
];
