import Direction from './Direction.js';
import Assert from '../Model/Assert.js';

class Params {
  constructor(x=null, y=null, direction=null) {
    this.x = x;
    this.y = y;
    this.r = null;
    this.b = null;
    this.w = null;
    this.h = null;
    this.id = null;
    this.rotate = null;
    this.direction = direction;
  }

  get x()         { return this._x; }
  get y()         { return this._y; }
  get l()         { return this._x; }
  get t()         { return this._y; }
  get r()         { return this._r; }
  get b()         { return this._b; }
  get w()         { return this._w; }
  get h()         { return this._h; }
  get id()        { return this._id; }
  get rotate()    { return this._rotate; }
  get direction() { return this._direction; }
  get classList() { return this._classList; }

  set x(value)    { this._x = value; }
  set y(value)    { this._y = value; }
  set l(value)    { this._x = value; }
  set t(value)    { this._y = value; }
  set r(value)    { this._r = value; }
  set b(value)    { this._b = value; }
  set w(value)    { this._w = value; }
  set h(value)    { this._h = value; }
  set id(value)   { this._id = value; }
  set rotate(v)   { this._rotate = v; }
  set direction(value) {
    this._direction = value ? Direction.assert(value) : null;
    return this;
  }
  set classList(value) {
    if (typeof value === 'string') {
      this._classList = value.split(' ');
    } else {
      this._classList = value;
    }
  }

  rb(r, b)        { this.r = r; this.b = b; return this; }
  rt(r, t)        { this.r = r; this.t = t; return this; }
  wh(w, h)        { this.w = w; this.h = h; return this; }
  setRotate(v)    { this.rotate = v; return this; }

  setClassList(classList) { this.classList = classList; return this; }

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
