import React from "react";
import {observer} from "mobx-react-lite";
import HomeView from "./HomeView";
import FieldView from "./FieldView";

const BoardView = ({board}) => {
  return (
    <div className={"Board"}>
      <HomeView home={board.home(1)} y={31} x={29}/>
      <HomeView home={board.home(2)} y={30} x={46}/>
      <FieldView field={board.field} y={8} x={15}/>
    </div>
  );
};

export default observer(BoardView);
