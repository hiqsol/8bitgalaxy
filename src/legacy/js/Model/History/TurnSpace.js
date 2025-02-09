class TurnSpace {
  constructor(space, value = null) {
    this._space = space;
    this._value = value;
  }

  get space() { return this._space; }
  get value() { return this._value; }

  perform(performer) {
    let value = this.value;
    let cl = performer.elem(this.space).classList;
    if (value === null) {
      value = !cl.contains('Turned');
    }
    if (value) {
      cl.add('Turned');
    } else {
      cl.remove('Turned');
    }
    this.space.turn(value);
    return true;
  }

  undo() {
    if (this.value === null) {
      return this;
    }
    return new TurnSpace(this.space, !this.value);
  }

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'space':      this.space.id,
      'value':      this.value,
    }
  }

  static fromJSON(json) {
    return new TurnSpace(json.space, json.value);
  }
}

export default TurnSpace;
