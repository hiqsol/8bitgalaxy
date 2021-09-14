import Prop from "./Prop.js";
import Action from "./Action.js";
import Assert from "./Assert.js";

class Spec {
  constructor(prop, action) {
    this._prop = Prop.assert(prop);
    this._action = Action.assert(action);
  }

  get Prop()              { return this._prop; }
  get name()              { return this._prop.name; }
  get Action()            { return this._action; }
  get Klass()             { return this._action.Klass; }
  get Value()             { return this._action.Value; }

  static text(prop, text) {
    return new Spec(prop, Action.text(text));
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
