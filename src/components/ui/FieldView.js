import React from "react";
import StarView from "./StarView";
import usePosition from "../../state/hooks/usePosition";

const FieldView = ({field, y, x}) => {
  const [p] = usePosition(y, x);

  return (
    <div className={"Field"} style={{left: p.x + "px", top: p.y + "px"}}>
      <StarView star={field.star(0, 0)}/>
      <StarView star={field.star(0, 1)}/>
      <StarView star={field.star(1, 0)}/>
      <StarView star={field.star(1, 1)}/>
      <StarView star={field.star(1, 2)}/>
      <StarView star={field.star(2, 0)}/>
      <StarView star={field.star(2, 1)}/>
    </div>
  );
};

export default FieldView;