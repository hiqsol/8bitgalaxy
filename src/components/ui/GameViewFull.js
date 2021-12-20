import "../../styles/8bitfont.css";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {observer} from "mobx-react-lite";
import GameView from "./GameView";
import StateConverter from '../../Model/StateConverter';

const GameViewFull = ({ playerID, demo, ...props }) => {
  const stateConverter = new StateConverter();
  const stateFromString = stateConverter.createGame(props.G.gameState);

  return (
    <div className="App">
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <GameView game={stateFromString} props={props} demo={demo} handID={playerID} />
      </DndProvider>
    </div>
  );
};

export default observer(GameViewFull);
