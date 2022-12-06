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
import SlotsDrawer from "./SlotsDrawer.js";
import SpecsDrawer from "./SpecsDrawer.js";
import FieldDrawer from "./FieldDrawer.js";
import ScoreboardDrawer from "./ScoreboardDrawer.js";

class Drawer {
  constructor() {
    this._m = 50;
    this._tpl = new Template();
    this._drawers = {};
  }

  get m()   { return this._m; }
  get tpl() { return this._tpl; }

  draw(parent, obj, params = null) {
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
    return this.getDrawer(cname).draw(parent, obj, params);
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

  addDragEvents(e, holder) {
    e.addEventListener("dragstart", (event) => {
      const id = event.dataTransfer.getData("text");
      const card = document.getElementById(id);
      Drawer.startDragging(card, holder, e);
      this.getDrawer('Game').stopDragging();
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
      const elem = Drawer.isDroppable(event);
      if (!elem) {
        return false;
      }
      event.preventDefault();
      e.appendChild(elem);
      let card = Drawer.getLosingHolder().pop(elem.id);
      holder.put(card);
      Drawer.resetDraggability(e);
    });
  }

  static isDroppable(event) {
    const cl = event.currentTarget.classList;
    const id = event.dataTransfer.getData("text");
    const elem = Drawer.getDraggingCard(id);
    const type = Type.assert(elem);
    if (!cl.contains('droppable')) return null;
    if (cl.contains('Slot')) {
      if (elem.classList.contains('Turned')) {
        if (cl.contains('for-Hero') && !cl.contains('for-Ship')) {
          return null;
        } else {
          return elem;
        }
      }
      if (!cl.contains('for-' + type.name)) {
        return null;
      }
      if (event.currentTarget.childElementCount) {
        return null;
      }
    }
    return elem;
  }
  static startDragging(card, holder, element) {
    Drawer._draggingCard = card;
    Drawer._losingHolder = holder;
    Drawer._losingElement = element;
  }
  static getDraggingCard(id) {
    if (id) {
      return document.getElementById(id);
    } else {
      return Drawer._draggingCard;
    }
  }
  static getLosingHolder() {
    return Drawer._losingHolder;
  }
  static getLosingElement() {
    return Drawer._losingElement;
  }

  static resetDraggability(pile) {
    Drawer._resetDraggability(pile);
    Drawer._resetDraggability(Drawer._losingElement);
  }
  static _resetDraggability(pile) {
    if (!pile) return;
    pile.querySelectorAll('.Card').forEach(
      (card, idx, array) => {
        card.draggable = (idx === array.length -1);
      }
    );
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
  Scoreboard: ScoreboardDrawer,
  Home: HomeDrawer,

  Field: FieldDrawer,
  Star: StarDrawer,

  Row: RowDrawer,
  Pile: PileDrawer,
  Slot: SlotDrawer,
  Slots: SlotsDrawer,

  Card: CardDrawer,
  Specs: SpecsDrawer,
  Spec: SpecDrawer,
});

export default Drawer;
