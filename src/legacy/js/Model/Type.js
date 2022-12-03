import Assert from "./Assert.js";

class Type {
  constructor(name) {
    this._name = Type.assertName(name);
  }

  get name()        { return this._name; }
  get isHero()      { return this._name === Names.Hero; }
  get isShip()      { return this._name === Names.Ship; }
  get isBase()      { return this._name === Names.Base; }
  get isColony()    { return this._name === Names.Colony; }
  get isEstate()    { return this.isBase || this.isColony; }

  static get list()             { return List; }
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
    if (sample instanceof HTMLElement) {
      for (const i in List) {
        if (sample.classList.contains(i)) {
          return new Type(i);
        }
      }
    }
    if (typeof(sample) === 'object') {
      let c = sample.constructor.name;
      if (c === 'Type') {
        return new Type(sample.name);
      }
    }
    Assert.error('wrong Type '+typeof(sample), sample);
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

const List = Object.freeze({
  Hero:   'Hero',
  Base:   'Base',
  Ship:   'Ship',
  Colony: 'Colony',
})

export default Type;
