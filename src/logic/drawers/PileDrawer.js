import React, {useRef} from "react";
import c from "classnames";
// import Drawer from "./Drawer.js";
import ReactDrawer from "./ReactDrawer.js";

export const ReactPileDrawer = function (props) {
  let m = this.m;
  const {obj: pile, x, y, children} = props;
  const left = (x * m) + "px";
  const top = (y * m) + "px";

  return (
    <div className={c("Pile", pile.direction.name)} style={{left: left, top: top}}>
      {children}
    </div>
  );
};

class PileDrawer {
  constructor(drawer) {
    // this._drawer = Drawer.assert(drawer);
    this._drawer = ReactDrawer.assert(drawer);
  }

  draw(parent, pile, y, x) {
    let m = this._drawer.m;
    // let e = this.importNode(parent, ".Pile");
    const left = (x * m) + "px";
    const top = (y * m) + "px";
    // const cards = this.drawCards(e, pile);
    const cards = this.drawCards(null, pile);

    // return e;
    return (
      <div className={c("Pile", pile.direction.name)} style={{left: left, top: top}}>
        {cards}
      </div>
    );
  }

  drawCards(parent, pile) {
    const cards = [];
    let size = pile.size ? pile.size : 1;
    for (let i = 0; i < size; i++) {
      cards.push(this._drawer.draw(parent, pile.get(i), i * 0.2, i * 0.2));
    }

    return cards;
  }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment() {
    return this._drawer.getFragment(HTML);
  }
}

const HTML = `
    <div class="Pile"></div>
`;

export default PileDrawer;
