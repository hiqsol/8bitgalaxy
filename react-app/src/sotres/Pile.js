import {types, detach, getSnapshot} from "mobx-state-tree";
import Card from "./Card";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import Direction from "../logic/models/Direction";
import {autorun} from "mobx";

const Pile = types.compose(
  types
    .model("Pile", {
      id: types.optional(types.identifier, () => randomUuid()),
      type: types.maybe(types.string),
      cards: types.optional(types.array(Card), []),
    })
    .volatile(self => ({
      _direction: null,
    }))
    .views(self => ({
      get direction() {
        return this._direction;
      },
      get size() {
        return self.cards.length;
      },
      get top() {
        return self.cards[self.size - 1] ?? Card.create().assert("absent " + self.type);
      },
      get getCards() {
        const cards = [];
        const size = self.size ? self.size : 1;
        for (let i = 0; i < size; i++) {
          cards.push(self.get(i));
        }

        return cards;
      },
      get(i) {
        return self.cards[i] ?? (i === 0 ? self.top : null);
      },
    }))
    .actions(self => ({
      afterCreate() {
        autorun(() => {
          console.log(getSnapshot(self));
        });
      },
      putUnder(card) {
        self.cards.unshift(Card.create().assert(card));

        return self;
      },
      put(card) {
        self.cards.push(Card.create().assert(card));

        return self;
      },
      remove(card) {
        detach(card);
      },
      setDirection(direction) {
        self._direction = direction;

        return self;
      },
      assert(type, direction) {
        self.type = type;
        self._direction = Direction.assert(direction);

        return self;
      },
    })),
  Drawer,
).named("Pile");

export default Pile;
