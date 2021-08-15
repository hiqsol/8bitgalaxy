import React from "react";
import cn from "classnames";
import {useDrop} from "react-dnd";
import {observer} from "mobx-react-lite";
import {getParent, clone} from "mobx-state-tree";
import CardView from "./CardView";
import usePosition from "../../state/hooks/usePosition";
import useHover from "../../state/hooks/useHover";

function PileView({store, y, x}) {
  const pile = store;
  const [p] = usePosition(y, x);
  const [hoverRef, isHover] = useHover();
  const [{isOver}, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item, monitor) => {
      const parent = getParent(item.card, 2);
      parent.remove(item.card);
      pile.put(item.card);

      return {
        place: pile,
      };
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [x, y]);
  const turnedCards = pile.cards.filter(card => !card.isTurned);

  return (
    <div
      ref={dropRef}
      className={cn("Pile", pile.direction.name)}
      style={{left: p.x + "px", top: p.y + "px", backgroundColor: isOver ? "red" : "inherit"}}
    >
      <div ref={hoverRef}>
        {pile.getCards.map((card, idx) => {
          let indentY = 0.2;
          let indentX = 0.2;
          if (!card.isTurned && isHover && turnedCards.length > 1) {
            indentY = pile.direction.name === "LeftToRight" ? 0.8 : 0.2;
            indentX = pile.direction.name === "TopToBottom" ? 0.8 : 0.2;
          }
          return (
            <CardView key={idx} store={card} y={idx * indentY} x={idx * indentX}/>
          );
        })}
        {isOver && (
          <div
            className={pile.top ? pile.top.Type : "Ship"}
            style={{
              position: "absolute",
              // top: 0,
              // left: 0,
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: "red",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default observer(PileView);