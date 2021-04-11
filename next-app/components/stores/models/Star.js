import {types} from "mobx-state-tree";
import Field from "./Field";

const Star = types.model({
  field: types.map(Field),
});

export default Star;
