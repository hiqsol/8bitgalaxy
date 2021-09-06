import React from "react";
import c from "classnames";
import {map} from "lodash";
import SpecView from "./SpecView";
import {observer} from "mobx-react-lite";

const SpecsView = ({specs, isAlternative}) => {
  const classes = c("Specs", {"Normal": !isAlternative, "Alternative": isAlternative});

  return (
    <div className={classes}>
      {map(specs.getSpecs(), (spec, i) => <SpecView key={i} spec={spec}/>)}
    </div>
  );
};

export default observer(SpecsView);
