import Effect from "./Effect.js";
import Card from "../Card.js";
import Assert from "../Assert.js";

class BulkEffect extends Effect {
  constructor(effects) {
    super();
    this._effects = Assert.arrayOf(effects, Effect);
  }

  get effects() { return this._effects; }

  undo() {
    let list = [];
    for (const ef of this.effects) {
      list.unshift(ef.undo());
    }
    return new BulkEffect(list);
  }

  static assert(sample) {
    if (sample instanceof(BulkEffect)) {
      return sample;
    }
    Assert.error('wrong BulkEffect '+typeof(sample), sample);
  }
}

export default BulkEffect;
