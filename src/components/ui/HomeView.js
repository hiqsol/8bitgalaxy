import React from "react";
import cn from "classnames";
import usePosition from "../../state/hooks/usePosition";
import PileView from "./PileView";
import RowView from "./RowView";
import GameContext from "../../logic/game/gameContext";

const HomeView = ({home, y, x}) => {
  const [p] = usePosition(y, x);

  return (
    <div className={cn("Home", home.direction.name)} style={{left: p.x + "px", top: p.y + "px"}}>
      <GameContext.Consumer>  
        {(context) => (
          <>
          <PileView pile={home.discard} y={14} x={24} props={context.props} game={context.stateFromString} />
          <RowView row={home.estate} y={22} x={0} props={context.props} game={context.stateFromString}/>
          <RowView row={home.factory} y={6} x={30} props={context.props} game={context.stateFromString}/>
          <RowView row={home.research} y={0} x={38} props={context.props} game={context.stateFromString}/>
          </>
        )}
      </GameContext.Consumer>
    </div>
  );
};

export default HomeView;