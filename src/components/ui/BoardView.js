import React from "react";
import HomeView from "./HomeView";
import FieldView from "./FieldView";
import Chat from "../ui/Chat";
import GameContext from "../../logic/game/gameContext";


const BoardView = ({ board, handID, demo}) => {
  let curYPos, curXPos, curDown;

  const mouseMove = function (e) {
    if (curDown) {
      if (curXPos && curYPos) {
        window.scrollBy(curXPos - e.clientX, curYPos - e.clientY);
      }
      curXPos = e.clientX;
      curYPos = e.clientY;
    }
  };

  const mouseDown = function (e) {
    if (
      e.target.classList.value.includes("Specs") ||
      e.target.classList.value.includes("Card") ||
      e.target.classList.value.includes("Value")
    ) {
      return;
    }

    curYPos = e.clientY;
    curXPos = e.clientX;
    curDown = true;
  };

  const mouseUp = function (e) {
    curDown = false;
  };

  return (
    <div
      className={"Board"}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
    >
      <HomeView home={board.home(1)} y={31} x={29} />
      <HomeView home={board.home(2)} y={30} x={46} />
      <FieldView field={board.field} y={8} x={15} />
      <GameContext.Consumer>
        {(context) => (
          <Chat props={context.props} handID={handID} demo={demo} />
        )}
      </GameContext.Consumer>
    </div>
  );
};

export default BoardView;
