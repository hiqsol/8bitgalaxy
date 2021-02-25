import Pile from "./Pile.js";
import Direction from "./Direction.js";

class Row {
  constructor(direction, size) {
    this._direction = Direction.assert(direction);
    this._size = size;
    this._piles = [];
    this.initPiles();
  }

  initPiles() {
    for (let i=0;i<this.size;i++) {
      this._piles.push(new Pile(this.direction.counterpart));
    }
  }

  get direction() { return this._direction; }
  get size()      { return this._size; }
  get piles()     { return this._piles; }

  pile(no) { return this.piles[this.assertNo(no)]; }

  assertNo(no) {
    if (no<0 || no>=this.size) {
      throw new Error('wrong pile no: ' + no);
    }
    return no;
  }
}

export default Row;
