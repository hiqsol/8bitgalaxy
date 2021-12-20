import StateConverter from "../../Model/StateConverter";
import Demo from "../../Demo";


const gameDemo = new Demo().game;
const stateConverter = new StateConverter();
const gameDemoToString = stateConverter.toState(gameDemo);

const gameStart = (G) => {
  G.gameState = JSON.parse(gameDemoToString);
  G.game = "start";
};

const handleTurnOver2 = (G, ctx, card) => {
  // let playerID = 'player_' + ctx.currentPlayer;
  // let currentPlayer = G[playerID];
  // currentPlayer.played = card;
  // G.middle.push(currentPlayer.played);

  // let ga = stateConverter.createGame(G.gameState)
  // console.log(ga.card(card)._state._turned)
  // ga.card(card)._state._turned = !ga.card(card)._state._turned;
  // G.gameStateArr.push(card);
  
  ctx.events.endTurn();
};

export const Game = {
  name: "Game",

  setup: prepareGame,

  phases: {
    draw: {
      moves: { },
      onBegin: (G) => {
        gameStart(G);
      },
      next: "play",
      start: true,
      endIf: (G) => G.game !== null,
    },

    play: {
      // turn: {
      //   order: {
      //     first: (G) => G.winner,
      //     next: (G) => G.loser,
      //   },
      // },
      moves: { handleTurnOver2 },
      next: "compare",
      endIf: (G) => G.player_0.played !== null || G.player_1.played !== null,
    },

    compare: {
      moves: {  },
      // onBegin: evaluate,
      // endIf: (G) => G.evaluated === true,
      // onEnd: cleanup,
      // next: 'play',
    },
  },

  minPlayers: 2,
  maxPlayers: 2,
};

function prepareGame() {
  return {
    player_0: {
      cards: [],
      picked: [],
      played: null,
      home: null,
    },

    player_1: {
      cards: [],
      picked: [],
      played: null,
      home: null,
    },

    game: null,
    gameState: {},
    winner: 0,
    loser: 1,
    middle: [],
  };
}