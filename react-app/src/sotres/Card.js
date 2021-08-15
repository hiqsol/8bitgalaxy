import {types} from "mobx-state-tree";
import Drawer from "./Drawer";
import {randomUuid} from "../utils";
import BaseCard from "../logic/models/Card";
import Prop from "../logic/models/Prop";

const Card = types.compose(
  types
    .model("Card", {
      id: types.optional(types.identifier, () => randomUuid()),
      // _card: types.frozen(null),
      _turned: types.optional(types.boolean, false),
    })
    .volatile(self => ({
      _card: null,
    }))
    .views(self => ({
      get State()             { return self._card._state; },
      get visibility()        { return self._card._state.visibility; },
      get isAbsent()          { return self._card._state.isAbsent; },
      get isTurned()          { return self._card._state.isTurned; },
      get isVisible()         { return self._card._state.isVisible; },
      get isAlternative()     { return self._card._state.isAlternative; },

      get aCard()             { return self._card._acard; },
      get Specs()             { return self._card._acard.Specs; },
      get Alternative()       { return self._card._acard.Alternative; },

      get Name()              { return self._card.aCard.Name; },
      get Type()              { return self._card.aCard.Type; },
      get Race()              { return self._card.aCard.Race; },
      get Level()             { return self._card.statedValue(Prop.Level); },
      get Klass()             { return self._card.statedValue(Prop.Klass); },
      get Defense()           { return self._card.statedValue(Prop.Defense); },
      get Attack()            { return self._card.statedValue(Prop.Attack); },
      get Colonization()      { return self._card.statedValue(Prop.Colonization); },
      get Science()           { return self._card.statedValue(Prop.Science); },
      get Production()        { return self._card.statedValue(Prop.Production); },
      get Requires()          { return self._card.statedValue(Prop.Requires); },
      get Cooperation()       { return self._card.statedValue(Prop.Cooperation); },
      get Utilization()       { return self._card.statedValue(Prop.Utilization); },

      get isHero()            { return self._card.aCard.isHero; },
      get isColony()          { return self._card.aCard.isColony; },
      get isShip()            { return self._card.aCard.isShip; },
      get isBase()            { return self._card.aCard.isBase; },

      statedValue(prop)       {
        return self.aCard.getValue(prop);
      }
    }))
    .actions(self => ({
      afterCreate() {
        if (self.card) {
          self._card = BaseCard.assert(self.card);
        }
      },
      turnOver() {
        self._card._state._turned = !self._card._state._turned;
        self._turned = self._card._state._turned;
      },
      assert(card) {
        if (typeof card === 'string') {
          self._card = BaseCard.assert(card);
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
