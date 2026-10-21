// Positions of the legacy drawers (legacy/src/legacy/js/DivDrawer), in their unit of 50 board
// pixels, the legacy CSS zooms the board to 0.3. Computed as the drawers do, so they match.

export const M = 50;

export type Dir = 'TopToBottom' | 'BottomToTop' | 'LeftToRight' | 'RightToLeft';
export interface At {
  x: number;
  y: number;
}

const STEP: Record<Dir, At> = {
  TopToBottom: { x: 0, y: 1 },
  BottomToTop: { x: 0, y: -1 },
  LeftToRight: { x: 1, y: 0 },
  RightToLeft: { x: -1, y: 0 },
};
const COUNTERPART: Record<Dir, Dir> = {
  TopToBottom: 'LeftToRight',
  BottomToTop: 'RightToLeft',
  LeftToRight: 'TopToBottom',
  RightToLeft: 'BottomToTop',
};

/** The style of an element the legacy drawer places at `at` */
export const px = (at: At) => ({ left: `${at.x * M}px`, top: `${at.y * M}px` });

/** BoardDrawer: the Field, Home 1 at the bottom right, Home 2 at the top left */
export const FIELD: At = { x: 18.1, y: 10.8 };
export const HOMES = [
  { at: { x: 72.4, y: 56.5 }, dir: 'BottomToTop', race: 'Human' },
  { at: { x: 1.0, y: 3.0 }, dir: 'TopToBottom', race: 'Martian' },
] as const;

export interface Placed extends At {
  dir: Dir;
}

/** RowDrawer: piles along the Row, each turned across it */
function row(at: At, dir: Dir, size: number): Placed[] {
  const s = STEP[dir];
  return Array.from({ length: size }, (_, i) => ({ x: i * s.x * 6, y: i * s.y * 6, dir: COUNTERPART[dir] })).map((p) => ({
    ...p,
    x: at.x + p.x,
    y: at.y + p.y,
  }));
}

/** HomeDrawer.drawHuman without the Progress row, the rules have no such piles */
export function homeLayout(dir: 'TopToBottom' | 'BottomToTop', factory: number, laboratory: number) {
  const xs = STEP[COUNTERPART[dir]].x;
  const ys = STEP[dir].y;
  const top = dir === 'TopToBottom';
  const p = (x: number, y: number, d: Dir = dir): Placed => ({ x: x * xs, y: y * ys, dir: d });
  const factoryAt = top ? p(8, 0) : p(8, -1);
  const researchAt = top ? p(0, 0) : p(0, -1);
  return {
    counter: top ? p(19, 18, 'LeftToRight') : p(14, 12, 'LeftToRight'),
    hand: top ? p(24, -2, 'TopToBottom') : p(24, 0, 'TopToBottom'),
    discard: top ? p(17, 9) : p(15, 9),
    reserve: top ? p(17, 0) : p(15, 0),
    factory: { at: factoryAt, piles: row({ x: 0, y: 0 }, dir, factory) },
    laboratory: { at: researchAt, piles: row({ x: 0, y: 0 }, dir, laboratory) },
  };
}

/** StarDrawer: Stars in rows, a narrow row is indented by half a Star */
export function starAt(row: number, col: number, widths: number[]): At {
  const indent = ((Math.max(...widths) - widths[row]) / 2) * 15.5;
  return { x: col * 15.5 + indent, y: row * 13.4 + 1 };
}

/** SlotsDrawer: Slots in a Star are shifted from the StarDrawer params */
export const STAR_UNITS: At = { x: 0.2 + 0.4, y: 3.2 + 0.2 };
export const STAR_STRUCTURES: At = { x: 5.8 + 0.4, y: 3.2 + 0.2 };

/** Board pixels of a Star's middle and the distance to its corners, for the click area */
export const STAR_CENTER: At = { x: 350, y: 404 };
export const STAR_R = 447.5;

const ODD: Record<number, [number, number, number]> = {
  1: [8.51, -1.95, -60],
  3: [14.19, 3.72, 0],
  5: [12.13, 11.45, 60],
  7: [4.36, 13.53, 120],
  9: [-1.31, 7.85, 180],
  11: [0.77, 0.13, -120],
};
const REVERSED = [0, 8, 7, 10, 9, 12, 11, 2, 1, 4, 3, 6, 5];
const X_STEPS = [0, 0.5, 0.5, 1, 1, 0.5, 0.5, -0.5, -0.5, -1, -1, -0.5, -0.5];
const Y_STEPS = [0, -1, -1, 0, 0, 1, 1, 1, 1, 0, 0, -1, -1];

/** SpaceDrawer.getBearingParams: a Space tile at an o'clock bearing of its Star */
export function spaceAt(bearing: number): At & { rotate: number } {
  if (bearing % 2 === 0) {
    const p = spaceAt(REVERSED[bearing]);
    return { x: p.x + 15.5 * X_STEPS[bearing], y: p.y + 13.4 * Y_STEPS[bearing], rotate: p.rotate };
  }
  const [x, y, rotate] = ODD[bearing];
  return { x, y, rotate };
}

/** Card offsets in a pile (legacy/src/assets/_pile.scss): folded a little, fanned on hover */
export function pileOffset(k: number, n: number, folded: boolean): number {
  if (!folded) return k * M;
  return n > 1 ? k * (0.9 / (n - 1)) * M : 0;
}

export const KLASS_NAMES = { M: 'Attack', C: 'Colonization', P: 'Production', S: 'Science' } as const;
export const TYPE_IMAGES = { Hero: 'user', Ship: 'rocket', Base: 'codepen', Colony: 'world' } as const;
