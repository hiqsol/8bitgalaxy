import Spec from "./Spec.js";
import Specs from "./Specs.js";
import Decks from "./Decks.js";
import Klass from "./Klass.js";

class Action {
  constructor(klass, value) {
    this._klass = Klass.assert(klass);
    this._value = Action.assertValue(value);
  }

  get Klass()             { return this._klass; }
  get Value()             { return this._value; }
  get short()             { return String(this.Value) + this.Klass.short; }

  static assertValue(value) {
    if (value>0 || value<9) {
      return Number(value);
    }
    throw new Error('wrong Action value: ' + value);
  }

  static assert(sample) {
    if (sample instanceof(Action)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Action.fromString(sample);
    }
    throw new Error('not an Action:' + typeof(sample));
  }

  static fromString(name) {
    let value = name.charAt(0).toLowerCase();
    let klass = name.charAt(1).toLowerCase();
    if (isNaN(value)) {
      [klass, value] = [value, klass];
    }
    return new Action(klass, value)
  }
}

export default Action;
