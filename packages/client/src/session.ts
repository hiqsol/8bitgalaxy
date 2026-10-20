// A game session: hot-seat on this device, or online through the server.
// Components read `game.view` and call `send(move)`, the same for both.
import { apply, createGame, type Move, type PlayerId, type State, type View, viewFor } from '@8bitgalaxy/engine';
import { markRaw, reactive } from 'vue';
import { connectOnline, type Online } from './online';

const SAVE = '8bitgalaxy.local';

export const game = reactive({
  kind: null as null | 'local' | 'online',
  view: null as View | null,
  /** whose eyes: the hot-seat player to act, or this online player */
  seat: null as PlayerId | null,
  error: '',
  /** hot-seat: the screen is covered until the next player is ready */
  cover: false,
  /** hot-seat: no secrets, both Hands and Hidden cards are open */
  openHands: false,
  roomId: '',
  status: '',
});

let local: State | null = null;
let online: Online | null = null;

/** The player who must act now: the Turn player or the one to act in Combat */
export const actingPlayer = (s: State) => (s.combat ? s.combat.toAct : s.turn.player);

function refresh(): void {
  if (!local) return;
  const seat = game.seat!;
  // views are replaced, never changed: not deeply reactive
  game.view = markRaw(
    game.openHands ? { ...structuredClone(local), viewer: seat, undoable: local.undo.length, undo: [] } : viewFor(local, seat),
  );
}

function save(): void {
  try {
    localStorage.setItem(SAVE, JSON.stringify({ state: local, openHands: game.openHands }));
  } catch {
    // storage may be blocked, the game goes on
  }
}

export function startLocal(names: [string, string], openHands: boolean, seed = Date.now()): void {
  local = createGame({ seed, players: names.map((name) => ({ name })) });
  openLocal(openHands);
}

function openLocal(openHands: boolean): void {
  game.kind = 'local';
  game.openHands = openHands;
  game.seat = actingPlayer(local!);
  game.cover = !openHands;
  game.error = '';
  refresh();
  save();
}

export function savedLocal(): boolean {
  try {
    return !!localStorage.getItem(SAVE);
  } catch {
    return false;
  }
}

export function resumeLocal(): void {
  const saved = JSON.parse(localStorage.getItem(SAVE)!);
  local = saved.state;
  openLocal(saved.openHands);
}

export function exportLocal(): string {
  return JSON.stringify(local, null, 1);
}

export function importLocal(json: string): void {
  local = JSON.parse(json);
  openLocal(game.openHands);
}

/** Send a move as the seat; returns the rule it breaks, or null */
export async function send(move: Move): Promise<string | null> {
  move = JSON.parse(JSON.stringify(move)); // plain data, not reactive proxies
  if (game.kind === 'online') return online!.send(move);
  if (!local || !game.seat) return 'no game';
  const res = apply(local, game.seat, move);
  if (!res.ok) {
    game.error = res.error;
    return res.error;
  }
  game.error = '';
  local = res.state;
  const next = actingPlayer(local);
  if (next !== game.seat && !game.openHands && !local.winner) game.cover = true;
  game.seat = next;
  refresh();
  save();
  return null;
}

export async function startOnline(name: string, roomId?: string): Promise<void> {
  game.error = '';
  game.status = 'connecting...';
  online = await connectOnline(name, roomId, {
    view: (view) => {
      game.kind = 'online';
      game.view = markRaw(view);
      game.seat = view.viewer;
    },
    error: (error) => (game.error = error),
    status: (status) => (game.status = status),
    room: (id) => (game.roomId = id),
  });
}

export function leave(): void {
  online?.leave();
  online = null;
  game.kind = null;
  game.view = null;
  game.seat = null;
  game.roomId = '';
  game.status = '';
}
