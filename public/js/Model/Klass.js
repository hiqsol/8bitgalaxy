import Spec from "./Spec.js";

class Klass {
  constructor(name) {
    this._name = Klass.assertName(name);
  }

  get name()  { return this._name; }
  get short() { return this._name.charAt(0).toLowerCase(); }
  get [Symbol.toStringTag]() { return this._name; }

  static get Names()            { return Names; }
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
    throw new Error('not a Klass:' + typeof(sample));
  }

  static fromString(name) { return new Klass(name); }

  static _letters = {};

  static assertName(name) {
    if (typeof(name) !== 'string') {
      throw new Error('wrong Klass given: ' + typeof(name));
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Letters[name]) {
      return Letters[name]
    }
    if (Names[name]) {
      return Names[name];
    }
    throw new Error('wrong Klass name: ' + name);
  }
}

const Names = Object.freeze({
  [Spec.Attack]:        Spec.Attack,
  [Spec.Colonization]:  Spec.Colonization,
  [Spec.Science]:       Spec.Science,
  [Spec.Production]:    Spec.Production,
})

// TODO convert automatically
const Letters = Object.freeze({
  A:                    Spec.Attack,
  C:                    Spec.Colonization,
  S:                    Spec.Science,
  P:                    Spec.Production,
})

export default Klass;
