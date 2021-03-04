class State {
  constructor(name) {
    this._name        = name;
    this._absent      = false;
    this._turned      = false;
    this._inserted    = false;
    this._alternative = false;
    this.parseName(name);
  }

  parseName(name) {
    name.split('-').forEach(part => this.applyName(part));
  }

  applyName(input) {
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    name = Names[input];
    if (input && !name) {
      throw new Error('wrong state: ' + input);
    }
    if (name === Names.Absent) {
      this._absent = true;
    } else if (name === Names.Turned) {
      this._turned = true;
    } else if (name === Names.Inserted) {
      this._inserted = true;
    } else if (name === Names.Alternative) {
      this._alternative = true;
    }
  }

  get name()            { return this._name; }
  get isAbsent()        { return this._absent; }
  get isTurned()        { return this._turned; }
  get isInserted()      { return this._inserted; }
  get isAlternative()   { return this._alternative; }
  get isVisible()       { return !this._absent && !this._turned; }

  get visibility()      {
    if (this.isAbsent) {
      return Names.Absent;
    }
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
    throw new Error('not a State:' + sample.constructor.name)
  }

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
  Turned:       'Turned',
  Visible:      'Visible',
  Ins:          'Inserted',
  Inserted:     'Inserted',
  Alt:          'Alternative',
  Alternative:  'Alternative',
})

export default State;
