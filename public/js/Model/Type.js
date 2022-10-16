import Assert from "./Assert.js";

class Type {
  constructor(name) {
    this._name = Type.assertName(name);
  }

  get name() { return this._name; }

  static get Names()            { return Names; }
  static get Hero()             { return Names.Hero; }
  static get Base()             { return Names.Base; }
  static get Ship()             { return Names.Ship; }
  static get Colony()           { return Names.Colony; }

  static assert(sample) {
    if (sample instanceof(Type)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return new Type(sample);
    }
    if (typeof(sample) === 'object') {
      let c = sample.constructor.name;
      if (c === 'Type') {
        return new Type(sample.name);
      }
    }
    Assert.error('wrong Type', sample);
  }

  static assertName(name) {
    if (typeof(name) !== 'string') {
      Assert.error('wrong Type given', name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error('wrong Type name', name);
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  H:      'Hero',
  B:      'Base',
  S:      'Ship',
  C:      'Colony',
  Hero:   'Hero',
  Base:   'Base',
  Ship:   'Ship',
  Colo:   'Colony',
  Colony: 'Colony',
})

export default Type;
