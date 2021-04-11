import {types} from "mobx-state-tree";
import Star from "./Star";

const Field = types.model({
  stars: types.map(Star),
});

export default Field;
