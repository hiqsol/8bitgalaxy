import {types, detach, getSnapshot} from "mobx-state-tree";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import Card, {AbsentBase, AbsentHero, AbsentColony, AbsentShip} from "./Card";
import Assert from "../logic/models/Assert";
import {findIndex} from "lodash";
import {autorun} from "mobx";

const Star = types.compose(
  types
    .model("Star", {
      id: types.optional(types.identifier, () => randomUuid()),
      y: types.maybe(types.integer),
      x: types.maybe(types.integer),
      ships: types.optional(types.array(Card), []),
      bases: types.optional(types.array(Card), []),
      heroes: types.optional(types.array(Card), []),
      colonies: types.optional(types.array(Card), []),
      // ships: types.map(Card),
      // bases: types.map(Card),
      // heroes: types.map(Card),
    })
    .volatile(self => ({
      // ships: [null, null, null, null],
      // bases: [null, null, null],
      // heroes: [null, null, null, null],
      // colonies: [null, null, null],
    }))
    .views(self => ({
      base(slot) {
        return self.bases[slot] ?? AbsentBase();
      },
      hero(slot) {
        return self.heroes[slot] ?? AbsentHero();
      },
      ship(slot) {
        return self.ships[slot] ?? AbsentShip();
      },
      colony(slot) {
        return self.colonies[slot] ?? AbsentColony();
      },
    }))
    .actions(self => ({
      afterCreate() {
        self.bases = [AbsentBase(), AbsentBase(), AbsentBase(), AbsentBase()];
        self.heroes = [AbsentHero(), AbsentHero(), AbsentHero()];
        self.ships = [AbsentShip(), AbsentShip(), AbsentShip(), AbsentShip()];
        self.colonies = [AbsentColony(), AbsentColony(), AbsentColony()];
        autorun(() => {
          console.log(getSnapshot(self));
        });
      },
      put(card, idx) {
        card = Card.create().assert(card);
        if (card.isBase) {
          return self.putToSlot(card, idx, self.bases);
        } else if (card.isShip) {
          return self.putToSlot(card, idx, self.ships);
        } else if (card.isHero) {
          return self.putToSlot(card, idx, self.heroes);
        } else if (card.isColony) {
          return self.putToSlot(card, idx, self.colonies);
        }
        Assert.error("wrong card type", card);
      },
      remove(card) {
        ['bases', 'heroes', 'ships', 'colonies'].forEach(slot => {
          const idx = findIndex(self[slot], item => item.id === card.id);
          if (idx > -1) {
            detach(card);
            if (slot === 'bases') {
              self.put(AbsentBase(), idx);
            }
            if (slot === 'heroes') {
              self.put(AbsentHero(), idx);
            }
            if (slot === 'ships') {
              self.put(AbsentShip(), idx);
            }
            if (slot === 'colonies') {
              // self[slot].push(AbsentColony());
              self.put(AbsentColony(), idx);
            }
          }
        });
      },
      putToSlot(card, idx, slots) {
        // if (slots[slot] === undefined) {
        //   Assert.error("non-existent slot", slot);
        // }
        // if (slots[slot] !== null) {
        //   Assert.error("slot already taken", slot);
        // }
        if (slots[idx] && !slots[idx].isAbsent && !card.isAbsent) {
          Assert.error("slot already taken", idx);
        }
        slots[idx] = card;
        // slots.splice(idx, 0, card);

        return self;
      },
    }))
  , Drawer,
).named("Star");

export default Star;