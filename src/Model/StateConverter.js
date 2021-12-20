import Game from "../Game.js";
import Field from "../Model/Field.js";
import Player from "../Model/Player.js";
import Home from "../Model/Home.js";
const stringify = require("safe-stable-stringify");


class StateConverter {
  createGame(state) {
    let g = new Game();
    g._board._players = [];
    return this.createBoard(state._board, g);
  }

  createBoard(state, g) {
    if (state && state._players) {
      state._players.forEach((player) => {
        g._board.addPlayer(
          new Player(
            player._name,
            player._race,
            player._direction._name,
            player._y,
            player._x
          )
        );
      });
    }
    return this.createHome(g, state);
  }

  createHome = (board, state) => {
    if (state && state._players) {
      state._players.forEach((player) => {
        let p = new Player(player._name, player._race, player._direction._name);
        let h = new Home(p);

        player._home._discard._cards.forEach((card) => {
          let cardName = card._acard._specs._specs.Name._value;
          if (cardName !== "Discard") {
            if (card._state._turned) {
              h.discard.put(`turned ${cardName}`);
            } else {
              h.discard.put(cardName);
            }
          }
        });

        player._home._estate._piles.forEach((card) => {
          if (card._type === "Reserve") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Reserve") {
                if (c._state._turned) {
                  h.reserve.put(`turned ${cardName}`);
                } else {
                  h.reserve.put(cardName);
                }
              }
            });
          }
          if (card._type === "Hand") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Hand") {
                if (c._state._turned) {
                  h.hand.put(`turned ${cardName}`);
                } else {
                  h.hand.put(cardName);
                }
              }
            });
          }
          if (card._type === "Techs") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Techs") {
                if (c._state._turned) {
                  h.techs.put(`turned ${cardName}`);
                } else {
                  h.techs.put(cardName);
                }
              }
            });
          }
          if (card._type === "Assets") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Assets") {
                if (c._state._turned) {
                  h.assets.put(`turned ${cardName}`);
                } else {
                  h.assets.put(cardName);
                }
              }
            });
          }
          if (card._type === "Missions") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Missions") {
                if (c._state._turned) {
                  h.missions.put(`turned ${cardName}`);
                } else {
                  h.missions.put(cardName);
                }
              }
            });
          }
        });

        player._home._factory._piles.forEach((card, idx) => {
          if (card._type === "Scrap") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Scrap") {
                if (c._state._turned) {
                  h.scrap.put(`turned ${cardName}`);
                } else {
                  h.scrap.put(cardName);
                }
              }
            });
          }
          if (card._type === "Factory") {
            card._cards.forEach((c, index) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Factory") {
                if (c._state._turned) {
                  h.factory.pile(idx).put(`turned ${cardName}`);
                } else {
                  h.factory.pile(idx).put(cardName);
                }
              }
            });
          }
        });

        player._home._research._piles.forEach((card, idx) => {
          if (card._type === "Ideas") {
            card._cards.forEach((c) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Ideas") {
                if (c._state._turned) {
                  h.research.pile(idx).put(`turned ${cardName}`);
                } else {
                  h.research.pile(idx).put(cardName);
                }
              }
            });
          }
          if (card._type === "Research") {
            card._cards.forEach((c, index) => {
              let cardName = c._acard._specs._specs.Name._value;
              if (cardName !== "Research") {
                if (c._state._turned) {
                  h.research.pile(idx).put(`turned ${cardName}`);
                } else {
                  h.research.pile(idx).put(cardName);
                }
              }
            });
          }
        });

        board._board._players.forEach((player) => {
          if (player._name === h._player._name) {
            player._home = h;
          }
        });
        return board;
      });
    }
    return this.createField(board, state);
  };

  createField = (board, state) => {
    let field = new Field(board._board);

    if (state && state._field) {
      state._field.stars.forEach((item) => {
        item.forEach((star) => {
          if (star) {
            star.bases.forEach((s, index) => {
              if (s) {
                let cardName = s._acard._specs._specs.Name._value;
                if (s._state._turned) {
                  field.star(star.y, star.x).put(`turned ${cardName}`, index);
                } else {
                  field.star(star.y, star.x).put(cardName, index);
                }
              }
            });
            star.colonies.forEach((s, index) => {
              if (s) {
                let cardName = s._acard._specs._specs.Name._value;
                if (s._state._turned) {
                  field.star(star.y, star.x).put(`turned ${cardName}`, index);
                } else {
                  field.star(star.y, star.x).put(cardName, index);
                }
              }
            });
            star.heroes.forEach((s, index) => {
              if (s) {
                let cardName = s._acard._specs._specs.Name._value;
                if (s._state._turned) {
                  field.star(star.y, star.x).put(`turned ${cardName}`, index);
                } else {
                  field.star(star.y, star.x).put(cardName, index);
                }
              }
            });
            star.ships.forEach((s, index) => {
              if (s) {
                let cardName = s._acard._specs._specs.Name._value;
                if (s._state._turned) {
                  field.star(star.y, star.x).put(`turned ${cardName}`, index);
                } else {
                  field.star(star.y, star.x).put(cardName, index);
                }
              }
            });
          }
        });
      });
    }

    board._board._field = field;
    return board;
  };

  toState(game) {
    const gameToString = stringify(game);
    return gameToString;
  }
}

export default StateConverter;
