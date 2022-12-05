import Pair from "./Pair.js";
import Prop from "./Prop.js";
import Assert from "./Assert.js";

class Spec {
  constructor(prop, pair) {
    this._prop = Prop.assert(prop);
    this._pair = Pair.assert(pair);
  }

  get prop()              { return this._prop; }
  get name()              { return this._prop.name; }
  get pair()              { return this._pair; }
  get klass()             { return this._pair.klass; }
  get value()             { return this._pair.value; }

  static text(prop, text) {
    return new Spec(prop, Pair.text(text));
  }

  static assert(sample) {
    if (sample instanceof(Spec)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Spec.text(sample);
    }
    Assert.error('not a Spec', sample);
  }
}

export default Spec;
