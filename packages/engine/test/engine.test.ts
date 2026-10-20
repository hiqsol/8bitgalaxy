import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  apply,
  cardController,
  controller,
  distance,
  locate,
  restorable,
  viewFor,
  type State,
} from '../src';
import deck from '../src/data/deck.json';
import { parseDeck, parseTechScopes } from '../src/deck/parse';
import { spaceAt } from '../src/field';
import { STAR_DECK } from '../src/scenario';
import { action, clearHands, err, game, ok, put, revealBetween, toHand, toSlot, uid } from './helpers';

const docs = (path: string) => readFileSync(new URL(`../../../docs/${path}`, import.meta.url), 'utf8');

describe('cards', () => {
  it('deck.json is in sync with docs, run `npm run cards` after editing them', () => {
    expect(deck.cards).toEqual(parseDeck(docs('Cards/Deck.md')));
    expect(deck.techScopes).toEqual(parseTechScopes(docs('Concepts/Technology.md')));
  });

  it('parses both ends of a card', () => {
    const hero = parseDeck(docs('Cards/Deck.md')).find((c) => c.id === 'Hero 4M')!;
    expect(hero.strong).toMatchObject({ level: 4, extraCost: 1, klass: 'M', secondary: [{ kind: 'tech', tech: 'Stealth' }] });
    expect(hero.weak.secondary).toEqual([
      { kind: 'tech', tech: 'Recover' },
      { kind: 'tech', tech: 'Upgrade' },
    ]);
    expect(hero.prerequisites).toEqual([
      { level: 2, klass: 'M' },
      { level: 2, klass: 'P' },
    ]);
  });
});

describe('setup', () => {
  it('deals the first duel', () => {
    const s = game(7);
    for (const p of ['p1', 'p2']) {
      const home = s.homes[p];
      expect(home.hand.length + home.reserve.length).toBe(10);
      expect(home.factory.map((f) => f.cards.length)).toEqual([0, 2, 3, 3]);
      expect(home.laboratory.map((f) => f.cards.length)).toEqual([4, 4, 4, 4]);
    }
    expect(s.stars['21'].structures.map((u) => u && s.cards[u].def)).toEqual(['Colony 2C', null, 'Base 2P']);
    expect(controller(s, '21')).toBe('p1');
    expect(controller(s, '00')).toBe('p2');
    expect(Object.values(s.stars).filter((x) => !x.revealed)).toHaveLength(STAR_DECK.length);
  });

  it('the first player draws 3 cards, the other a full Hand', () => {
    const s = game(3);
    const first = s.log[0].player;
    expect(s.homes[first].hand).toHaveLength(3);
    expect(s.homes[first === 'p1' ? 'p2' : 'p1'].hand).toHaveLength(5);
  });

  it('is deterministic by seed', () => {
    expect(game(5)).toEqual(game(5));
    expect(game(5)).not.toEqual(game(6));
  });
});

describe('field', () => {
  it('a side shared by two Stars holds two tiles of both', () => {
    const s = game();
    expect(spaceAt(s, '00', 3)).toBe(spaceAt(s, '01', 10));
    expect(spaceAt(s, '11', 12)).toBe(spaceAt(s, '00', 5));
    expect(spaceAt(s, '21', 1)).toBe(spaceAt(s, '12', 8));
  });

  it('Distance counts tiles but the first, hidden tiles and Voids stop routes', () => {
    const s = game();
    expect(distance(s, '21', '12')).toBe(Infinity);
    revealBetween(s, '21', [1]);
    expect(distance(s, '21', '12')).toBe(Infinity); // 12 is hidden
    s.stars['12'].revealed = true;
    expect(distance(s, '21', '12')).toBe(2);
    expect(distance(s, '21', '21')).toBe(0);
    // home Stars are kept apart by Voids around 11
    for (const sp of Object.values(s.spaces)) sp.revealed = true;
    for (const st of Object.values(s.stars)) st.revealed = true;
    expect(distance(s, '21', '00')).toBe(6);
    expect(distance(s, '21', '00', { navigation: true })).toBe(4);
  });
});

