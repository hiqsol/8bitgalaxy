// Domain model, names follow the rules docs (docs/), see ADR 0001.

/** [[Class]]: Military, Culture, Production, Science */
export type Klass = 'M' | 'C' | 'P' | 'S';
export const KLASSES: Klass[] = ['M', 'C', 'P', 'S'];

export type CardType = 'Ship' | 'Hero' | 'Base' | 'Colony';
export const CARD_TYPES: CardType[] = ['Ship', 'Hero', 'Base', 'Colony'];

export type PlusKind = 'power' | 'defense' | 'capacity' | 'range' | 'draw' | 'restore';

/** [[Ability]]: a printed power `X+Y`, a [[Plus]] `+N` or a [[Technology]] */
export type Ability =
  | { kind: 'power'; base: number; field: number }
  | { kind: 'plus'; what: PlusKind; n: number }
  | { kind: 'tech'; tech: string };

export type TechScope = 'core' | 'advanced' | 'TBD';

/** One [[End]] of a card as printed */
export interface EndDef {
  level: number;
  extraCost: number;
  klass: Klass;
  primary: Ability[];
  secondary: Ability[];
}

export interface Prerequisite {
  level: number;
  klass: Klass;
}

/** A card as printed, see docs/Cards/Deck.md */
export interface CardDef {
  id: string;
  type: CardType;
  strong: EndDef;
  weak: EndDef;
  prerequisites: Prerequisite[];
  culturePoints: number;
}

export type EndName = 'strong' | 'weak';
/** [[Side]] and back [[End]]: front is [[Enabled]], else [[Damaged]] or [[Hidden]] */
export type Face = 'front' | 'damaged' | 'hidden';

export type PlayerId = string;

/** A physical card in play */
export interface Card {
  uid: string;
  def: string;
  owner: PlayerId;
  /** front end that is up, or would be up when the card is revealed */
  end: EndName;
  face: Face;
  /** players who know a hidden card besides its owner */
  known?: PlayerId[];
}

export interface Pile {
  type: CardType;
  /** bottom first, top is the last */
  cards: string[];
}

/** Player's [[Home]] */
export interface Home {
  hand: string[];
  /** face down, top is the last */
  reserve: string[];
  discard: string[];
  factory: Pile[];
  laboratory: Pile[];
  energy: number;
}

export type StarAbility =
  | { kind: 'energy'; n: number }
  | { kind: 'power'; n: number }
  | { kind: 'defense'; n: number }
  | { kind: 'tech'; tech: string };

/** Front of a [[Star]] tile */
export interface StarDef {
  name: string;
  klass: Klass;
  units: number;
  structures: number;
  extraCost: number;
  ability: StarAbility;
}

export type Row = 'units' | 'structures';

export interface Star {
  id: string;
  row: number;
  col: number;
  home?: PlayerId;
  revealed: boolean;
  def: StarDef;
  /** [[IPS]] slots from the highest, null is free */
  units: (string | null)[];
  structures: (string | null)[];
}

export type SpaceType = 'normal' | 'void';

/** [[Space]] tile, shared by the Stars it borders */
export interface Space {
  id: string;
  /** the Stars it borders with the o'clock bearing at each */
  sides: { star: string; bearing: number }[];
  revealed: boolean;
  type: SpaceType;
  length: number;
  cost: number;
}

export interface PlayerState {
  id: PlayerId;
  name: string;
  faction: string;
  over: boolean;
}

/** Which [[Ability]] a supporter gives, see [[Support]] */
export type SupportUse = 'primary' | 'secondary' | 'range' | 'capacity';

export type ActionKind =
  | 'move'
  | 'attack'
  | 'explore'
  | 'research'
  | 'manage'
  | 'create'
  | 'upgrade'
  | 'recover';

export interface Participant {
  card: string;
  /** for a supporter: the one ability it gives */
  use?: SupportUse;
  /** for a supporter from Hand: the End it is used with */
  end?: EndName;
  /** for a Hand supporter giving Range: the Star of the group it joins */
  group?: string;
}

