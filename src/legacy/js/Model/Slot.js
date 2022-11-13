import Type from "./Type.js";

class Slot {
  constructor(card, type, x, y) {
    this._card = card;
    this._type = Type.assert(type);
    this._x = x;
    this._y = y;
  }

  get card()              { return this._card; }
  get type()              { return this._type; }
  get x()                 { return this._x; }
  get y()                 { return this._y; }
}

export default Slot;
