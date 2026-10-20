// First duel setup, see [[Scenario]] and [[StartDraw]].
import { log } from './board';
import { cardDef } from './cards';
import { buildSpaces } from './field';
import { randomInt, shuffle } from './rng';
import { FIELD_ROWS, HOME_STAR, HOME_STARS, SPACE, STAR_DECK, START, VOIDS } from './scenario';
import { drawCards } from './turn';
import { CARD_TYPES, type Card, type Home, type PlayerId, type State } from './types';

export interface GameOptions {
  seed?: number;
  players: { name: string }[];
}

export function createGame(options: GameOptions): State {
  if (options.players.length !== 2) throw new Error('the first duel is for 2 players');
  const state: State = {
    version: 1,
    rng: (options.seed ?? Date.now()) | 0,
    players: options.players.map((p, i) => ({ id: `p${i + 1}`, name: p.name, faction: 'Human', over: false })),
    cards: {},
    homes: {},
    stars: {},
    spaces: {},
    turn: { player: 'p1', number: 1, played: 0 },
    combat: null,
    twilight: null,
    winner: null,
    log: [],
    undo: [],
  };
  setupField(state);
  for (const [i, p] of state.players.entries()) setupHome(state, p.id, HOME_STARS[i]);

  // P27 f: the first player is random and draws a smaller Hand
  const first = state.players[randomInt(state, state.players.length)].id;
  state.turn.player = first;
  for (const p of state.players) drawCards(state, p.id, p.id === first ? START.firstHand : START.handSize);
  log(state, `${state.players.find((p) => p.id === first)!.name} starts`, first);
  return state;
}

function setupField(state: State): void {
  const deck = shuffle(state, [...STAR_DECK]);
  FIELD_ROWS.forEach((ids, row) =>
    ids.forEach((id, col) => {
      const home = HOME_STARS.indexOf(id);
      const def = home >= 0 ? HOME_STAR : deck.pop()!;
      state.stars[id] = {
        id,
        row,
        col,
        home: home >= 0 ? `p${home + 1}` : undefined,
        revealed: home >= 0,
        def,
        units: Array(def.units).fill(null),
        structures: Array(def.structures).fill(null),
      };
    }),
  );
  for (const seed of buildSpaces(FIELD_ROWS)) {
    const isVoid = seed.sides.some((s) => VOIDS[s.star]?.includes(s.bearing));
    state.spaces[seed.id] = {
      ...seed,
      revealed: isVoid,
      type: isVoid ? 'void' : 'normal',
      length: SPACE.length,
      cost: SPACE.cost,
    };
  }
}

function setupHome(state: State, player: PlayerId, homeStar: string): void {
  // opaque card ids, so ids of hidden cards don't tell what they are
  const defs = [
    ...START.reserve,
    ...START.homeStar,
    ...CARD_TYPES.flatMap((t) => START.factory[t]),
    ...CARD_TYPES.flatMap((t) => START.laboratory[t]),
  ];
  const numbers = shuffle(
    state,
    defs.map((_, i) => i + 1),
  );
  const uids = new Map<string, string>();
  defs.forEach((def, i) => {
    cardDef(def);
    const uid = `${player}-${String(numbers[i]).padStart(2, '0')}`;
    state.cards[uid] = { uid, def, owner: player, end: 'strong', face: 'front' } satisfies Card;
    uids.set(def, uid);
  });
  const id = (def: string) => uids.get(def)!;
  const home: Home = {
    hand: [],
    reserve: shuffle(state, START.reserve.map(id)),
    discard: [],
    factory: CARD_TYPES.map((type) => ({ type, cards: START.factory[type].map(id) })),
    laboratory: CARD_TYPES.map((type) => ({ type, cards: START.laboratory[type].map(id) })),
    energy: 0,
  };
  state.homes[player] = home;
  // spread over the Slots, so neither is overlapped, see [[Slot]] 5
  const slots = state.stars[homeStar].structures;
  START.homeStar.forEach((def, i) => (slots[Math.round((i * (slots.length - 1)) / Math.max(1, START.homeStar.length - 1))] = id(def)));
}
