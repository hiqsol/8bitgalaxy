import React from "react";
import { observer } from "mobx-react-lite"
import HomeView from "./HomeView";
import FieldView from "./FieldView";

const BoardView = ({store, y, x}) => {
  return (
    <div className={"Board"}>
      <HomeView store={store.home(1)} y={31} x={29}/>
      <HomeView store={store.home(2)} y={30} x={46}/>
      <FieldView store={store.field} y={8} x={15}/>
    </div>
  );
};

export default observer(BoardView);
