import StateConverter from "../../Model/StateConverter";
import Demo from "../../Demo";
import { TurnOrder } from 'boardgame.io/core';


const gameDemo = new Demo().game;
const stateConverter = new StateConverter();
const gameDemoToString = stateConverter.toState(gameDemo);

export const Game = {
  name: "Game",
  setup: prepareGame,
  endIf: (G) => G.win !== null,

  moves: {
    handleTurnOver,
    handleDrag,
  },

  turn: {
    order: {
      ...TurnOrder.DEFAULT, 
    },
  },

  minPlayers: 2,
  maxPlayers: 2,
};

function prepareGame() {
  return {
    game: null,
    gameState: JSON.parse(gameDemoToString),
    winner: 0,
    loser: 1,
    win: null,
  };
}

function handleTurnOver(G, ctx, game) {
  let _g = JSON.parse(game);
  ctx.events.endTurn();
  return {...G, gameState: _g}
};

function handleDrag(G, ctx, game) {
  let _g = game
  return {...G, gameState: _g}
};