import React from "react";
import c from "classnames";
import {observer} from "mobx-react-lite";

const SpecView = ({spec}) => {
  const specClasses = c("Spec", spec.name);
  const valueClasses = c("Value", spec.Klass.name);

  return (
    <div className={specClasses}>
      <div className={valueClasses}>{spec.Value ?? ""}</div>
    </div>
  );
};

const Icons = Object.freeze({
  Utilization: "spiner-solid",
  Defense: "shield",
});

function Icon(name) {
  const classes = c("lni" + Icons[name]);

  return (
    <div className={classes}/>
  );
}

function Value() {

}

export default observer(SpecView);
