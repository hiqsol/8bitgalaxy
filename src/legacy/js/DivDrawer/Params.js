import Direction from './Direction.js';
import Assert from '../Model/Assert.js';

class Params {
  constructor(x, y, direction=null) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  get x()         { return this._x; }
  get y()         { return this._y; }
  get direction() { return this._direction; }

  set x(value) { this._x = value+0; }
  set y(value) { this._y = value+0; }
  set direction(value) {
    this._direction = value ? Direction.assert(value) : null;
  }

  static isAlternative() {
    let res = new Params(0, 0);
    res.isAlternative = true;
    return res;
  }
  static empty() {
    return new Params(0, 0);
  }

  static assert(sample) {
    if (sample instanceof(Params)) {
      return sample;
    }
    if (sample === null || sample === undefined) {
      return Params.empty();
    }
    Assert.error('not a Params', sample);
  }
}

export default Params;
