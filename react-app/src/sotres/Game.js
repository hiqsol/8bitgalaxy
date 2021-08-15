import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import Card from "../logic/models/Card";
import Direction from "../logic/models/Direction";
import Options from "../logic/models/Options";
import Board from "./Board";
import Player from "./Player";

const Game = types.compose(
  types.model("Game", {
      id: types.optional(types.identifier, () => randomUuid()),
      opts: types.frozen({}),
    })
    .volatile(self => ({
      _board: null,
      _options: null,
    }))
    .views(self => ({
      card(name) {
        return Card.assert(name);
      },
      get name() {
        return this._options.name;
      },
      get board() {
        return this._board;
      },
      get drawer() {
        return this._drawer;
      },
      get options() {
        return this._options;
      },
    }))
    .actions(self => ({
      afterCreate() {
        self._options = Options.assert(self.opts);
        self._board = self.opts.board ?? Board.create();
        self.init();
      },
      init() {
        let direction = Direction.TopToBottom;
        for (const [name, race] of Object.entries(self.options.players)) {
          self.board.addPlayer(Player.create({name: name, race: race, _direction: direction.name}));
          direction = direction.reversed;
        }
      },
    })),
  Drawer,
).named("Game");

export default Game;
