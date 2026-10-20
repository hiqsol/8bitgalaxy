// Seeded RNG kept in the state, so a game replays from its moves.
import type { State } from './types';

/** mulberry32 step: returns [value in 0..1, next seed] */
function step(seed: number): [number, number] {
  const next = (seed + 0x6d2b79f5) | 0;
  let t = next;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return [((t ^ (t >>> 14)) >>> 0) / 4294967296, next];
}

export function random(state: State): number {
  const [value, next] = step(state.rng);
  state.rng = next;
  return value;
}

export function randomInt(state: State, n: number): number {
  return Math.floor(random(state) * n);
}

export function shuffle<T>(state: State, items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = randomInt(state, i + 1);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}
