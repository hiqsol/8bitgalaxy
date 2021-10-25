import React, {useState} from "react";
import {useDrop} from "react-dnd";
import styled from "styled-components";
import usePosition from "../../state/hooks/usePosition";
import CardView from "./CardView";
import {observer} from "mobx-react-lite";

const View = styled.div`
  left: ${({left}) => left + "px"};
  top: ${({top}) => top + "px"};
`;

const OverView = styled.div`
  border-width: 1px;
  border-style: solid;

  &:before, &:after {
    border-width: 1px;
    border-style: solid;
  }
`;

const StarView = ({star}) => {
  const [, m] = usePosition();
  const indent = star.y % 2 ? 0 : 7.75 * m;
  const [{ isOver, canDrop}, drop] = useDrop(() =>({
    accept: "CARD",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }), [star]);

  let isActive = isOver && canDrop;
  let opacity = 1;
  if (isActive) {
    opacity = 0.5;
  }

  return (
    <View className={"Star"} left={star.x * m * 15.5 + indent} top={star.y * m * 13.4 + m}>
      <OverView className="hexagon" ref={drop} style={{opacity}}>
        <span><div className="inner lni lni-sun"/></span>
      </OverView>

      <CardViewer card={star.base(0)} y={3} x={0} slot={0} isActive={isActive} star={star}/>
      <CardViewer card={star.base(1)} y={4} x={0} slot={1} isActive={isActive} star={star}/>
      <CardViewer card={star.base(2)} y={5} x={0} slot={2} isActive={isActive} star={star}/>

      <CardViewer card={star.ship(0)} y={6} x={0} slot={0} isActive={isActive} star={star}/>
      <CardViewer card={star.ship(1)} y={6} x={1} slot={1} isActive={isActive} star={star}/>
      <CardViewer card={star.ship(2)} y={6} x={2} slot={2} isActive={isActive} star={star}/>
      <CardViewer card={star.ship(3)} y={6} x={3} slot={3} isActive={isActive} star={star}/>

      <CardViewer card={star.colony(0)} y={3} x={8} slot={0} isActive={isActive} star={star}/>
      <CardViewer card={star.colony(1)} y={4} x={8} slot={1} isActive={isActive} star={star}/>
      <CardViewer card={star.colony(2)} y={5} x={8} slot={2} isActive={isActive} star={star}/>

      <CardViewer card={star.hero(0)} y={7} x={7} slot={0} isActive={isActive} star={star}/>
      <CardViewer card={star.hero(1)} y={8} x={7} slot={1} isActive={isActive} star={star}/>
      <CardViewer card={star.hero(2)} y={9} x={7} slot={2} isActive={isActive} star={star}/>
      <CardViewer card={star.hero(3)} y={10} x={7} slot={3} isActive={isActive} star={star}/>
    </View>
  );
};

const CardViewer = observer(({card, y, x, slot, isActive, star}) => {
  if (card.isAbsent) {
    return(
      <Slot y={y} x={x} card={card} slot={slot} isActive={isActive} star={star}/>
    );
  };

  return (
    <CardView card={card} y={y+0.8} x={x+0.8}/>
  );
});

const SlotView = styled.div`
  position: absolute;
  border-width: 4px;
  border-style: solid;
  top: ${({y}) => y + "px"};
  left: ${({x}) => x + "px"};
  z-index: 2;
  border-radius: 20px;
  width: 300px;
  height: 200px;
`;

const Slot = observer(({ name, star, y, x, card, slot, isActive }) => {
  const [p] = usePosition(y, x);
  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
      accept: "CARD",
      drop: (item, monitor) => {
        let a = monitor.getItem();
        if (item.card.Type === card.Name) {
          item.card.destination.removeCard(item.card);
          star.put(item.card, slot);
        }

        return {
          place: star,
          name: name,
        };
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }), [x, y]
  );

  const isActiveSlot = isOver;
  let borderColor = "transparent";

  if (isActiveSlot) {
    borderColor = "red";
  } else if (canDrop && isActive) {
    borderColor = "white";
  };

  return (
    <SlotView ref={dropRef} className={card.Name} y={p.y - 0} x={18 + p.x} isOver={isOver} style={{ borderColor: borderColor }}/>
  );
});

export default observer(StarView);
