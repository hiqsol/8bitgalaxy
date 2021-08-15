import React from "react";
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
  border-color: ${({isOver}) => isOver ? "red" : "transparent"};
  border-width: 1px;
  border-style: solid;

  &:before, &:after {
    border-color: ${({isOver}) => isOver ? "red" : "transparent"};
    border-width: 1px;
    border-style: solid;
  }
`;

const StarView = ({store}) => {
  const [, m] = usePosition();
  const star = store;
  const indent = star.y % 2 ? 0 : 7.75 * m;
  const [{isOver}, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item, monitor) => {
      // let a = monitor.getItem();
      // const parent = getParent(item.card, 2);
      // parent.remove(item.card);
      // debugger
      // star.put(item.card, name);

      return {
        place: star,
      };
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [star.x, star.y]);

  return (
    <View ref={dropRef} className={"Star"} left={star.x * m * 15.5 + indent} top={star.y * m * 13.4 + m}>
      <OverView className="hexagon" isOver={isOver}>
        <span><div className="inner lni lni-sun"/></span>
      </OverView>

      <CardViewer card={star.base(0)} y={3} x={0}/>
      <CardViewer card={star.base(1)} y={4} x={0}/>
      <CardViewer card={star.base(2)} y={5} x={0}/>

      <CardViewer card={star.ship(0)} y={6} x={0}/>
      <CardViewer card={star.ship(1)} y={6} x={1}/>
      <CardViewer card={star.ship(2)} y={6} x={2}/>
      <CardViewer card={star.ship(3)} y={6} x={2}/>

      <CardViewer card={star.colony(0)} y={3} x={8}/>
      <CardViewer card={star.colony(1)} y={4} x={8}/>
      <CardViewer card={star.colony(2)} y={5} x={8}/>

      <CardViewer card={star.hero(0)} y={7} x={7}/>
      <CardViewer card={star.hero(1)} y={8} x={7}/>
      <CardViewer card={star.hero(2)} y={9} x={7}/>
      <CardViewer card={star.hero(3)} y={10} x={7}/>
    </View>
  );
};

const CardViewer = ({card, y, x}) => {
  if (card.isAbsent) {
    return "";
  }

  return (
    <CardView store={card} y={y} x={x}/>
  );
};

// const SlotView = styled.div`
//   position: absolute;
//   border-width: 2px;
//   border-style: solid;
//   border-color: ${({isOver}) => isOver ? "red" : "transparent"};
//   top: ${({y}) => y + "px"};
//   left: ${({x}) => x + "px"};
//   z-index: 2;
//   border-radius: 20px;
// `;
//
// const Slot = ({name, star, y, x}) => {
//   const [p] = usePosition(y, x);
//   const [{isOver}, dropRef] = useDrop(() => ({
//     accept: "CARD",
//     drop: (item, monitor) => {
//       let a = monitor.getItem();
//       // const parent = getParent(item.card, 2);
//       // parent.remove(item.card);
//       // debugger
//       // star.put(item.card, name);
//
//       return {
//         place: star,
//         name: name,
//       };
//     },
//     collect: monitor => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }), [x, y]);
//
//   return (
//     <SlotView ref={dropRef} className={name} y={p.y - 94} x={18 + p.x} isOver={isOver}/>
//   );
// };

export default observer(StarView);
