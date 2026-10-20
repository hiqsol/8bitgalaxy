// What a player may see: rival Hand, Reserve order, hidden tiles and cards are redacted.
import { isActor } from './cards';
import { UNKNOWN_STRUCTURE, UNKNOWN_UNIT } from './cards';
import type { Card, PlayerId, State } from './types';

/** A State as one player sees it; engine helpers work on it with placeholder cards */
export type View = State & { viewer: PlayerId | null; undoable: number };

export function viewFor(state: State, viewer: PlayerId | null): View {
  const v: View = { ...structuredClone(state), viewer, undoable: viewer === state.turn.player ? state.undo.length : 0, rng: 0, undo: [] };
  let n = 0;
  const placeholder = (owner: PlayerId, unit: boolean, face: Card['face'] = 'hidden'): string => {
    const uid = `?${owner}-${n++}`;
    v.cards[uid] = { uid, def: unit ? UNKNOWN_UNIT : UNKNOWN_STRUCTURE, owner, end: 'strong', face };
    return uid;
  };
  const drop = (uid: string) => delete v.cards[uid];

  for (const [player, home] of Object.entries(v.homes)) {
    home.reserve = home.reserve.map((uid) => (drop(uid), placeholder(player, true)));
    // cards played openly in a Combat stay in Hand until it resolves, they are seen
    const open = new Set(v.combat?.entries.filter((e) => !e.secret).map((e) => e.card));
    if (player !== viewer) home.hand = home.hand.map((uid) => (open.has(uid) ? uid : (drop(uid), placeholder(player, true))));
  }
  for (const star of Object.values(v.stars)) {
    if (!star.revealed) {
      const size = star.def.units + star.def.structures;
      // the back shows the Size and the Explore Cost, see SimplificationReview S20
      star.def = { name: '?', klass: 'C', units: size, structures: 0, extraCost: star.def.extraCost, ability: { kind: 'energy', n: 0 } };
      star.units = [];
      star.structures = [];
    }
    for (const row of ['units', 'structures'] as const) {
      star[row] = star[row].map((uid) => {
        if (!uid) return uid;
        const c = v.cards[uid];
        if (c.face !== 'hidden' || c.owner === viewer || (viewer && c.known?.includes(viewer))) return uid;
        // a Hidden card keeps its id: it can be targeted, see [[Hidden]]
        v.cards[uid] = { uid, def: isActor(c) ? UNKNOWN_UNIT : UNKNOWN_STRUCTURE, owner: c.owner, end: 'strong', face: 'hidden' };
        return uid;
      });
    }
  }
  for (const space of Object.values(v.spaces)) if (!space.revealed) space.type = 'normal';
  if (v.combat) {
    for (const e of v.combat.entries) {
      if (!e.secret || e.side === viewer) continue;
      e.card = placeholder(e.side, true);
      e.use = undefined;
      e.end = undefined;
    }
  }
  return v;
}