describe('turn', () => {
  it('Takeoff puts a Unit from Hand to a controlled Star', () => {
    let s = game();
    clearHands(s);
    const ship = toHand(s, 'p1', 'Ship 2M');
    expect(err(s, 'p1', { type: 'takeoff', card: ship, star: '00', end: 'strong' })).toMatch(/Star you control/);
    expect(err(s, 'p1', { type: 'takeoff', card: ship, star: '21', end: 'strong', hidden: true })).toMatch(/Stealth/);
    s = ok(s, 'p1', { type: 'takeoff', card: ship, star: '21', end: 'weak' });
    expect(locate(s, ship)).toEqual({ zone: 'slot', star: '21', row: 'units', index: 0 });
    expect(s.cards[ship].end).toBe('weak');
  });

  it("a player can't pass, the end of Turn restores, earns, discards and draws", () => {
    let s = game();
    expect(err(s, 'p1', { type: 'endTurn' })).toMatch(/play at least one card/);
    const base = uid(s, 'p1', 'Base 2P');
    s.cards[base].end = 'weak';
    expect(restorable(s, 'p1')).toEqual([base]);
    const hand = s.homes.p1.hand[0];
    s = ok(s, 'p1', { type: 'takeoff', card: hand, star: '21', end: 'strong' });
    s = ok(s, 'p1', { type: 'endTurn' });
    expect(s.cards[base].end).toBe('strong');
    expect(s.homes.p1.energy).toBe(1);
    expect(s.homes.p1.hand).toHaveLength(5);
    expect(s.turn).toMatchObject({ player: 'p2', number: 2, played: 0 });
  });

  it('a Shuffle gives cards new ids, so a rival cannot follow them', () => {
    let s = game();
    const home = s.homes.p1;
    home.discard.push(...home.reserve.splice(0), ...home.hand.splice(1));
    const before = new Set(home.discard);
    s = ok(s, 'p1', { type: 'takeoff', card: home.hand[0], star: '21', end: 'strong' });
    s = ok(s, 'p1', { type: 'endTurn' });
    expect(s.homes.p1.hand).toHaveLength(5);
    expect(s.homes.p1.hand.some((u) => before.has(u))).toBe(false);
  });

  it('undo takes back a move of the Turn', () => {
    const s0 = game();
    const s1 = ok(s0, 'p1', { type: 'takeoff', card: s0.homes.p1.hand[0], star: '21', end: 'strong' });
    expect(s1.undo).toHaveLength(1);
    const s2 = ok(s1, 'p1', { type: 'undo' });
    expect(s2).toEqual(s0);
    expect(err(s2, 'p1', { type: 'undo' })).toMatch(/nothing to undo/);
  });
});

/** Ann (p1, home 21) with an empty Hand, cards to be put by the test */
function duel(): State {
  const s = game();
  clearHands(s);
  return s;
}

describe('Explore', () => {
  it('reveals a Space bordering the source for its Cost', () => {
    let s = duel();
    const hero = toHand(s, 'p1', 'Hero 1M');
    const ship = toHand(s, 'p1', 'Ship 2M');
    const space = spaceAt(s, '21', 1)!;
    const explore = action({
      kind: 'explore',
      starter: hero,
      starterUse: 'secondary',
      source: '21',
      destination: space,
      target: { kind: 'tile', id: space },
    });
    expect(err(s, 'p1', explore)).toMatch(/costs 1 M power/);
    explore.type === 'action' && explore.action.participants.push({ card: ship, use: 'primary', end: 'strong' });
    s = ok(s, 'p1', explore);
    expect(s.spaces[space].revealed).toBe(true);
    expect(s.homes.p1.discard).toEqual(expect.arrayContaining([hero, ship]));
    expect(s.turn.played).toBe(1);
  });

  it('reaches a hidden Star across a revealed Space with Range, pays its Cost', () => {
    let s = duel();
    s.stars['12'].def = STAR_DECK[0]; // Energy: Size 4, Cost 5
    revealBetween(s, '21', [1]);
    const scout = toSlot(s, 'p1', 'Ship 2S', '21');
    const starter = toHand(s, 'p1', 'Ship 1S');
    const helper = toHand(s, 'p1', 'Hero 1P');
    s.homes.p1.energy = 3;
    const explore = action({
      kind: 'explore',
      starter,
      source: '21',
      destination: '12',
      target: { kind: 'tile', id: '12' },
      participants: [{ card: scout }],
      boost: { S: 2 },
    });
    expect(err(s, 'p1', explore)).toMatch(/costs 5 S power, the participants give 4/);
    if (explore.type === 'action') {
      explore.action.boost = { S: 3 };
      expect(err(s, 'p1', explore)).toMatch(/Capacity/);
      explore.action.participants.push({ card: helper, use: 'capacity', end: 'strong' });
    }
    s = ok(s, 'p1', explore);
    expect(s.stars['12'].revealed).toBe(true);
    expect(s.homes.p1.energy).toBe(0);
    expect(locate(s, scout)).toEqual({ zone: 'discard', player: 'p1' });
  });
});

