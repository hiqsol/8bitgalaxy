import {types} from "mobx-state-tree";
import Card from "./Card";

const Pile = types.model({
  cards: types.map(Card),
});

export default Pile;