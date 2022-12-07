import Assert from "../Assert.js";

class History {
  constructor() {
    this._effects = [];
  }

  add(move) {
    this._effects.push(move);
  }

  undo() {
    return this._effects.pop();
  }

  static assert(sample) {
    if (sample instanceof(History)) {
      return sample;
    }
    Assert.error('wrong History '+typeof(sample), sample);
  }
}

export default History;
