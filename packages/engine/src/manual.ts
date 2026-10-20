// Table moves: anything a player could do by hand, for what the engine doesn't cover yet.
// Every one is logged, so both players see it.
import { card, log, moveCard, publicName } from './board';
import { check } from './errors';
import type { Location, ManualOp, PlayerId, State } from './types';

const where = (to: Location) => (to.zone === 'slot' ? `${to.star}` : `${to.player} ${to.zone}`);

export function manual(state: State, player: PlayerId, op: ManualOp): void {
  switch (op.op) {
    case 'moveCard': {
      const name = publicName(state, op.card);
      moveCard(state, op.card, op.to);
      log(state, `manual: moves ${name} to ${where(op.to)}`, player);
      return;
    }
    case 'setFace': {
      const c = card(state, op.card);
      c.face = op.face;
      log(state, `manual: turns ${c.face === 'hidden' ? 'a card' : c.def} ${op.face}`, player);
      return;
    }
    case 'setEnd': {
      const c = card(state, op.card);
      c.end = op.end;
      log(state, `manual: rotates ${publicName(state, op.card)} to its ${op.end} End`, player);
      return;
    }
    case 'revealTile': {
      const tile = state.stars[op.id] ?? state.spaces[op.id];
      check(tile, 'unknown tile');
      tile.revealed = true;
      log(state, `manual: reveals ${op.id}`, player);
      return;
    }
    case 'energy': {
      const home = state.homes[op.player];
      check(home && home.energy + op.delta >= 0, 'Energy can not be negative');
      home.energy += op.delta;
      log(state, `manual: ${op.delta > 0 ? 'adds' : 'removes'} ${Math.abs(op.delta)} Energy of ${op.player}`, player);
      return;
    }
  }
}
