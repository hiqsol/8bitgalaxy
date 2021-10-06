import React from "react";
import cn from "classnames";
import {useDrop} from "react-dnd";
import {observer} from "mobx-react-lite";
import CardView from "./CardView";
import usePosition from "../../state/hooks/usePosition";
import useHover from "../../state/hooks/useHover";

function PileView({pile, y, x}) {
  const [p] = usePosition(y, x);
  const [hoverRef, isHover] = useHover();
  const [{isOver}, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item, monitor) => {
      // const parent = getParent(item.card, 2);
      // parent.remove(item.card);
      item.card.destination.removeCard(item.card);
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
        {pile.cards.map((card, idx) => {
          let indentY = 0.2;
          let indentX = 0.2;
          if (!card.isTurned && isHover) {
            if(idx === 1) {
              indentX = pile.direction.name === "TopToBottom" ? 0.2 : 0.2;
              indentY = pile.direction.name === "LeftToRight" ? 0.2 : 0.2;
            } else if (idx === 2) {
              indentX = pile.direction.name === "TopToBottom" ? 0.5 : 0.2;
              indentY = pile.direction.name === "LeftToRight" ? 0.5 : 0.2;
            }
            else if (idx === 3) {
              indentX = pile.direction.name === "TopToBottom" ? 0.65 : 0.2;
              indentY = pile.direction.name === "LeftToRight" ? 0.65 : 0.2;
            }
            else if (idx === 4) {
              indentX = pile.direction.name === "TopToBottom" ? 0.75 : 0.2;
              indentY = pile.direction.name === "LeftToRight" ? 0.75 : 0.2;
            }
            else if (idx >= 5) {
              indentX = pile.direction.name === "TopToBottom" ? 0.8 : 0.2;
              indentY = pile.direction.name === "LeftToRight" ? 0.8 : 0.2;
            }
          }
          return (
            <CardView key={idx} card={card} y={idx * indentY} x={idx * indentX}/>
          );
        })}
        {isOver && (
          <div
            className={pile.top ? pile.top.Type : "Ship"}
            style={{
              position: "absolute",
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
