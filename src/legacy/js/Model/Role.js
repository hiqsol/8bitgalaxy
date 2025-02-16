import Assert from "./Assert.js";

class Role {
  constructor(name) {
    this._name = Role.assertName(name);
  }

  toString()        { return this._name; }
  toLowerCase()     { return this._name.toLowerCase(); }

  static get(name)  { return Objects[Role.assertName(name)]; }
  equals(type)      { return this._name === Role.assertName(type); }

  get name()        { return this._name; }
  get isUnit()      { return this._name === Names.Unit; }
  get isStructure() { return this._name === Names.Structure; }
  get isActor()     { return this.isUnit; }

  static get list()             { return List; }
  static get Names()            { return Names; }
  static get Unit()             { return Names.Unit; }
  static get Structure()        { return Names.Structure; }

  static assert(sample) {
    if (sample instanceof(Role)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Role.get(sample);
    }
    if (sample instanceof HTMLElement) {
      for (const i in List) {
        if (sample.classList.contains(i)) {
          return new Role(i);
        }
      }
    }
    if (typeof(sample) === 'object') {
      let c = sample.constructor.name;
      if (c === 'Role') {
        return new Role(sample.name);
      }
    }
    Assert.error(`wrong Role '${sample}'`, sample);
  }

  static assertName(name) {
    if (name instanceof(Role)) {
      return name.name;
    }
    if (typeof(name) !== 'string') {
      Assert.error(`wrong Role given '${name}'`, name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error(`wrong Role name given '${name}'`, name);
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  U:          'Unit',
  S:          'Structure',
  Unit:       'Unit',
  Structure:  'Structure',
})

const List = Object.freeze({
  Unit:       'Unit',
  Structure:  'Structure',
})

const Objects = Object.freeze({
  Unit:       new Role(Names.Unit),
  Structure:  new Role(Names.Structure),
})

export default Role;
