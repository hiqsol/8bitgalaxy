import { describe, expect, it } from 'vitest';
import { ACTIONS, apply, createGame, locate, type ActionKind, type Move, type State, type SupportUse } from '../src';

/** Tiny deterministic RNG for the fuzzer itself */
function rng(seed: number) {
  return () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

const USES: SupportUse[] = ['primary', 'secondary', 'range', 'capacity'];

/** A random move: mostly legal-looking, often illegal, never an engine crash */
function randomMove(s: State, r: () => number): { player: string; move: Move } {
  const pick = <T>(xs: T[]): T => xs[Math.floor(r() * xs.length)];
  if (s.combat) {
    const player = s.combat.toAct;
    if (s.combat.phase === 'save') return { player, move: { type: 'combatSave', cards: [] } };
    const hand = s.homes[player].hand;
    if (hand.length && r() < 0.3) {
      return { player, move: { type: 'combatAdd', card: pick(hand), end: pick(['strong', 'weak']), use: pick(USES) } };
    }
    return { player, move: { type: r() < 0.05 ? 'combatRetreat' : 'combatPass' } };
  }
  const player = s.turn.player;
  const home = s.homes[player];
  const stars = Object.keys(s.stars);
  const tiles = [...stars, ...Object.keys(s.spaces)];
  const field = Object.values(s.cards).filter((c) => c.owner === player && locate(s, c.uid).zone === 'slot');
  const roll = r();
  if (roll < 0.15 || !home.hand.length) return { player, move: { type: 'endTurn' } };
  if (roll < 0.35) return { player, move: { type: 'takeoff', card: pick(home.hand), star: pick(stars), end: pick(['strong', 'weak']) } };
  const kind = pick(Object.keys(ACTIONS) as ActionKind[]);
  const participants = [...field.filter(() => r() < 0.5).map((c) => ({ card: c.uid, use: pick(USES) }))];
  const supporters = home.hand.filter(() => r() < 0.4).map((card) => ({ card, use: pick(USES), end: pick(['strong', 'weak'] as const) }));
  const destination = kind === 'explore' ? pick(tiles) : pick(stars);
  return {
    player,
    move: {
      type: 'action',
      action: {
        kind,
        starter: pick(home.hand),
        starterEnd: pick(['strong', 'weak']),
        starterUse: pick(USES),
        source: pick(stars),
        destination,
        participants: [...participants, ...supporters.filter((p) => p.card !== home.hand[0])],
        target: { kind: 'tile', id: destination },
        research: { pile: Math.floor(r() * 4) },
        create: { piles: [Math.floor(r() * 4)] },
        cargo: field.filter(() => r() < 0.2).map((c) => c.uid),
        manage: field.length ? [{ op: 'rotate', card: pick(field).uid }] : [],
        boost: { [pick(['M', 'C', 'P', 'S'])]: Math.floor(r() * 2) },
      },
    },
  };
}

describe('fuzz', () => {
  it('random moves never crash the engine and keep every card in one place', () => {
    for (let seed = 1; seed <= 12; seed++) {
      const r = rng(seed);
      let s = createGame({ seed, players: [{ name: 'A' }, { name: 'B' }] });
      let applied = 0;
      let failures = 0;
      for (let i = 0; i < 600 && !s.winner; i++) {
        let { player, move } = randomMove(s, r);
        // stuck with no legal play: drop the Hand by a table move, then end the Turn
        if (failures > 30 && !s.combat) {
          const hand = s.homes[s.turn.player].hand;
          player = s.turn.player;
          move = hand.length
            ? { type: 'manual', op: { op: 'moveCard', card: hand[0], to: { zone: 'discard', player } } }
            : { type: 'endTurn' };
        }
        const res = apply(s, player, move);
        if (!res.ok) {
          expect(res.error, JSON.stringify(move)).not.toMatch(/^engine error/);
          failures++;
          continue;
        }
        failures = 0;
        s = res.state;
        applied++;
        for (const uid of Object.keys(s.cards)) locate(s, uid);
      }
      if (process.env.FUZZ_LOG) console.log(seed, applied, s.turn.number, JSON.stringify(s.winner), s.log.slice(-3).map((l) => l.text));
      expect(applied).toBeGreaterThan(10);
    }
  }, 30_000);
});
