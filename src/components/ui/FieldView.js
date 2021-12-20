import React from "react";
import StarView from "./StarView";
import usePosition from "../../state/hooks/usePosition";
import {observer} from "mobx-react-lite";

const FieldView = ({field, y, x, props}) => {
  const [p] = usePosition(y, x);

  return (
    <div className={"Field"} style={{left: p.x + "px", top: p.y + "px"}}>
      <StarView star={field.star(0, 0)} props={props}/>
      <StarView star={field.star(0, 1)} props={props}/>
      <StarView star={field.star(1, 0)} props={props}/>
      <StarView star={field.star(1, 1)} props={props}/>
      <StarView star={field.star(1, 2)} props={props}/>
      <StarView star={field.star(2, 0)} props={props}/>
      <StarView star={field.star(2, 1)} props={props}/>
    </div>
  );
};

export default observer(FieldView);
