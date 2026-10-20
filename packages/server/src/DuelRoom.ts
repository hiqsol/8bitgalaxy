// One duel: the room holds the full game, every player gets only their view.
import { apply, createGame, type Move, type PlayerId, type State, viewFor } from '@8bitgalaxy/engine';
import { type Client, Room } from 'colyseus';

interface Seat {
  player: PlayerId;
  name: string;
  /** the connected client, null while away */
  client: Client | null;
}

const RECONNECT_SECONDS = 300;

export class DuelRoom extends Room {
  maxClients = 2;
  private game: State | null = null;
  private seats: Seat[] = [];

  onCreate() {
    this.onMessage('move', (client: Client, move: Move) => this.move(client, move));
  }

  onJoin(client: Client, options: { name?: string } = {}) {
    const name = String(options.name ?? 'Player').slice(0, 24) || 'Player';
    // a player who left takes back the seat with the same name
    const back = this.seats.find((s) => !s.client && s.name === name);
    if (back) back.client = client;
    else this.seats.push({ player: `p${this.seats.length + 1}`, name, client });
    if (!this.game && this.seats.length === 2) {
      this.game = createGame({ players: this.seats.map((s) => ({ name: s.name })) });
      void this.lock();
    }
    this.sendViews();
  }

  async onDrop(client: Client) {
    await this.allowReconnection(client, RECONNECT_SECONDS);
  }

  onReconnect(client: Client) {
    this.sendView(client);
  }

  onLeave(client: Client) {
    const seat = this.seat(client);
    if (seat) seat.client = null;
    if (this.game) void this.unlock();
  }

  private seat(client: Client): Seat | undefined {
    return this.seats.find((s) => s.client?.sessionId === client.sessionId);
  }

  /** Apply a move of the client's player, reply with the rule it breaks or null */
  private move(client: Client, move: Move): string | null {
    const seat = this.seat(client);
    if (!seat || !this.game) return 'the game has not started';
    const res = apply(this.game, seat.player, move);
    if (!res.ok) return res.error;
    this.game = res.state;
    this.sendViews();
    return null;
  }

  private sendView(client: Client) {
    const seat = this.seat(client);
    if (!this.game || !seat) {
      client.send('lobby', { players: this.seats.map((s) => s.name) });
      return;
    }
    client.send('view', viewFor(this.game, seat.player));
  }

  private sendViews() {
    for (const s of this.seats) if (s.client) this.sendView(s.client);
  }
}
