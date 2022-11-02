import Prop from "./Prop.js";
import Assert from "./Assert.js";

class Klass {
  constructor(name) {
    this._name = Klass.assertName(name);
  }

  get name()  { return this._name; }
  get short() { return this._name.charAt(0).toLowerCase(); }
  get [Symbol.toStringTag]() { return this._name; }

  static get Names()            { return Names; }
  static get Letters()          { return Letters; }
  static get Attack()           { return Names.Attack; }
  static get Colonization()     { return Names.Colonization; }
  static get Production()       { return Names.Production; }
  static get Science()          { return Names.Science; }

  static assert(sample) {
    if (sample instanceof(Klass)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Klass.fromString(sample);
    }
    Assert.error('not a Klass', sample);
  }

  static fromString(name) { return new Klass(name); }

  static _letters = {};

  static assertName(name) {
    if (typeof(name) !== 'string') {
      Assert.error('wrong Klass given', name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Letters[name]) {
      return Letters[name]
    }
    if (Names[name]) {
      return Names[name];
    }
    Assert.error('wrong Klass name', name);
  }
}

const Names = Object.freeze({
  [Prop.Attack]:        Prop.Attack,
  [Prop.Colonization]:  Prop.Colonization,
  [Prop.Science]:       Prop.Science,
  [Prop.Production]:    Prop.Production,
})

// TODO convert automatically
const Letters = Object.freeze({
  A:                    Prop.Attack,
  C:                    Prop.Colonization,
  S:                    Prop.Science,
  P:                    Prop.Production,
})

export default Klass;
