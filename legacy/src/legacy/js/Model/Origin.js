import Assert from "./Assert.js";

class Origin {
  constructor(name) {
    this._name = Origin.assertName(name);
  }

  toString()              { return this._name; }
  toLowerCase()           { return this._name.toLowerCase(); }

  static get(name)        { return Objects[Origin.assertName(name)]; }
  equals(type)            { return this._name === Origin.assertName(type); }

  get name()              { return this._name; }
  get isSocial()          { return this._name === Names.Social; }
  get isIndustrial()      { return this._name === Names.Industrial; }

  static get list()       { return List; }
  static get Names()      { return Names; }
  static get Social()     { return Names.Social; }
  static get Industrial() { return Names.Industrial; }

  static assert(sample) {
    if (sample instanceof(Origin)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Origin.get(sample);
    }
    if (sample instanceof HTMLElement) {
      for (const i in List) {
        if (sample.classList.contains(i)) {
          return new Origin(i);
        }
      }
    }
    if (typeof(sample) === 'object') {
      let c = sample.constructor.name;
      if (c === 'Origin') {
        return new Origin(sample.name);
      }
    }
    Assert.error(`wrong Origin '${sample}'`, sample);
  }

  static assertName(name) {
    if (name instanceof(Origin)) {
      return name.name;
    }
    if (typeof(name) !== 'string') {
      Assert.error(`wrong Origin given '${name}'`, name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error(`wrong Origin name given '${name}'`, name);
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  I:          'Industrial',
  S:          'Social',
  Industrial: 'Industrial',
  Social:     'Social',
})

const List = Object.freeze({
  Industrial: 'Industrial',
  Social:     'Social',
})

const Objects = Object.freeze({
  Industrial: new Origin(Names.Industrial),
  Social:     new Origin(Names.Social),
})

export default Origin;
