import Assert from "../Assert.js";
import CardEffect from "./CardEffect.js";

class DragCard extends CardEffect {
  constructor(card, src, dst) {
    super(card);
    this._src = src;
    this._dst = dst;
  }

  get src() { return this._src; }
  get dst() { return this._dst; }

  perform(performer) {
    performer.elem(this.dst).appendChild(performer.elem(this.card));
    performer.obj(this.src).pop(this.card);
    performer.obj(this.dst).put(this.card);
    performer.getDragger('Slot').resetDraggability(this.src);
    performer.getDragger('Slot').resetDraggability(this.dst);
    return true;
  }

  undo() {
    return new DragCard(this.card, this.dst, this.src);
  }

  toJSON() {
    return {
      '_class':     'DragCard',
      'card':       this.card.id,
      'src':        this.src.id,
      'dst':        this.dst.id,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'DragCard', "wrong class hydrating DragCard", json);
    return new DragCard(json.card, json.src, json.dst);
  }
}

export default DragCard;
