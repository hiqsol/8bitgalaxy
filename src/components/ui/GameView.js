import React from "react";
import BoardView from "./BoardView";

const GameView = ({game, demo, handID}) => {
  return (
    <div className="Game">
      <BoardView board={game.board} demo={demo} handID={handID}/>
    </div>
  );
};

export default GameView;
