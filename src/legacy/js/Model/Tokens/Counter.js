import Assert from "../Assert.js";

class Counter {
  constructor(count = 1) {
    this._count = count;
  }

  get type() { return this._type; }
  get count() { return this._count; }

  inc(count = 1) {
    Assert.that(count > 0);
    this._count += count;
  }
  dec(count = 1) {
    Assert.that(count > 0);
    this._count -= count;
  }

}

export default Counter;
