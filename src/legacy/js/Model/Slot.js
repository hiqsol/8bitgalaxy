import Direction from "./Direction.js";

class Slot {
  constructor(card, direction, x, y) {
    this._card = card;
    this._direction = Direction.assert(direction);
    this._x = x;
    this._y = y;
  }

  get card()              { return this._card; }
  get direction()         { return this._direction; }
  get x()                 { return this._x; }
  get y()                 { return this._y; }
}

export default Slot;
