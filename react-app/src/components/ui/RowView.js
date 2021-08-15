import React from "react";
import usePosition from "../../state/hooks/usePosition";
import cn from "classnames";
import {map} from "lodash";
import PileView from "./PileView";
import {observer} from "mobx-react-lite";

const RowView = ({store, y, x}) => {
    const row = store;
    const [p] = usePosition(y, x);

    return (
      <div className={cn("Row", row.direction.name)} style={{left: p.x + "px", top: p.y + "px"}}>
        {map(row.piles, (pile, i) => <PileView
          key={i}
          store={row.pile(row.size - i - 1)}
          y={i * row.direction.yStep * 6}
          x={i * row.direction.xStep * 6}
        />)}
      </div>
    );
  }
;

export default observer(RowView);
