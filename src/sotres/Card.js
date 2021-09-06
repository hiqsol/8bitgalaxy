import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import BaseCard from "../logic/models/Card";
import BaseState from "../logic/models/State";
import Prop from "../logic/models/Prop";
import {reaction} from "mobx";

const Names = Object.freeze({
  Absent: "Absent",
  Turned: "Turned",
  Visible: "Visible",
  Ins: "Inserted",
  Inserted: "Inserted",
  Alt: "Alternative",
  Alternative: "Alternative",
});

const State = types
  .model("State", {
    name: "",
    absent: false,
    turned: false,
    inserted: false,
    alternative: false,
  }).views(self => ({
    get isAbsent() {
      return self.absent;
    },
    get isTurned() {
      return self.turned;
    },
    get isInserted() {
      self.inserted;
    },
    get isAlternative() {
      return self.alternative;
    },
    get isVisible() {
      return !self.isAbsent && !self.isTurned;
    },
    get visibility() {
      if (self.isAbsent) {
        return Names.Absent;
      }
      if (self.isTurned) {
        return Names.Turned;
      }

      return Names.Visible;
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.name = self.name.split("-").forEach(part => this.applyName(part));
    },
    applyName(input) {
      input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      const name = Names[input];
      if (input && !name) {
        alert("wrong state: " + input);
      }
      if (name === Names.Absent) {
        self.absent = true;
      } else if (name === Names.Turned) {
        self.turned = true;
      } else if (name === Names.Inserted) {
        self.inserted = true;
      } else if (name === Names.Alternative) {
        self.alternative = true;
      }
    },
    turnOver() {
      self.turned = !self.turned;
    },
  }));

const Card = types.compose(
  types
    .model("Card", {
      id: types.optional(types.identifier, () => randomUuid()),
      state: types.optional(State, {}),
    })
    .volatile(self => ({
      _card: null,
    }))
    .views(self => ({
      get State() {
        return self._card._state;
      },
      get visibility() {
        // return self._card._state.visibility;
        return self.state.visibility;
      },
      get isAbsent() {
        // return self._card._state.isAbsent;
        return self.state.isAbsent;
      },
      get isTurned() {
        // return self._card._state.isTurned;
        return self.state.isTurned;
      },
      get isVisible() {
        // return self._card._state.isVisible;
        return self.state.isVisible;
      },
      get isAlternative() {
        return self._card._state.isAlternative;
      },

      get aCard() {
        return self._card._acard;
      },
      get Specs() {
        return self._card._acard.Specs;
      },
      get Alternative() {
        return self._card._acard.Alternative;
      },

      get Name() {
        return self._card.aCard.Name;
      },
      get Type() {
        return self._card.aCard.Type;
      },
      get Race() {
        return self._card.aCard.Race;
      },
      get Level() {
        return self._card.statedValue(Prop.Level);
      },
      get Klass() {
        return self._card.statedValue(Prop.Klass);
      },
      get Defense() {
        return self._card.statedValue(Prop.Defense);
      },
      get Attack() {
        return self._card.statedValue(Prop.Attack);
      },
      get Colonization() {
        return self._card.statedValue(Prop.Colonization);
      },
      get Science() {
        return self._card.statedValue(Prop.Science);
      },
      get Production() {
        return self._card.statedValue(Prop.Production);
      },
      get Requires() {
        return self._card.statedValue(Prop.Requires);
      },
      get Cooperation() {
        return self._card.statedValue(Prop.Cooperation);
      },
      get Utilization() {
        return self._card.statedValue(Prop.Utilization);
      },

      get isHero() {
        return self._card.aCard.isHero;
      },
      get isColony() {
        return self._card.aCard.isColony;
      },
      get isShip() {
        return self._card.aCard.isShip;
      },
      get isBase() {
        return self._card.aCard.isBase;
      },

      statedValue(prop) {
        return self.aCard.getValue(prop);
      },
    }))
    .actions(self => ({
      afterCreate() {
        if (self.card) {
          self._card = BaseCard.assert(self.card);
        }
        reaction(() => self._turned, () => {
          console.log(self);
        });
      },
      turnOver() {
        // self._card._state._turned = !self._card._state._turned;
        // self._turned = !self._turned;
        self.state.turnOver();
        // self.state = State.create({name: 'turned'});
      },
      assert(card) {
        if (typeof card === "string") {
          self._card = BaseCard.assert(card);
          let [state] = card.split(" ", 2);
          if (!BaseState.isName(state)) {
            state = "";
          }
          self.state = State.create({name: state});
        } else {
          // self._card = entry._card;
          return card;
        }

        return self;
      },
    })),
  Drawer,
).named("Card");

export function assert(sample) {
  if (typeof sample === "string") {
    return Card.create({name: sample});
  }

  return sample;
}

//
export const AbsentBase = () => Card.create().assert("absent Base");
export const AbsentHero = () => Card.create().assert("absent Hero");
export const AbsentShip = () => Card.create().assert("absent Ship");
export const AbsentColony = () => Card.create().assert("absent Colony");

export default Card;
