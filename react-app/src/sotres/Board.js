import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import Field from "./Field";
import Player from "./Player";
import Assert from "../logic/models/Assert";
import {randomUuid} from "../utils";

const Board = types.compose(
  types
    .model("Board", {
      id: types.optional(types.identifier, () => randomUuid()),
      field: types.maybe(Field),
      players: types.array(Player),
    })
    .views(self => ({
      star(y, x) {
        return self.field.star(y, x);
      },
      player(no) {
        return self.players[self.assertPlayerNo(no) - 1];
      },
      home(no) {
        return self.player(no).home;
      },
      assertPlayerNo(no) {
        if (typeof (no) !== "number" || no < 1 || no > self.players.length) {
          Assert.error("wrong player no", no);
        }

        return no;
      },
    }))
    .actions(self => ({
      afterCreate() {
        // self.field = Field.create({board: self});
        self.field = Field.create();
      },
      addPlayer(player) {
        self.players.push(player);
      },
    })), Drawer).named("Board");

export default Board;