import Card from "./Card.js";
import Direction from "./Direction.js";

class Pile {
  constructor(align) {
    this._align = Direction.assert(align);
    this._items = [];
  }

  get align() { return this._align.name; }
  get size()  { return this._items.length; }
  get top()   { return this._items[this.size-1]; }

  put(card) {
    this._items.push(Card.assert(card));
  }
}

export default Pile;
