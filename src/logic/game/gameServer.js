import { GAME_SERVER_PORT } from '../../config.js';

const { Server } = require('boardgame.io/server');
const { Game } = require('./gameLogic.js');
const server = Server({
  games: [Game],
});

server.run(GAME_SERVER_PORT);
