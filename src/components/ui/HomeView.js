import React from "react";
import { observer } from "mobx-react-lite"
import cn from "classnames";
import usePosition from "../../state/hooks/usePosition";
import PileView from "./PileView";
import RowView from "./RowView";

const HomeView = ({home, y, x, props}) => {
  const [p] = usePosition(y, x);

  return (
    <div className={cn("Home", home.direction.name)} style={{left: p.x + "px", top: p.y + "px"}}>
      <PileView pile={home.discard} y={14} x={24} props={props}/>
      <RowView row={home.estate} y={22} x={0} props={props}/>
      <RowView row={home.factory} y={6} x={30} props={props}/>
      <RowView row={home.research} y={0} x={38} props={props}/>
    </div>
  );
};

export default observer(HomeView);
