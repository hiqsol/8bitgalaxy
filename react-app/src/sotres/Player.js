import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import Home from "./Home";
import {randomUuid} from "../utils";
import Direction from "../logic/models/Direction";

const Player = types.compose(
  types
    .model("Player", {
      id: types.optional(types.identifier, () => randomUuid()),
      home: types.maybe(types.late(() => Home)),
      name: types.maybe(types.string),
      race: types.maybe(types.string),
      y: types.maybe(types.integer),
      x: types.maybe(types.integer),
      _direction: types.maybe(types.string),
    })
    .volatile(self => ({
      direction: null,
    }))
    .actions(self => ({
      afterCreate() {
        self.direction = Direction.assert(self._direction);
        self.home = Home.create({player: self});
      },
    }))
  , Drawer).named("Player");

export default Player;
