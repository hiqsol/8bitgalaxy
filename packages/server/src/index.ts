import { defineRoom, defineServer } from 'colyseus';
import { DuelRoom } from './DuelRoom';

const port = Number(process.env.PORT ?? 2567);

const server = defineServer({
  rooms: {
    duel: defineRoom(DuelRoom),
  },
});

server.listen(port).then(() => console.log(`8-bit Galaxy server on :${port}`));
