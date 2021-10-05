import Prop from "./Prop.js";
import Spec from "./Spec.js";
import Action from "./Action.js";
import Assert from "./Assert.js";

class Specs {
  constructor(specs) {
    this._specs = {};
    if (specs) {
      this.setSpecs(specs);
    }
  }

  get Specs()             { return this._specs; }
  get Name()              { return this.getValue(Prop.Name); }
  get Type()              { return this.getValue(Prop.Type); }
  get Race()              { return this.getValue(Prop.Race); }
  get Level()             { return this.getValue(Prop.Level, 0); }
  get Klass()             { return this.getValue(Prop.Klass); }
  get Requires()          { return this.getValue(Prop.Requires); }
  get Defense()           { return this.getValue(Prop.Defense, this.getValue(Prop.Level)); }
  get Attack()            { return this.getValue(Prop.Attack, 0); }
  get Colonization()      { return this.getValue(Prop.Colonization, 0); }
  get Science()           { return this.getValue(Prop.Science, 0); }
  get Production()        { return this.getValue(Prop.Production, 0); }
  get Cooperation()       { return this.getValue(Prop.Cooperation); }
  get Alternative()       { return this.getValue(Prop.Alternative); }
  get Utilization()       { return this.getValue(Prop.Utilization); }

  getValue(prop, def = null) {
    let action = this.getAction(prop);
    if (action === undefined) {
      return def;
    }
    Action.assert(action);
    return action.Value;
  }

  getAction(prop) {
    return this._specs[Prop.assert(prop).name];
  }

  getSpec(prop) {
    let action = this.getAction(prop);
    return action ? new Spec(prop, action) : null;
  }

  setSpec(spec) {
    spec = Spec.assert(spec);
    this._specs[spec.name] = spec.Action;
    return this.setSpecial(spec);
  }

  setSpecial(spec) {
    if (spec.name === Prop.Level) {
      this._specs[Prop.Klass] = new Action(spec.Action.Klass, spec.Action.Klass.name);
    }
    if (spec.name === Prop.Requires) {
      let name = this._specs[Prop.Require1] ? Prop.Require2 : Prop.Require1;
      this._specs[name] = spec.Action;
    }
    return this;
  }

  setSpecs(specs) {
    console.log(specs);
    if (specs instanceof Spec) {
      return this.setSpec(specs);
    }
    if (specs instanceof Specs) {
      return this.setSpecs(specs._specs);
    }
    if (typeof(specs) === 'object') {
      for (const [name, action] of Object.entries(specs)) {
        this.setSpec(new Spec(name, action));
      }
      return this;
    }
    Assert.error('wrong Specs', specs);
  }

  getSpecs() {
    let specs = {};
    for (const [prop, action] of Object.entries(this._specs)) {
      specs[prop] = new Spec(prop, action);
    }
    return specs;
  }

  static assert(sample) {
    if (sample instanceof(Specs)) {
      return sample;
    }
    return (new Specs()).setSpecs(sample);
  }
}

export default Specs;
