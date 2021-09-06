import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import Player from "./Player";
import Pile from "./Pile";
import Row from "./Row";
import Direction from "../logic/models/Direction";

const Home = types.compose(
  types
    .model("Home", {
      id: types.optional(types.identifier, () => randomUuid()),
      player: types.maybe(types.reference(types.late(() => Player))),
      discard: types.maybe(Pile),
      estate: types.maybe(Row),
      factory: types.maybe(Row),
      research: types.maybe(Row),
    })
    .volatile(self => ({
      // player: null,
    }))
    .actions(self => ({
      afterCreate() {
        self.discard = Pile.create().assert("Discard", Direction.TopToBottom);
        self.estate = Row.create().assert("Estate", Direction.LeftToRight, 5);
        self.factory = Row.create().assert("Factory", Direction.TopToBottom, 4);
        self.research = Row.create().assert("Research", Direction.TopToBottom, 5);
      },
      direction() {
        return self.player.direction;
      },
      reserve() {
        return self.estate.pile(0);
      },
      hand() {
        return self.estate.pile(1);
      },
      techs() {
        return self.estate.pile(2);
      },
      assets() {
        return self.estate.pile(3);
      },
      missions() {
        return self.estate.pile(4);
      },
      scrap() {
        return self.factory.pile(0);
      },
      ideas() {
        return self.research.pile(0);
      },
    }))
  , Drawer).named("Home");

export default Home;