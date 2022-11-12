import Assert from "./Assert.js";

class State {
  constructor(name) {
    this._name        = name;
    this._turned      = false;
    this._altered     = false;
    this._inserted    = false;
    this.parseName(name);
  }

  parseName(name) {
    name.split('-').forEach(part => this.applyName(part));
  }

  applyName(input) {
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    name = Names[input];
    if (input && !name) {
      Assert.error('wrong state: ' + input);
    }
    if (name === Names.Turned) {
      this._turned = true;
    } else if (name === Names.Inserted) {
      this._inserted = true;
    } else if (name === Names.Altered) {
      this._alternative = true;
    }
  }

  get name()            { return this._name; }
  get isTurned()        { return this._turned; }
  get isInserted()      { return this._inserted; }
  get isAltered()       { return this._altered; }
  get isVisible()       { return !this._turned; }

  get visibility()      {
    if (this.isTurned) {
      return Names.Turned;
    }
    return Names.Visible;
  }

  static assert(sample) {
    if (sample instanceof(State)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return new State(sample);
    }
    Assert.error('not a State', sample);
  }

  static isName(name)     { return State.normalizeName(name) !== null; }

  static assertName(name) {
    let norm = State.normalizeName(name);
    if (name === null) {
      Assert.error('wrong State name', name);
    }
    return norm;
  }

  static normalizeName(name) {
    if (name === '') {
      return Names.Normal;
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      return null;
    }
    return Names[name];
  }
}

const Names = Object.freeze({
  Turned:       'Turned',
  Visible:      'Visible',
  Inserted:     'Inserted',
  Altered:      'Altered',
})

export default State;
