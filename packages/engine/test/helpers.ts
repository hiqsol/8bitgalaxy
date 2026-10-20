import { expect } from 'vitest';
import { apply, createGame, moveCard, type ActionDecl, type Location, type Move, type PlayerId, type State } from '../src';
import { spaceAt } from '../src/field';

export function game(seed = 1): State {
  const s = createGame({ seed, players: [{ name: 'Ann' }, { name: 'Bob' }] });
  s.turn.player = 'p1';
  return s;
}

export function uid(state: State, player: PlayerId, def: string): string {
  const c = Object.values(state.cards).find((c) => c.owner === player && c.def === def);
  if (!c) throw new Error(`no ${def} of ${player}`);
  return c.uid;
}

/** Put a card somewhere, as a test setup */
export function put(state: State, player: PlayerId, def: string, to: Location): string {
  const id = uid(state, player, def);
  moveCard(state, id, to);
  return id;
}

export const toHand = (state: State, player: PlayerId, def: string) => put(state, player, def, { zone: 'hand', player });

export function toSlot(state: State, player: PlayerId, def: string, star: string, index?: number): string {
  const id = uid(state, player, def);
  const row = ['Ship', 'Hero'].includes(def.split(' ')[0]) ? 'units' : 'structures';
  const slots = state.stars[star][row];
  moveCard(state, id, { zone: 'slot', star, row, index: index ?? slots.indexOf(null) });
  return id;
}

/** Empty both Hands into Reserve, so a test controls what is in Hand */
export function clearHands(state: State): void {
  for (const home of Object.values(state.homes)) home.reserve.push(...home.hand.splice(0));
}

export function revealBetween(state: State, star: string, bearings: number[]): string[] {
  return bearings.map((b) => {
    const id = spaceAt(state, star, b)!;
    state.spaces[id].revealed = true;
    return id;
  });
}

export function ok(state: State, player: PlayerId, move: Move): State {
  const res = apply(state, player, move);
  if (!res.ok) throw new Error(res.error);
  return res.state;
}

export function err(state: State, player: PlayerId, move: Move): string {
  const res = apply(state, player, move);
  expect(res.ok, 'the move should fail').toBe(false);
  return (res as { error: string }).error;
}

export const action = (a: Partial<ActionDecl> & Pick<ActionDecl, 'kind' | 'starter' | 'source' | 'destination'>): Move => ({
  type: 'action',
  action: { starterEnd: 'strong', starterUse: 'primary', participants: [], ...a },
});
