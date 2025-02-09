import Assert from "../Assert.js";

class Counter {
  constructor(count = 0) {
    this._type = '';
    this._count = count;
  }

  get zero() { return this._count === 0; }
  get type() { return this._type; }
  get count() { return this._count; }

  inc(count = 1) {
    this._count += count;
  }
  dec(count = 1) {
    if (this._count >= count) {
      this._count -= count;
    }
  }

}

export default Counter;
