import Assert from "./Assert.js";

class State {
  constructor(name) {
    this._turned      = false;
    this._altered     = false;
    this.parseName(name);
  }

  parseName(name) {
    name.split('-').forEach(part => this.applyName(part));
  }
  buildName() {
    let names = [];
    if (this._turned) names.push('Turned');
    if (this._altered) names.push('Altered');
    return names.join(' ');
  }

  applyName(input) {
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    name = Names[input];
    if (input && !name) {
      Assert.error('wrong state: ' + input);
    }
    if (name === Names.Turned) {
      this._turned = true;
    } else if (name === Names.Altered) {
      this._altered = true;
    }
  }

  turn()    { this._turned = !this._turned; }
  alter()   { this._altered = !this._altered; }

  setTurned(value)      { this._turned = value; }
  setAltered(value)     { this._altered = value; }

  get name()            { return this.buildName(); }
  get isTurned()        { return this._turned; }
  get isAltered()       { return this._altered; }

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
  Altered:      'Altered',
})

export default State;
