import React from "react";
import { observer } from "mobx-react-lite"
import BoardView from "./BoardView";

const GameView = ({game, props, demo, handID}) => {
  return (
    <div className="Game">
      <BoardView board={game.board} demo={demo} handID={handID} props={props}/>
    </div>
  );
};

export default observer(GameView);
