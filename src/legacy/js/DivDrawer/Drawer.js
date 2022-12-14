import Assert from "../Model/Assert.js";
import Type from "../Model/Type.js";
import Game from "../Game.js";
import Params from "./Params.js";
import Template from "./Template.js";
import Performer from "./Performer.js";
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
import SlotDragger from "./SlotDragger.js";
import GameDragger from "./GameDragger.js";

class Drawer {
  constructor(game) {
    this._game = Game.assert(game);
    this._tpl = new Template();
    this._performer = new Performer(this);
    this._m = 50;
    this._objs = {};
    this._drawers = {};
    this._draggers = {};
  }

  get m()       { return this._m; }
  get tpl()     { return this._tpl; }
  get game()    { return this._game; }
  get history() { return this._game.history; }
  get performer() { return this._performer; }

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
    if (params === null) {
      params = Params.empty();
    }
    if (obj.id) {
      this._objs[obj.id] = obj;
    }
    return this.getDrawer(obj).draw(parent, obj, params);
  }

  getDrawer(obj) {
    let name = typeof obj === "string" ? obj : obj.constructor.name;
    let drawer = Drawers[name] ?? null;
    if (!drawer) {
      Assert.error("no drawer for " + name);
    }
    if (this._drawers[drawer] === undefined) {
      this._drawers[drawer] = new drawer(this);
    }
    return this._drawers[drawer];
  }

  undo(effect) {
    if (!effect) return;
    let ef = effect.undo();
    this.performer.perform(ef);
  }

  addDragEvents(e, obj) {
    this.getDragger(obj).addDragEvents(e, obj);
  }

  getDragger(obj) {
    let name = typeof obj === "string" ? obj : obj.constructor.name;
    let dragger = Draggers[name] ?? null;
    if (!dragger) {
      Assert.error("no dragger for " + name);
    }
    if (this._draggers[dragger] === undefined) {
      this._draggers[dragger] = new dragger(this);
    }
    return this._draggers[dragger];
  }

  obj(elem) { return this._objs[this.getId(elem)]; }
  elem(obj) { return document.getElementById(this.getId(obj)); }
  getId(obj) {
    const type = typeof obj;
    if (type === "string") {
      return obj;
    }
    if (type === "object") {
      return obj.id;
    }
    Assert.error("no id for " + type, obj);
  }

  static assert(sample) {
    if (sample instanceof (Drawer)) {
      return sample;
    }
    Assert.error("not a Drawer", sample);
  }
}

const Draggers = Object.freeze({
  Game: GameDragger,
  Slot: SlotDragger,
  Pile: SlotDragger,
});

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

  TurnCard:   CardDrawer,
  AlterCard:  CardDrawer,
});

export default Drawer;
