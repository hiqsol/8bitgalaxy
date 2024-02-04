import Assert from "./Assert.js";

class Type {
  constructor(name) {
    this._name = Type.assertName(name);
  }

  toString()        { return this._name; }
  toLowerCase()     { return this._name.toLowerCase(); }

  static get(name)  { return Objects[Type.assertName(name)]; }
  equals(type)      { return this._name === Type.assertName(type); }

  get name()        { return this._name; }
  get isHero()      { return this._name === Names.Hero; }
  get isShip()      { return this._name === Names.Ship; }
  get isBase()      { return this._name === Names.Base; }
  get isColony()    { return this._name === Names.Colony; }
  get isActor()     { return this.isHero || this.isShip; }
  get isStructure() { return this.isBase || this.isColony; }

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
    if (name instanceof(Type)) {
      return name.name;
    }
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

const Objects = Object.freeze({
  Hero:   new Type(Names.Hero),
  Base:   new Type(Names.Base),
  Ship:   new Type(Names.Ship),
  Colony: new Type(Names.Colony),
})

export default Type;
