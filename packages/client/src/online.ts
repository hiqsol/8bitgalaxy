// Online play through the Colyseus server: the server holds the game,
// this client gets its own view after every move.
import type { Move, View } from '@8bitgalaxy/engine';
import { Client, type Room } from '@colyseus/sdk';

export interface Online {
  send(move: Move): Promise<string | null>;
  leave(): void;
}

export interface OnlineHandlers {
  view(view: View): void;
  error(error: string): void;
  status(status: string): void;
  room(id: string): void;
}

const TOKEN = '8bitgalaxy.reconnect';

/** Server URL: VITE_SERVER_URL, or the page host on port 2567 */
export function serverUrl(): string {
  const env = import.meta.env.VITE_SERVER_URL as string | undefined;
  if (env) return env;
  const proto = location.protocol === 'https:' ? 'wss' : 'ws';
  return `${proto}://${location.hostname}:2567`;
}

export async function connectOnline(name: string, roomId: string | undefined, on: OnlineHandlers): Promise<Online> {
  const client = new Client(serverUrl());
  let room: Room | null = null;
  const saved = sessionStorage.getItem(TOKEN);
  if (saved && roomId && saved.startsWith(`${roomId}:`)) {
    try {
      room = await client.reconnect(saved);
    } catch {
      room = null;
    }
  }
  try {
    room ??= roomId ? await client.joinById(roomId, { name }) : await client.create('duel', { name });
  } catch (e) {
    on.status('');
    on.error(`can't join: ${(e as Error).message}`);
    throw e;
  }
  const joined = room;
  sessionStorage.setItem(TOKEN, joined.reconnectionToken);
  on.room(joined.roomId);
  on.status('waiting for the rival to join');
  joined.onMessage('view', (view: View) => {
    on.status('');
    on.view(view);
  });
  joined.onMessage('lobby', (lobby: { players: string[] }) => on.status(`waiting for the rival: ${lobby.players.join(', ')} here`));
  joined.onDrop(() => on.status('connection lost, reconnecting...'));
  joined.onReconnect(() => on.status(''));
  joined.onLeave(() => on.status('left the game'));
  return {
    async send(move: Move) {
      try {
        const error = (await joined.request('move', move)) as string | null;
        on.error(error ?? '');
        return error;
      } catch (e) {
        const error = `server: ${(e as Error).message}`;
        on.error(error);
        return error;
      }
    },
    leave() {
      sessionStorage.removeItem(TOKEN);
      void joined.leave();
    },
  };
}
