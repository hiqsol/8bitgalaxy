// [[Field]] geometry: Stars, Space tiles, routes and [[Distance]].
import type { PlayerId, State } from './types';

/** Side of a Star: o'clock bearings on it and the shared bearings of the neighbour */
const SIDES = [
  { bearings: [1, 2], dRow: -1, shared: [8, 7] }, // upper right
  { bearings: [3, 4], dRow: 0, shared: [10, 9] }, // right
  { bearings: [5, 6], dRow: 1, shared: [12, 11] }, // lower right
  { bearings: [7, 8], dRow: 1, shared: [2, 1] }, // lower left
  { bearings: [9, 10], dRow: 0, shared: [4, 3] }, // left
  { bearings: [11, 12], dRow: -1, shared: [6, 5] }, // upper left
];

const starId = (row: number, col: number) => `${row}${col}`;

/**
 * Neighbour Star across a side, rows are offset by half a hex:
 * the middle row is the widest, see the [[Scenario]] schematic.
 */
function neighbour(rows: string[][], row: number, col: number, side: number): string | null {
  const s = SIDES[side];
  const r = row + s.dRow;
  if (r < 0 || r >= rows.length) return null;
  const wide = rows[row].length > (rows[r]?.length ?? 0);
  let c = col;
  if (s.dRow === 0) c = side === 1 ? col + 1 : col - 1;
  else {
    const right = side === 0 || side === 2;
    // from a wide row the right neighbour above or below has the same column
    if (wide) c = right ? col : col - 1;
    else c = right ? col + 1 : col;
  }
  return rows[r]?.[c] ?? null;
}

export interface SpaceSeed {
  id: string;
  sides: { star: string; bearing: number }[];
}

/** All Space tiles, a tile on a side shared by two Stars belongs to both */
export function buildSpaces(rows: string[][]): SpaceSeed[] {
  const byKey = new Map<string, SpaceSeed>();
  rows.forEach((stars, row) =>
    stars.forEach((star, col) => {
      SIDES.forEach((side, i) => {
        const other = neighbour(rows, row, col, i);
        side.bearings.forEach((bearing, k) => {
          const key = `${star}:${bearing}`;
          if (byKey.has(key)) return;
          const tile: SpaceSeed = { id: `${star}.${bearing}`, sides: [{ star, bearing }] };
          if (other) {
            tile.sides.push({ star: other, bearing: side.shared[k] });
            byKey.set(`${other}:${side.shared[k]}`, tile);
          }
          byKey.set(key, tile);
        });
      });
    }),
  );
  return [...new Set(byKey.values())];
}

export { starId };

/** Tile adjacency: a Space connects to the Stars it borders and the next tiles along the edges */
export function neighbours(state: State, id: string): string[] {
  const star = state.stars[id];
  if (star) {
    return Object.values(state.spaces)
      .filter((sp) => sp.sides.some((s) => s.star === id))
      .map((sp) => sp.id);
  }
  const space = state.spaces[id];
  const res = new Set<string>();
  for (const side of space.sides) {
    res.add(side.star);
    for (const b of [side.bearing - 1, side.bearing + 1]) {
      const bearing = ((b + 11) % 12) + 1;
      const next = spaceAt(state, side.star, bearing);
      if (next) res.add(next);
    }
  }
  return [...res];
}

export function spaceAt(state: State, star: string, bearing: number): string | null {
  for (const sp of Object.values(state.spaces)) {
    if (sp.sides.some((s) => s.star === star && s.bearing === bearing)) return sp.id;
  }
  return null;
}

export function isRevealed(state: State, id: string): boolean {
  return (state.stars[id] ?? state.spaces[id]).revealed;
}

/** Length of a tile: Star 1, Space its length */
const tileLength = (state: State, id: string) => (state.stars[id] ? 1 : state.spaces[id].length);

export interface RouteRules {
  /** [[Navigation]]: may pass [[Void]] */
  navigation?: boolean;
  /** [[Pinning]] applies: the moving player, Stars with rival Military Actors stop the route */
  pinnedFor?: PlayerId;
  /** Star tiles a route can't pass, it can only end there */
  pins?: Set<string>;
}

/**
 * [[Distance]] of the shortest route from one tile to every reachable one:
 * the sum of lengths of all its tiles but the first. Cards can't pass or
 * enter hidden tiles, can't pass [[Void]] without Navigation.
 */
export function distances(state: State, from: string, rules: RouteRules = {}): Map<string, number> {
  const dist = new Map<string, number>([[from, 0]]);
  const queue: [string, number][] = [[from, 0]];
  while (queue.length) {
    queue.sort((a, b) => a[1] - b[1]);
    const [id, d] = queue.shift()!;
    if (d > (dist.get(id) ?? Infinity)) continue;
    if (id !== from && rules.pins?.has(id)) continue; // can finish there, not pass
    for (const next of neighbours(state, id)) {
      if (!isRevealed(state, next)) continue;
      const space = state.spaces[next];
      if (space?.type === 'void' && !rules.navigation) continue;
      const nd = d + tileLength(state, next);
      if (nd < (dist.get(next) ?? Infinity)) {
        dist.set(next, nd);
        queue.push([next, nd]);
      }
    }
  }
  return dist;
}

export function distance(state: State, from: string, to: string, rules: RouteRules = {}): number {
  return distances(state, from, rules).get(to) ?? Infinity;
}

/** Hex center of a Star in field units, for clients */
export function starCenter(state: State, id: string): { x: number; y: number } {
  const star = state.stars[id];
  const rows = Math.max(...Object.values(state.stars).map((s) => s.row)) + 1;
  const widths: number[] = Array(rows).fill(0);
  for (const s of Object.values(state.stars)) widths[s.row] = Math.max(widths[s.row], s.col + 1);
  const widest = Math.max(...widths);
  const offset = (widest - widths[star.row]) / 2;
  return { x: (star.col + offset) * Math.sqrt(3), y: star.row * 1.5 };
}
