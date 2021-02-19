import Item from "./Item.js";

class Pile {
  constructor(name) {
    this._name = name;
    this._items = [];
  }

  get name()  { return this._name; }
  get size()  { return this._items.length; }
  get top()   { return this._items[this.size-1]; }

  putOnTop(item) {
    Item.assert(item);
    this._items.push(item);
  }

}

export default Pile;
