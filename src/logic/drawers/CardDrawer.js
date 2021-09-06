import React, {useRef} from "react";
import c from "classnames";
import Drawer from "./Drawer.js";

export const ReactCardDrawer = function (props) {
  let m = this.m;
  const {obj: card, x, y} = props;
  const left = (x * m) + "px";
  const top = (y * m) + "px";

  return (
    <div className="Card" style={{left: left, top: top}}>
      <div className="Image">
        <div className="Klass lni"/>
      </div>
      <div className="Name">
        <div className="value">{card.Name}</div>
      </div>
    </div>
  );
};

class CardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, card, y, x) {
    let e = this._drawer.importNode(parent, this.fragment, ".Card");
    let m = this._drawer.m;
    e.style.left = (20 + x * m) + "px";
    e.style.top = (10 + y * m) + "px";
    e.classList.add(card.visibility);
    e.classList.add(card.Type ?? "Ship");
    e.classList.add(card.Race ?? "Neutral");
    e.classList.add(card.visibility);
    if (card.isVisible) {
      this.drawImage(e, card.Specs);
      this._drawer.draw(e, card.Specs);
      if (!card.isInserted && card.Alternative) {
        this._drawer.draw(e, card.Alternative, true);
      }
    }
    e.querySelector(".Name .Value").innerHTML = card.Name;
    return e;
  }

  drawImage(e, specs) {
    let i = e.querySelector(".Image .Klass.lni");
    if (i) {
      i.classList.add("lni-" + this.type2image(specs.Type));
    }
  }

  type2image(type) {
    return TypeImages[type.toLowerCase()];
  }

  race2image(race) {
    return RaceImages[race.toLowerCase()];
  }

  get fragment() {
    return this._drawer.getFragment(HTML);
  }
}

const HTML = `
  <div class="Card">
    <div class="Image"><div class="Klass lni"></div></div>
    <div class="Name"><div class="value">Name</div></div>
  </div>
`;

export default CardDrawer;
