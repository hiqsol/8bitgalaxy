import {types, getType} from "mobx-state-tree";
import CardShape from "../shapes/CardShape";

const Shapes = Object.freeze({
  Card: CardShape,
});

const Drawer = types.model()
  .views(self => ({
    draw() {
      const Shape = Shapes[getType(self).name] ?? null;
      if (Shape) {
        return <Shape/>;
      }

      return getType(self).name;
    },
  }))
  .actions(self => ({
    afterCreate() {
      console.log("Instantiated " + getType(self).name);
    },
  }));

export default Drawer;