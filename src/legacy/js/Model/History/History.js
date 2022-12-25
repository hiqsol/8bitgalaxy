import Assert from "../Assert.js";
import BulkEffect from "./BulkEffect.js";

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

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'effects':    this._effects,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'History', "wrong class hydrating History", json);
    let history = new History();
    history._effects = BulkEffect.effectsFromJSON(json.effects);
    return history;
  }

  static assert(sample) {
    if (sample instanceof(History)) {
      return sample;
    }
    Assert.error('wrong History '+typeof(sample), sample);
  }
}

export default History;
