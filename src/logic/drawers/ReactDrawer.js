import React from "react";
import ReactDOM from "react-dom";

import Assert from "../models/Assert.js";
import Template from "./Template.js";
import RowDrawer from "./RowDrawer.js";
import GameDrawer from "./GameDrawer.js";
import HomeDrawer from "./HomeDrawer.js";
import PileDrawer, {ReactPileDrawer} from "./PileDrawer.js";
import CardDrawer, {ReactCardDrawer} from "./CardDrawer.js";
import StarDrawer from "./StarDrawer.js";
import SpecDrawer from "./SpecDrawer.js";
import BoardDrawer from "./BoardDrawer.js";
import SpecsDrawer from "./SpecsDrawer.js";
import FieldDrawer from "./FieldDrawer.js";

class ReactDrawer {
  constructor() {
    this._m = 50;
    this._tpl = new Template();
    this._drawers = {};
  }

  get m() {
    return this._m;
  }

  get tpl() {
    return this._tpl;
  }

  draw(Parent, obj, y, x) {
    // if (parent === null) {
      // parent = document.querySelector("#root");
      // parent = React.createElement('div', {});
    // }
    if (typeof obj !== "object") {
      Assert.error("not an object", obj);
    }
    let cname = obj.constructor.name;

    let Child = this.getDrawer(cname)({obj, y, x});
    if (Parent === null) {
      return Child;
    }
    let e = React.cloneElement(Parent, {children: Parent.props.children ? Parent.props.children.concat(Child) : [Child]});

    return e;
    // ReactDOM.render(r, parent);
    // let a = this.getDrawer(cname)({obj: obj, y: y, x: x});
    // return <parent>
    //  <a/>
    // </parent>;
  }

  getDrawer(name) {
    if (this._drawers[name] === undefined) {
      this._drawers[name] = this.buildDrawer(name);
    }
    return this._drawers[name].bind(this);
  }

  buildDrawer(name) {
    const drws = {
      Pile: ReactPileDrawer,
      Card: ReactCardDrawer,
    };
    const drawer = drws[name] ?? null;
    if (!drawer) {
      Assert.error("no drawer for " + name);
    }
    // return new drawer(this);
    return drawer;
  }

  importNode(parent, fragment, selector) {
    let n = document.importNode(fragment, true);
    let e = n.querySelector(selector);
    parent.appendChild(n);
    return e;
  }

  getFragment(name, html) {
    return this.tpl.getFragment(name, html);
  }

  static assert(sample) {
    if (sample instanceof (ReactDrawer)) {
      return sample;
    }
    Assert.error("not a Drawer", sample);
  }
}

const Drawers = {
  Card: CardDrawer,
  Game: GameDrawer,
  Home: HomeDrawer,
  Pile: PileDrawer,
  Row: RowDrawer,
  Star: StarDrawer,
  Spec: SpecDrawer,
  Board: BoardDrawer,
  Specs: SpecsDrawer,
  Field: FieldDrawer,
};

export default ReactDrawer;