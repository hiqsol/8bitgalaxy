import Direction from './Direction.js';
import Assert from '../Model/Assert.js';

class Params {
  constructor(x, y, direction=null) {
    this.x = x;
    this.y = y;
    this.id = undefined;
    this.direction = direction;
  }

  get x()         { return this._x; }
  get y()         { return this._y; }
  get id()        { return this._id; }
  get direction() { return this._direction; }

  set x(value)    { this._x = value; }
  set y(value)    { this._y = value; }
  set id(value)   { this._id = value; }
  set direction(value) {
    this._direction = value ? Direction.assert(value) : null;
  }

  static isAlternative() {
    let res = new Params(0, 0);
    res.isAlternative = true;
    return res;
  }
  static empty() {
    return new Params(null, null);
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
