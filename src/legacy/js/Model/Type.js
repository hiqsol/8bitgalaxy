import Role from "./Role.js";
import Assert from "./Assert.js";

class Type {
  constructor(name) {
    this._name = Type.assertName(name);
    this._role = Type.type2role(this._name);
  }

  toString()        { return this._name; }
  toLowerCase()     { return this._name.toLowerCase(); }

  static get(name)  { return Objects[Type.assertName(name)]; }
  equals(type)      { return this._name === Type.assertName(type); }

  get name()        { return this._name; }
  get role()        { return this._role; }
  get isHero()      { return this._name === Names.Hero; }
  get isShip()      { return this._name === Names.Ship; }
  get isBase()      { return this._name === Names.Base; }
  get isColony()    { return this._name === Names.Colony; }
  get isEvent()     { return this._name === Names.Event; }
  get isTool()      { return this._name === Names.Tool; }
  get isUnit()      { return this._role.isUnit; }
  get isActor()     { return this._role.isActor; }
  get isStructure() { return this._role.isStructure; }

  static type2role(name) {
    return Role.get(Roles[Type.assertName(name)]);
  }

  static get list()             { return List; }
  static get Names()            { return Names; }
  static get Hero()             { return Names.Hero; }
  static get Base()             { return Names.Base; }
  static get Ship()             { return Names.Ship; }
  static get Colony()           { return Names.Colony; }
  static get Event()            { return Names.Event; }
  static get Tool()             { return Names.Tool; }

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
      Assert.error(`wrong Type given '${name}'`, name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error(`wrong Type name given '${name}'`, name);
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  H:      'Hero',
  B:      'Base',
  S:      'Ship',
  C:      'Colony',
  E:      'Event',
  T:      'Tool',
  Hero:   'Hero',
  Base:   'Base',
  Ship:   'Ship',
  Colo:   'Colony',
  Colony: 'Colony',
  Event:  'Event',
  Tool:   'Tool',
})

const List = Object.freeze({
  Hero:   'Hero',
  Base:   'Base',
  Ship:   'Ship',
  Colony: 'Colony',
  Event:  'Event',
  Tool:   'Tool',
})

const Roles = Object.freeze({
  Hero:   Role.Unit,
  Base:   Role.Structure,
  Ship:   Role.Unit,
  Colony: Role.Structure,
  Event:  Role.Unit,
  Tool:   Role.Unit,
})

const Objects = Object.freeze({
  Hero:   new Type(Names.Hero),
  Base:   new Type(Names.Base),
  Ship:   new Type(Names.Ship),
  Colony: new Type(Names.Colony),
  Event:  new Type(Names.Event),
  Tool:   new Type(Names.Tool),
})

export default Type;
