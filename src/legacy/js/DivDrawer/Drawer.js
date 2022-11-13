import Assert from "../Model/Assert.js";
import Type from "../Model/Type.js";
import Template from "./Template.js";
import RowDrawer from "./RowDrawer.js";
import CardDrawer from "./CardDrawer.js";
import GameDrawer from "./GameDrawer.js";
import HomeDrawer from "./HomeDrawer.js";
import PileDrawer from "./PileDrawer.js";
import SlotDrawer from "./SlotDrawer.js";
import StarDrawer from "./StarDrawer.js";
import SpecDrawer from "./SpecDrawer.js";
import BoardDrawer from "./BoardDrawer.js";
import SpecsDrawer from "./SpecsDrawer.js";
import FieldDrawer from "./FieldDrawer.js";

class Drawer {
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

  draw(parent, obj, y, x) {
    if (obj === null) {
      return null;
    }
    if (parent === null) {
      parent = document.querySelector("body");
    }
    if (typeof obj !== "object") {
      Assert.error("not an object", obj);
    }
    let cname = obj.constructor.name;
    return this.getDrawer(cname).draw(parent, obj, y, x);
  }

  getDrawer(name) {
    if (this._drawers[name] === undefined) {
      this._drawers[name] = this.buildDrawer(name);
    }
    return this._drawers[name];
  }

  buildDrawer(name) {
    let drawer = Drawers[name] ?? null;
    if (!drawer) {
      Assert.error("no drawer for " + name);
    }
    return new drawer(this);
  }

  addDragEvents(e) {
    e.addEventListener("dragstart", (event) => {
      const id = event.dataTransfer.getData("text");
      const card = document.getElementById(id);
      Drawer.setDraggingCard(card);
    });
    e.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (Drawer.isDroppable(event)) {
        event.currentTarget.classList.add('hover');
      }
    });
    e.addEventListener("dragleave", (event) => {
      event.currentTarget.classList.remove('hover');
    });
    e.addEventListener("drop", (event) => {
      event.currentTarget.classList.remove('hover');
      const card = Drawer.isDroppable(event);
      if (!card) {
        return false;
      }
      event.preventDefault();
      // Get the data, which is the id of the source element
      e.appendChild(card);
    });
  }

  static isDroppable(event) {
    const cl = event.currentTarget.classList;
    const id = event.dataTransfer.getData("text");
    let card;
    if (id) {
      card = document.getElementById(id);
    } else {
      card = Drawer.getDraggingCard();
    }
    const type = Type.assert(card);
    if (cl.contains('Slot')) {
      if (!cl.contains('for-' + type.name)) {
        return null;
      }
      if (event.currentTarget.childElementCount) {
        return null;
      }
    }
    return card;
  }
  static setDraggingCard(card) {
    Drawer._draggingCard = card;
  }
  static getDraggingCard(card) {
    return Drawer._draggingCard;
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
    if (sample instanceof (Drawer)) {
      return sample;
    }
    Assert.error("not a Drawer", sample);
  }
}

const Drawers = Object.freeze({
  Game: GameDrawer,
  Board: BoardDrawer,
  Home: HomeDrawer,

  Field: FieldDrawer,
  Star: StarDrawer,

  Row: RowDrawer,
  Pile: PileDrawer,
  Slot: SlotDrawer,

  Card: CardDrawer,
  Specs: SpecsDrawer,
  Spec: SpecDrawer,
});

export default Drawer;
