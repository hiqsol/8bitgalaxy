export const Game = {
  name: 'Game',

  setup: prepareGame,

  phases: {
    draw: {
      moves: {},
      onBegin: (G) => {
       
      },

     
    },

    play: {
      turn: {
        order: {
       
        },
      },
    },

    compare: {
      moves: {},
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
    },

    player_1: {
      cards: [],
      picked: [],
      played: null,
    },

    game: null,
    deckOnBoard: null,
    evaluated: false,
    winner: 0,
    loser: 1,
    middle: [],
    previousRound: [],
  };
}

