import {types, getType} from "mobx-state-tree";

import CardView from "../components/ui/CardView";
import PileView from "../components/ui/PileView";
import GameView from "../components/ui/GameView";
import BoardView from "../components/ui/BoardView";
import HomeView from "../components/ui/HomeView";
import FieldView from "../components/ui/FieldView";
import RowView from "../components/ui/RowView";
import StarView from "../components/ui/StarView";

const Shapes = Object.freeze({
  Game: GameView,
  Board: BoardView,
  Home: HomeView,
  Field: FieldView,
  Star: StarView,
  Row: RowView,
  Pile: PileView,
  Card: CardView,
});

const Drawer = types.model("Drawer", {
    m: 50,
    x: 0,
    y: 0,
  })
  .views(self => ({
    draw(y = 0, x = 0) {
      const View = Shapes[getType(self).name] ?? null;
      if (View) {
        return <View store={self} y={y} x={x}/>;
      }

      return getType(self).name;
    },
  }))
  .actions(self => ({
      // afterCreate() {
      //   console.log("Instantiated " + getType(self).name);
      // },
      setPosition(y, x) {
        self.y = y;
        self.x = x;
      },
    }),
  );

export default Drawer;