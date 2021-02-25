class State {
  constructor(name) {
    this._name = State.assertName(name);
  }

  get name()            { return this._name; }
  get visibility()      { return this.isVisible ? 'Visible' : this.name;  }
  get isAbsent()        { return this.is(Names.Absent); }
  get isHidden()        { return this.is(Names.Hidden); }
  get isNormal()        { return this.is(Names.Normal); }
  get isVisible()       { return this.is(Names.Normal, Names.Alternative); }
  get isAlternative()   { return this._name === Names.Alternative; }
  is(name, n2 = null)   { return this._name === name || this._name === n2; }

  static assert(sample) {
    if (sample instanceof(State)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return State.fromString(sample);
    }
    throw new Error('not a State:' + sample.constructor.name)
  }

  static fromString(name) { return new State(name); }
  static isName(name)     { return State.normalizeName(name) !== null; }

  static assertName(name) {
    let norm = State.normalizeName(name);
    if (name === null) {
      throw new Error('wrong State name: ' + name)
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
  Absent:       'Absent',
  Hidden:       'Hidden',
  Normal:       'Normal',
  Alternative:  'Alternative',
})

export default State;
