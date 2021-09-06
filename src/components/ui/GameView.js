import React from "react";
import { observer } from "mobx-react-lite"
import BoardView from "./BoardView";

const GameView = ({game}) => {
  return (
    <div className="Game">
      <BoardView board={game.board}/>
    </div>
  );
};

export default observer(GameView);
