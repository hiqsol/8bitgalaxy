import {types} from "mobx-state-tree";
import Drawer from "../Drawer";

const Card = types.compose(
  types.model({
    name: "",
  }),
  Drawer,
).named("Card");

export default Card;
