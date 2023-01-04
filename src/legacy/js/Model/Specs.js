import Prop from "./Prop.js";
import Spec from "./Spec.js";
import Pair from "./Pair.js";
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
  get Level()             { return this.getIntValue(Prop.Level, 0); }
  get Klass()             { return this.getValue(Prop.Klass); }
  get Requires()          { return this.getValue(Prop.Requires); }
  get Attack()            { return this.getValue(Prop.Attack, 0); }
  get Colonization()      { return this.getValue(Prop.Colonization, 0); }
  get Science()           { return this.getValue(Prop.Science, 0); }
  get Production()        { return this.getValue(Prop.Production, 0); }
  get Power()             { return this.getPair(Prop.Power); }
  get Cooperation()       { return this.getPair(Prop.Cooperation); }
  get Alternative()       { return this.getPair(Prop.Alternative); }

  getIntValue(prop, def = 0) {
    return Math.floor(this.getValue(prop, def));
  }
  getValue(prop, def = null) {
    let pair = this.getPair(prop);
    if (pair === undefined) {
      return def;
    }
    Pair.assert(pair);
    return pair.value;
  }

  getPair(prop) {
    return this._specs[Prop.assert(prop).name];
  }

  getSpec(prop) {
    let pair = this.getPair(prop);
    return pair ? new Spec(prop, pair) : null;
  }

  setSpec(spec) {
    spec = Spec.assert(spec);
    this._specs[spec.name] = spec.pair;
    return this.setSpecial(spec);
  }

  setSpecial(spec) {
    if (spec.name === Prop.Level) {
      this._specs[Prop.Klass] = new Pair(spec.klass, spec.klass.name);
    }
    if (spec.name === Prop.Requires) {
      let name = this._specs[Prop.Require1] ? Prop.Require2 : Prop.Require1;
      this._specs[name] = spec.pair;
    }
    return this;
  }

  setSpecs(specs) {
    //console.log(specs);
    if (specs instanceof Spec) {
      return this.setSpec(specs);
    }
    if (specs instanceof Specs) {
      return this.setSpecs(specs._specs);
    }
    if (typeof(specs) === 'object') {
      for (const [name, pair] of Object.entries(specs)) {
        this.setSpec(new Spec(name, pair));
      }
      return this;
    }
    Assert.error('wrong Specs', specs);
  }

  getSpecs() {
    let specs = {};
    for (const [prop, pair] of Object.entries(this._specs)) {
      specs[prop] = new Spec(prop, pair);
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
