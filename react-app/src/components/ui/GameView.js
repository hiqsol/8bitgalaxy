import React from "react";
import { observer } from "mobx-react-lite"
import BoardView from "./BoardView";

const GameView = ({store, y, x}) => {
  return (
    <div className="Game">
      <BoardView store={store.board}/>
    </div>
  );
};

export default observer(GameView);
