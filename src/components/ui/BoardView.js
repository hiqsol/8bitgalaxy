import React from "react";
import { observer } from "mobx-react-lite";
import HomeView from "./HomeView";
import FieldView from "./FieldView";
import Chat from "../ui/Chat"


const BoardView = ({ board, props, handID, demo}) => {
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
      <HomeView home={board.home(1)} y={31} x={29} props={props}/>
      <HomeView home={board.home(2)} y={30} x={46} props={props}/> 
      <FieldView field={board.field} y={8} x={15} props={props}/>
      <Chat props={props} handID={handID} demo={demo}/>
    </div>
  );
};

export default observer(BoardView);
