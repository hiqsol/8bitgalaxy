import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";
import { useDrag } from "react-dnd";
import SpecsView from "./SpecsView";
import usePosition from "../../state/hooks/usePosition";
import CardBoxView from "../CardBox/CardBoxView";
import useCardBox from "../../state/hooks/useCardBox";

const CardView = ({ card, y, x }) => {
  const addCardBox = useCardBox();
  const [p] = usePosition(y, x);
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: {
      card: card,
    },
    end(item, monitor) {
      // const dropResult = monitor.getDropResult();
      // if (!dropResult || !hasParent(item.card)) {
      //   return undefined;
      // }
      // debugger
      // const parent = getParent(item.card, 2);
      // getParent(item.card, 2).remove(item.card);
      // if (getType(parent).name === "Pile") {
      //   parent.remove(item.card);
      // }
      // if (getType(parent).name === "Star") {
      //   parent.remove(item.card);
      // }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const handleTurnOver = () => {
    card.turnOver();
  };
  const cardClasses = cn(
    "Card",
    card.visibility,
    card.Type ?? "Ship",
    card.Race ?? "Neutral"
  );
  const imageClasses = cn(
    "Klass",
    "lni",
    !card.isAbsent && !card.isTurned
      ? "lni-" + type2image(card.Specs.Type)
      : null
  );
  if (card.isAbsent) {
    return (
      <div className={cardClasses}>
        <div className="Name">
          <div className="Value">{card.Name}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseOver={addCardBox.mouseOverCard}
      onMouseLeave={addCardBox.mouseLeaveCard}
      ref={dragRef}
      className={cardClasses}
      onClick={handleTurnOver.bind(this)}
      style={{
        left: 20 + p.x + "px",
        top: 10 + p.y + "px",
        border: isDragging ? "2px solid red" : "none",
      }}
    >
      {addCardBox.isFocusedCard && <CardBoxView card={card} />}

      <div className="Image">
        <div className={imageClasses} />
      </div>
      <div className="Name">
        <div className="Value">{card.Name}</div>
      </div>
      {card.isVisible ? <Specs card={card} /> : ""}
    </div>
  );
};

function Specs({ card }) {
  return (
    <>
      <SpecsView specs={card.Specs} />
      {!card.isInserted && card.Alternative ? (
        <SpecsView specs={card.Alternative} isAlternative={true} />
      ) : (
        ""
      )}
    </>
  );
}

function type2image(type) {
  return TypeImages[type.toLowerCase()];
}

function race2image(race) {
  return RaceImages[race.toLowerCase()];
}

const TypeImages = Object.freeze({
  hero: "user",
  ship: "rocket",
  base: "codepen",
  colony: "world",
  tech: "react",
});

const RaceImages = Object.freeze({
  plasma: "emoji-smile",
  giant: "bricks",
  ai: "rook",
  human: "world",
});

export default observer(CardView);
