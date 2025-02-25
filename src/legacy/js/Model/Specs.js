import Pair from "./Pair.js";
import Prop from "./Prop.js";
import Spec from "./Spec.js";
import Type from "./Type.js";
import Assert from "./Assert.js";

class Specs {
  constructor(specs) {
    this._specs = {};
    if (specs) {
      this.setSpecs(specs);
    }
  }

  get Specs()             { return this._specs; }
  get Alt()               { return this.getPair(Prop.altspecs); }
  get Name()              { return this.getValue(Prop.Name); }
  get Type()              { return Type.get(this.getValue(Prop.Type)); }
  get Role()              { return this.Type.role; }
  get Origin()            { return this.Type.origin; }
  get Race()              { return this.getValue(Prop.Race); }
  get Level()             { return this.getIntValue(Prop.Level, 0); }
  get LevelPair()         { return this.getPair(Prop.Level); }
  get Extracost()         { return this.getValue(Prop.Extracost, 0); }
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

  has(prop) {
    return Prop.assert(prop).name in this._specs;
  }

  getPair(prop) {
    return this._specs[Prop.assert(prop).name];
  }

  getSpec(prop) {
    let pair = this.getPair(prop);
    return pair ? new Spec(prop, pair) : null;
  }

  buildAltSpecs(specs) {
    specs = Specs.assert(specs);
    if (!specs.has(Prop.Race)) {
      specs.setSpec(this.getSpec(Prop.Race));
    }
    if (!specs.has(Prop.Alternative)) {
      specs.setPair(Prop.Alternative, this.LevelPair);
    }
    if (!specs.has(Prop.Name)) {
      specs.setPair(Prop.Name, Pair.text(this.buildName()));
    }
    return specs;
  }

  setSpec(spec) {
    spec = Spec.assert(spec);
    //this._specs[spec.name] = spec.pair;
    return this.setPair(spec.name, spec.pair);
  }

  setPair(name, pair) {
    if (name === Prop.specs) {
      return this.setSpecs(pair);
    }
    if (name === Prop.altspecs) {
      pair = this.buildAltSpecs(pair);
      this.setPair(Prop.Alternative, pair.LevelPair);
    }
    if (name === Prop.Level) {
      this._specs[name] = pair;
      name = Prop.Klass;
      pair = new Pair(pair.klass, pair.klass.name);
    }
    if (name === Prop.Requires) {
      name = this._specs[Prop.Require1] ? Prop.Require2 : Prop.Require1;
    }
    this._specs[name] = pair;
    return this;
  }

  setSpecs(specs) {
    if (!specs) {
      return this;
    }
    if (specs instanceof Spec) {
      return this.setSpec(specs);
    }
    if (specs instanceof Specs) {
      return this.setSpecs(specs._specs);
    }
    if (typeof(specs) === 'object') {
      for (const [name, pair] of Object.entries(specs)) {
        this.setPair(name, pair);
      }
      return this;
    }
    if (typeof(specs) === 'string') {
      return this.setSpecs(Specs.fromString(specs));
    }
    Assert.error('wrong Specs', specs);
  }

  getSpecs() {
    let specs = {};
    for (const [prop, pair] of Object.entries(this._specs)) {
      if (prop != Prop.altspecs) {
        specs[prop] = new Spec(prop, pair);
      }
    }
    return specs;
  }

  buildName() {
    return Specs.buildName(this.Race, this.Type, this.LevelPair);
  }

  static buildName(race, type, pair) {
    pair = Pair.assert(pair);
    return Specs.normalizeName(race + '-' + type + '-' + pair.short);
  }

  static normalizeName(name) {
    let ps = Specs.splitName(name);
    return ps.join('-');
  }

  static splitName(name) {
    let ps = name.split('-');
    ps = ps.map(s => Specs.capitalize(s));
    let os = [...ps];
    if (ps.length == 2) {
      let str = ps[1];
      let type = Type.assert(str.charAt(0));
      ps[1] = type.name;
      ps[2] = str.substring(1);
    }
    return ps;
  }

  static capitalize(str) {
    if (str.length == 0) return str;
    return str[0].toUpperCase() + str.substr(1);
  }

  static fromNameAndSpecs(name, specs) {
    let res = Specs.fromName(name);
    return res.setSpecs(specs);
  }

  static fromName(name) {
    if (!name.includes('-')) {
      return new Specs(Spec.text(Prop.Name, name));
    }
    let ps = Specs.splitName(name);
    return new Specs({
      [Prop.Name]:          Pair.text(name),
      [Prop.Race]:          Pair.text(ps[0]),
      [Prop.Type]:          Pair.text(ps[1]),
      [Prop.Level]:         Pair.assert(ps[2]),
    });
  }

  static fromString(specs) {
    Assert.string(specs);
    let ps = specs.split(',');
    let res = new Specs();
    ps.forEach(value => res.setSpec(Spec.fromString(value)));
    return res;
  }

  static assert(sample) {
    if (sample instanceof(Specs)) {
      return sample;
    }
    return (new Specs()).setSpecs(sample);
  }
}

export default Specs;