describe('Move', () => {
  function open(s: State) {
    revealBetween(s, '21', [1]);
    s.stars['12'].revealed = true;
  }

  it('moves a group within Range with cargo carried by the right Ship', () => {
    let s = duel();
    open(s);
    const ship = toSlot(s, 'p1', 'Ship 2M', '21');
    const starter = toHand(s, 'p1', 'Ship 1C');
    const base = uid(s, 'p1', 'Base 2P');
    const move = action({ kind: 'move', starter, source: '21', destination: '12', participants: [{ card: ship }], cargo: [base] });
    expect(err(s, 'p1', move)).toMatch(/no Ship in the group carries Base 2P/);

    s.cards[ship].end = 'strong';
    const freighter = toSlot(s, 'p1', 'Ship 2P', '21');
    const move2 = action({ kind: 'move', starter, source: '21', destination: '12', participants: [{ card: freighter }], cargo: [base] });
    expect(err(s, 'p1', move2)).toMatch(/cargo Size 3 is over the group Capacity 2/);
    const hero = toSlot(s, 'p1', 'Hero 1M', '21');
    if (move2.type === 'action') move2.action.participants.push({ card: hero });
    s = ok(s, 'p1', move2);
    expect(s.stars['12'].units.filter(Boolean)).toEqual([freighter, hero]);
    expect(s.stars['12'].structures[0]).toBe(base);
    expect(controller(s, '12')).toBe('p1');
    // movers and cargo don't deplete, the starter does
    expect(s.cards[freighter].face).toBe('front');
    expect(locate(s, starter)).toEqual({ zone: 'discard', player: 'p1' });
  });

  it('a rival Military Actor pins: the route can end there, not pass', () => {
    let s = duel();
    for (const sp of Object.values(s.spaces)) sp.revealed = true;
    for (const st of Object.values(s.stars)) st.revealed = true;
    toSlot(s, 'p2', 'Ship 2M', '12');
    const ship = toSlot(s, 'p1', 'Hero 2M', '21');
    s.homes.p1.factory[1].cards = s.homes.p1.factory[1].cards.filter((u) => u !== ship);
    const starter = toHand(s, 'p1', 'Ship 1C');
    s.cards[ship].end = 'strong';
    // 21 -> 12 -> 01: 4 by 12, Range 2 + Ship 1C... the only route passes 12
    const far = action({ kind: 'move', starter, starterUse: 'range', source: '21', destination: '01', participants: [{ card: ship }] });
    expect(err(s, 'p1', far)).toMatch(/can't reach 01/);
    s = ok(s, 'p1', action({ kind: 'move', starter, source: '21', destination: '12', participants: [{ card: ship }] }));
    expect(locate(s, ship)).toMatchObject({ star: '12' });
  });
});

describe('Research, Create, Upgrade', () => {
  it('researches a Laboratory card with its Prerequisites to the Factory', () => {
    let s = duel();
    const starter = toHand(s, 'p1', 'Ship 1S');
    const sci = toHand(s, 'p1', 'Ship 2S');
    const mil = toHand(s, 'p1', 'Ship 2M');
    const cul = toHand(s, 'p1', 'Ship 2C');
    const base = uid(s, 'p1', 'Base 2P');
    const colony = uid(s, 'p1', 'Colony 2C');
    s.homes.p1.energy = 3;
    const decl = action({
      kind: 'research',
      starter,
      source: '21',
      destination: '21',
      research: { pile: 0 },
      boost: { S: 3 },
      participants: [
        { card: sci, use: 'primary', end: 'strong' },
        { card: cul, use: 'primary', end: 'strong' },
        { card: base },
        { card: colony },
      ],
    });
    expect(err(s, 'p1', decl)).toMatch(/Ship 4M needs 1C, 2M/);
    if (decl.type === 'action') decl.action.participants.push({ card: mil, use: 'primary', end: 'strong' });
    s = ok(s, 'p1', decl);
    const ship4m = uid(s, 'p1', 'Ship 4M');
    expect(locate(s, ship4m)).toEqual({ zone: 'factory', player: 'p1', pile: 0 });
    // direct Structures deplete to the weak End
    expect(s.cards[base].end).toBe('weak');
    expect(s.cards[colony].end).toBe('weak');
  });

  it('creates a Colony at the Academy, a Social card only from Level 1', () => {
    let s = duel();
    const starter = toHand(s, 'p1', 'Ship 1C');
    const academy = uid(s, 'p1', 'Colony 2C');
    const create = (pile: number) =>
      action({ kind: 'create', starter, source: '21', destination: '21', participants: [{ card: academy }], create: { piles: [pile] } });
    expect(err(s, 'p1', create(1))).toMatch(/Hero 2M comes only by Upgrade/);
    s = ok(s, 'p1', create(3));
    const colony = uid(s, 'p1', 'Colony 2M');
    expect(locate(s, colony)).toEqual({ zone: 'slot', star: '21', row: 'structures', index: 1 });
    expect(s.cards[colony]).toMatchObject({ face: 'front', end: 'strong' });
  });

  it('upgrades a Hero in Discard with Upgrade and the Academy', () => {
    let s = duel();
    const old = put(s, 'p1', 'Hero 1P', { zone: 'discard', player: 'p1' });
    const starter = toHand(s, 'p1', 'Hero 1M');
    const academy = uid(s, 'p1', 'Colony 2C');
    s = ok(
      s,
      'p1',
      action({
        kind: 'upgrade',
        starter,
        starterEnd: 'weak',
        starterUse: 'secondary',
        source: '21',
        destination: '21',
        participants: [{ card: academy }],
        upgrade: { old, pile: 1 },
      }),
    );
    const hero2m = uid(s, 'p1', 'Hero 2M');
    expect(s.homes.p1.discard).toEqual(expect.arrayContaining([hero2m, starter]));
    expect(locate(s, old)).toEqual({ zone: 'factory', player: 'p1', pile: 1 });
  });
});

describe('Combat', () => {
  function front(): { s: State; ship: string; defender: string; starter: string; hero: string } {
    const s = duel();
    revealBetween(s, '21', [1]);
    s.stars['12'].revealed = true;
    const ship = toSlot(s, 'p1', 'Ship 2M', '21');
    const defender = toSlot(s, 'p2', 'Ship 2S', '12');
    const starter = toHand(s, 'p1', 'Ship 1M');
    const hero = toHand(s, 'p1', 'Hero 1M');
    return { s, ship, defender, starter, hero };
  }

  it('alternates add or pass, reveals at resolution, the winner saves and moves in', () => {
    const f = front();
    let s = ok(
      f.s,
      'p1',
      action({
        kind: 'attack',
        starter: f.starter,
        source: '21',
        destination: '12',
        participants: [{ card: f.ship }, { card: f.hero, use: 'primary', end: 'strong' }],
      }),
    );
    expect(s.combat).toMatchObject({ toAct: 'p2', phase: 'commit' });
    // the rival sees only that a card was committed
    const bobSees = viewFor(s, 'p2');
    expect(bobSees.combat!.entries.find((e) => e.secret)!.card).toMatch(/^\?/);
    expect(err(s, 'p1', { type: 'combatPass' })).toMatch(/not your move/);
    s = ok(s, 'p2', { type: 'combatPass' });
    s = ok(s, 'p1', { type: 'combatPass' });
    expect(s.combat!.result).toEqual({ winner: 'p1', attack: 3, defense: 1, advantage: 2 });
    expect(s.combat!.phase).toBe('save');
    s = ok(s, 'p1', { type: 'combatSave', cards: [f.ship] });
    expect(s.combat).toBeNull();
    // the loser's only card there is Damaged and alone: Destroyed to its Factory
    expect(locate(s, f.defender)).toMatchObject({ zone: 'factory', player: 'p2' });
    expect(locate(s, f.ship)).toMatchObject({ zone: 'slot', star: '12' });
    expect(controller(s, '12')).toBe('p1');
    expect(locate(s, f.hero)).toEqual({ zone: 'discard', player: 'p1' });
  });

  it('a tie goes to the defender, unsaved participants are Damaged', () => {
    const f = front();
    let s = ok(f.s, 'p1', action({ kind: 'attack', starter: f.starter, starterUse: 'range', source: '21', destination: '12', participants: [{ card: f.ship }] }));
    s = ok(s, 'p2', { type: 'combatPass' });
    s = ok(s, 'p1', { type: 'combatPass' });
    expect(s.combat).toBeNull();
    expect(s.log.at(-1)?.text ?? '').toMatch(/destroyed/);
    expect(s.log.some((l) => /attack 1, defense 1, Bob wins/.test(l.text))).toBe(true);
    expect(s.cards[f.ship].face).toBe('damaged');
    expect(cardController(s, f.ship)).toBeNull();
  });
});

describe('view', () => {
  it('hides the rival Hand, every Reserve and hidden tiles', () => {
    const s = game();
    const v = viewFor(s, 'p1');
    expect(v.homes.p1.hand).toEqual(s.homes.p1.hand);
    expect(v.homes.p2.hand.every((u) => v.cards[u].def === '?Unit')).toBe(true);
    expect(v.homes.p1.reserve.every((u) => u.startsWith('?'))).toBe(true);
    expect(s.homes.p2.hand.some((u) => v.cards[u])).toBe(false);
    const hidden = Object.values(v.stars).find((x) => !x.revealed)!;
    expect(hidden.def.name).toBe('?');
    expect(v.rng).toBe(0);
  });

  it('a Hidden card on the Field shows only its owner and Role', () => {
    const s = duel();
    const hero = toSlot(s, 'p2', 'Hero 3M', '00');
    s.cards[hero].face = 'hidden';
    expect(viewFor(s, 'p1').cards[hero]).toMatchObject({ def: '?Unit', owner: 'p2' });
    expect(viewFor(s, 'p2').cards[hero].def).toBe('Hero 3M');
  });
});

describe('goals', () => {
  it('a player who has no leader at the end of own Turn is over', () => {
    let s = duel();
    for (const c of Object.values(s.cards)) if (c.owner === 'p1' && c.def.startsWith('Hero')) s.homes.p1.factory[1].cards.includes(c.uid) || put(s, 'p1', c.def, { zone: 'factory', player: 'p1', pile: 1 });
    const card = toHand(s, 'p1', 'Ship 1M');
    s = ok(s, 'p1', { type: 'takeoff', card, star: '21', end: 'strong' });
    s = ok(s, 'p1', { type: 'endTurn' });
    expect(s.winner).toEqual({ players: ['p2'], path: 'military' });
  });

  it('every move is checked against the current state, nothing changes on a failure', () => {
    const s = game();
    const copy = structuredClone(s);
    expect(apply(s, 'p2', { type: 'endTurn' }).ok).toBe(false);
    expect(s).toEqual(copy);
  });
});
