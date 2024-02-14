import Direction from './Direction.js';
import Assert from '../Model/Assert.js';

class Params {
  constructor(x=null, y=null, direction=null) {
    this._x = x;
    this._y = y;
    this._r = null;
    this._b = null;
    this._w = null;
    this._h = null;
    this._id = null;
    this._hidden = null;
    this._rotate = null;
    this._direction = direction;
    this._classList = undefined;
  }
  copy() {
    let p = new Params();
    p._x = this._x;
    p._y = this._y;
    p._r = this._r;
    p._b = this._b;
    p._w = this._w;
    p._h = this._h;
    p._id = this._id;
    p._hidden = this._hidden;
    p._rotate = this._rotate;
    p._direction = this._direction;
    p._classList = this._classList;
    return p;
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
  get hidden()    { return this._hidden; }
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
  set hidden(v)   { this._hidden = v; }
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
  hide()          { this.hidden = true; return this; }
  addRT(r, t)     { this.r += r; this.t += t; return this; }

  setClassList(classList) { this.classList = classList; return this; }
  addClass(value)     {
    if (this._classList === undefined) {
      return this.setClassList(value);
    }
    if (typeof value === 'string') {
      this._classList.push(...value.split(' '));
    } else {
      this._classList.push(...value);
    }
    return this;
  }

  static xyleft(x, y) { return new Params(x, y, Direction.LeftToRight); }
  static xytop (x, y) { return new Params(x, y, Direction.TopToBottom); }
  static hidden()     { return (new Params()).hide(); }
  static rt(r, t)     { return (new Params()).rt(r, t); }

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
