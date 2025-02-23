import Pair from "./Pair.js";
import Prop from "./Prop.js";
import Klass from "./Klass.js";
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

  static fromString(spec) {
    Assert.string(spec);
    let prefix = spec.charAt(0).toLowerCase();
    let pair = Pair.assert(spec.substring(1, 3));
    if (spec.length === 2) {
      pair = Pair.assert(spec);
      return new Spec(Prop.Power, pair);
    }
    if (spec.length > 4) {
      let k = spec.substring(2, 3);
      let klass = new Klass(k);
      let text = spec.substring(4);
      pair = new Pair(klass, text);
    }
    let prop = Prop.fromPrefix(prefix);
    if (prop) {
      return new Spec(prop, pair);
    }
    Assert.error(`wrong spec ${spec}`, spec);
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
