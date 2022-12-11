import CardEffect from "./CardEffect.js";

class DragCard extends CardEffect {
  constructor(card, src, dst) {
    super(card);
    this._src = src;
    this._dst = dst;
  }

  get src()         { return this._src; }
  get dst()         { return this._dst; }
}

export default DragCard;
