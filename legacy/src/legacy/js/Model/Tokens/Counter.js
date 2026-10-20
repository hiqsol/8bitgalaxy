import Assert from "../Assert.js";

class Counter {
  constructor(parent, type, count = 0) {
    this._parent = parent;
    this._type = type;
    this._id = parent.id + '.counter' + type;
    this._count = count;
  }

  toJSON() {
    return {
      '_class':     'Counter',
      'type':       this._type,
      'count':      this._count,
    }
  }

  static fromJSON(json, parent) {
    Assert.assert(json._class == 'Counter', "wrong class hydrating Counter", json);
    return new Counter(parent, json.count);
  }

  get id() { return this._id; }
  get zero() { return this._count === 0; }
  get type() { return this._type; }
  get count() { return this._count; }
  get parent() { return this._parent; }

  inc(count = 1) {
    this._count += count;
    if (this._count < 0) {
      this._count = 0;
    }
  }
  dec(count = 1) {
    this.inc(0 - count);
  }
}

export default Counter;
