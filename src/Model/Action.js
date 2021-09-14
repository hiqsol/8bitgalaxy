import Specs from "./Specs.js";
import Klass from "./Klass.js";
import Assert from "./Assert.js";

class Action {
  constructor(klass, value) {
    this._klass = Klass.assert(klass);
    this._value = Action.assertValue(value);
  }

  get Klass() { return this._klass; }
  get Value() { return this._value; }
  get short() { return String(this.Value) + this.Klass.short; }

  dec(num = 1) {
    return new Action(this.Klass, this.Value>1 ? (this.Value - num) : 1);
  }

  static text(text) {
    return new Action(Klass.Attack, text);
  }

  static assertValue(value) {
    /// TODO validation ??
    return value;
  }

  static assert(sample) {
    if (sample instanceof(Action)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Action.fromString(sample);
    }
    Assert.error('not an Action', sample);
  }

  static fromString(name) {
    Assert.string(name);
    if (name.length !== 2) {
      return Action.text(name);
    }
    let value = name.charAt(0).toLowerCase();
    let klass = name.charAt(1).toLowerCase();
    if (isNaN(value)) {
      [klass, value] = [value, klass];
    }
    return new Action(klass, value)
  }
}

export default Action;
