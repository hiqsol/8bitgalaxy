import "../../styles/8bitfont.css";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import GameView from "./GameView";
import StateConverter from '../../Model/StateConverter';
import GameContext from "../../logic/game/gameContext";


const GameViewFull = ({ playerID, demo, ...props }) => {
  const stateConverter = new StateConverter();
  const stateFromString = stateConverter.createGame(props.G.gameState);

  return (
    <div className="App">
      <GameContext.Provider value={{stateFromString: stateFromString, props: props}}>
          <GameContext.Consumer>
            {(context) => (
              <DndProvider debugMode={true} backend={HTML5Backend}>
                <GameView game={context.stateFromString} demo={demo} handID={playerID} />
              </DndProvider>
            )}
          </GameContext.Consumer>
      </GameContext.Provider>
    </div>
  );
};

export default GameViewFull;
