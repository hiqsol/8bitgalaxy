// The only entry point that changes a game: apply(state, player, move).
import { performAction } from './actions';
import { combatAdd, combatPass, combatRetreat, combatSave } from './combat';
import { check, RuleError } from './errors';
import { manual } from './manual';
import { concede, endTurn, reveal, takeoff } from './turn';
import type { Move, PlayerId, State } from './types';

export type Result = { ok: true; state: State } | { ok: false; error: string };

/** Moves that reveal nothing and draw nothing can be taken back in the same Turn */
function undoable(move: Move): boolean {
  if (move.type === 'takeoff' || move.type === 'manual') return true;
  return move.type === 'action' && move.action.kind !== 'explore' && move.action.kind !== 'attack';
}

function dispatch(state: State, player: PlayerId, move: Move): void {
  switch (move.type) {
    case 'takeoff':
      return takeoff(state, player, move);
    case 'action':
      return performAction(state, player, move.action);
    case 'combatAdd':
      return combatAdd(state, player, move);
    case 'combatPass':
      return combatPass(state, player);
    case 'combatRetreat':
      return combatRetreat(state, player);
    case 'combatSave':
      return combatSave(state, player, move.cards);
    case 'reveal':
      return reveal(state, player, move.card);
    case 'endTurn':
      return endTurn(state, player, move.restore);
    case 'manual':
      return manual(state, player, move.op);
    case 'concede':
      return concede(state, player);
    default:
      throw new RuleError(`unknown move ${(move as Move).type}`);
  }
}

/** Apply a move of a player: a new state, or the rule it breaks; the given state is not changed */
export function apply(state: State, player: PlayerId, move: Move): Result {
  try {
    check(state.players.some((p) => p.id === player), 'not a player of this game');
    if (move.type === 'undo') {
      check(state.turn.player === player && state.undo.length > 0, 'nothing to undo');
      const undo = state.undo.slice(0, -1);
      return { ok: true, state: { ...structuredClone(state.undo[state.undo.length - 1]), undo: structuredClone(undo) } };
    }
    const next = structuredClone(state);
    const { undo: _, ...before } = state;
    dispatch(next, player, move);
    if (undoable(move)) next.undo.push(structuredClone(before));
    else next.undo = [];
    return { ok: true, state: next };
  } catch (e) {
    if (e instanceof RuleError) return { ok: false, error: e.message };
    return { ok: false, error: `engine error: ${(e as Error).message}` };
  }
}

/** The rule a move would break, or null */
export function validate(state: State, player: PlayerId, move: Move): string | null {
  const res = apply(state, player, move);
  return res.ok ? null : res.error;
}
