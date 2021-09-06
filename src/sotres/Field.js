import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import Star from "./Star";
import {randomUuid} from "../utils";

const Field = types.compose(
  types
    .model("Field", {
      id: types.optional(types.identifier, () => randomUuid()),
    })
    .volatile(() => ({
      stars: [[], [], []],
    }))
    .views(self => ({
      star(y, x) {
        if (!self.stars[y][x]) {
          self.stars[y][x] = Star.create({field: self, y: y, x: x});
        }
        return self.stars[y][x];
      },
    }))
  , Drawer).named("Field");

export default Field;