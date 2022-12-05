import Specs from "./Specs.js";
import Klass from "./Klass.js";
import Assert from "./Assert.js";

class Pair {
  constructor(klass, value) {
    this._klass = Klass.assert(klass);
    this._value = Pair.assertValue(value);
  }

  get klass() { return this._klass; }
  get value() { return this._value; }
  get short() { return String(this.value) + this.klass.short; }

  dec(num = 1) {
    return new Pair(this.klass, this.value > 1 ? (this.value - num) : 1);
  }

  static text(text) {
    return new Pair(Klass.Attack, text);
  }

  static assertValue(value) {
    /// TODO validation ??
    return value;
  }

  static assert(sample) {
    if (sample instanceof (Pair)) {
      return sample;
    }
    if (typeof (sample) === "string") {
      return Pair.fromString(sample);
    }
    Assert.error("not a Pair", sample);
  }

  static fromString(name) {
    Assert.string(name);
    if (name.length !== 2) {
      return Pair.text(name);
    }
    let value = name.charAt(0).toLowerCase();
    let klass = name.charAt(1).toLowerCase();
    if (isNaN(value)) {
      [klass, value] = [value, klass];
    }
    return new Pair(klass, value);
  }
}

export default Pair;
