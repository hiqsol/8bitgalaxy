import React from "react";
import StarView from "./StarView";
import usePosition from "../../state/hooks/usePosition";
import {observer} from "mobx-react-lite";

const FieldView = ({store, y, x}) => {
  const [p] = usePosition(y, x);

  return (
    <div className={"Field"} style={{left: p.x + "px", top: p.y + "px"}}>
      <StarView store={store.star(0, 0)}/>
      <StarView store={store.star(0, 1)}/>
      <StarView store={store.star(1, 0)}/>
      <StarView store={store.star(1, 1)}/>
      <StarView store={store.star(1, 2)}/>
      <StarView store={store.star(2, 0)}/>
      <StarView store={store.star(2, 1)}/>
    </div>
  );
};

export default observer(FieldView);
