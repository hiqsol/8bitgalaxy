import "../../styles/8bitfont.css";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {observer} from "mobx-react-lite";
import GameView from "./GameView";
import Demo from "../../Demo";


const GameViewFull = () => {
  const game = new Demo().game;
  return (
    <div className="App">
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <GameView game={game} />
      </DndProvider>
    </div>
  );
};

export default observer(GameViewFull);
