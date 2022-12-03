import Direction from './Direction.js';

class Params {
  constructor(x, y, direction=null) {
    this._x = x;
    this._y = y;
    this._direction = direction ? Direction.assert(direction) : null;
  }

  get x()         { return this._x; }
  get y()         { return this._y; }
  get direction() { return this._direction; }
}

export default Params;