export type ManageOp =
  | { op: 'rotate'; card: string }
  | { op: 'shift'; card: string; slot: number }
  | { op: 'labShift'; from: number; to: number }
  | { op: 'factoryShift'; from: number; to: number };

export type ExploreTarget = { kind: 'tile'; id: string } | { kind: 'card'; card: string; reveal: boolean };

/** Declaration of an [[Action]], see [[PerformAction]] */
export interface ActionDecl {
  kind: ActionKind;
  starter: string;
  starterEnd: EndName;
  starterUse: SupportUse;
  source: string;
  destination: string;
  participants: Participant[];
  boost?: Partial<Record<Klass, number>>;
  /** move: cards carried as cargo */
  cargo?: string[];
  /** move, create: destination slot per card, else the first free */
  slots?: Record<string, number>;
  /** explore */
  target?: ExploreTarget;
  /** research: from a Laboratory pile to the Factory, or to another Laboratory pile */
  research?: { pile: number; toLab?: number };
  /** create: Factory piles to take the top card from, in order */
  create?: { piles: number[] };
  /** upgrade: old card, Factory pile of the new one, Factory pile for the old one */
  upgrade?: { old: string; pile: number; oldTo?: number };
  /** recover: the Damaged card */
  recover?: { card: string };
  manage?: ManageOp[];
}

export interface CombatEntry {
  card: string;
  side: PlayerId;
  /** direct participant or supporter */
  mode: 'direct' | 'support';
  use?: SupportUse;
  end?: EndName;
  /** committed face down from Hand, revealed at resolution */
  secret: boolean;
  boost: number;
}

/** [[Combat]] in progress, see RulesReview P28 */
export interface Combat {
  attacker: PlayerId;
  defender: PlayerId;
  source: string;
  target: string;
  starter: string;
  entries: CombatEntry[];
  toAct: PlayerId;
  passes: number;
  phase: 'commit' | 'save';
  /** set at resolution */
  result?: { winner: PlayerId; attack: number; defense: number; advantage: number };
}

export type Location =
  | { zone: 'hand' | 'reserve' | 'discard'; player: PlayerId }
  | { zone: 'factory' | 'laboratory'; player: PlayerId; pile: number }
  | { zone: 'slot'; star: string; row: Row; index: number };

/** Free table moves for what the engine doesn't handle yet, logged as manual */
export type ManualOp =
  | { op: 'moveCard'; card: string; to: Location }
  | { op: 'setFace'; card: string; face: Face }
  | { op: 'setEnd'; card: string; end: EndName }
  | { op: 'revealTile'; id: string }
  | { op: 'energy'; player: PlayerId; delta: number }
  /** the Turn player found no legal play, see Decisions S19 */
  | { op: 'pass' };

export type Move =
  | { type: 'takeoff'; card: string; star: string; slot?: number; end: EndName; hidden?: boolean }
  | { type: 'action'; action: ActionDecl }
  | { type: 'combatAdd'; card: string; end?: EndName; use?: SupportUse; boost?: number }
  | { type: 'combatPass' }
  | { type: 'combatRetreat' }
  | { type: 'combatSave'; cards: string[] }
  | { type: 'reveal'; card: string }
  | { type: 'endTurn'; restore?: string }
  | { type: 'undo' }
  | { type: 'manual'; op: ManualOp }
  | { type: 'concede' };

export interface LogEntry {
  turn: number;
  player: PlayerId;
  text: string;
}

export interface Winner {
  players: PlayerId[];
  path: 'military' | 'culture' | 'singularity';
}

export interface State {
  version: 1;
  /** seeded RNG state, see rng.ts */
  rng: number;
  players: PlayerState[];
  cards: Record<string, Card>;
  homes: Record<PlayerId, Home>;
  stars: Record<string, Star>;
  spaces: Record<string, Space>;
  turn: { player: PlayerId; number: number; played: number };
  combat: Combat | null;
  /** [[Twilight]]: players who still make their last Turn */
  twilight: { by: PlayerId; last: PlayerId[] } | null;
  winner: Winner | null;
  log: LogEntry[];
  /** states before the undoable moves of the current Turn */
  undo: Omit<State, 'undo'>[];
}
