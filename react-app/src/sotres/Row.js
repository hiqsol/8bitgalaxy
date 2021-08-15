import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import Pile from "./Pile";
import BaseRow from "../logic/models/Row";
import Direction from "../logic/models/Direction";
import Assert from "../logic/models/Assert";

const Row = types.compose(
  types.model("Row", {
      id: types.optional(types.identifier, () => randomUuid()),
      piles: types.array(Pile),
    })
    .volatile(self => ({
      _type: null,
      _direction: null,
    }))
    .views(self => ({
      // get isMain()    { return self.isType(Types.Main); },
      get direction() {
        return self._direction;
      },
      get type() {
        return self._type;
      },
      get size() {
        return self.piles.length;
      },
      get last() {
        return self.piles[0];
      },
      // get piles() {
      //   return self.piles;
      // },

      pile(no) {
        return self.piles[self.assertNo(no)];
      },
      isType(type) {
        return self._type === type;
      },

      assertNo(no) {
        if (no < 0 || no >= self.size) {
          Assert.error("wrong pile no", no);
        }

        return no;
      },
    }))
    .actions(self => ({
      assert(type, direction, size) {
        self._type = BaseRow.assertType(type);
        self._direction = Direction.assert(direction);
        self.initPiles(size);

        return self;
      },
      setType(type) {
        self._type = BaseRow.assertType(type);

        return self;
      },
      setDirection(direction) {
        self._direction = direction;

        return self;
      },
      initPiles(size) {
        const piles = Types[self.type];
        for (let i = 0, len = piles.length; i < len; i++) {
          self.piles.push(Pile.create().assert(piles[i], self.direction.counterpart));
        }
      },
    })),
  Drawer,
).named("Row");

const Types = Object.freeze({
  Estate: ["Reserve", "Hand", "Techs", "Assets", "Missions"],
  Factory: ["Scrap", "Factory", "Factory", "Factory"],
  Research: ["Ideas", "Research", "Research", "Research", "Research"],
});

export default Row;
