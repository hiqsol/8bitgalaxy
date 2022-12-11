import CardEffect from "./CardEffect.js";

class DragCard extends CardEffect {
  constructor(card, src, dst) {
    super(card);
    this._src = src;
    this._dst = dst;
  }

  get src()         { return this._src; }
  get dst()         { return this._dst; }

  undo() {
    return new DragCard(this.card, this.dst, this.src);
  }
}

export default DragCard;
