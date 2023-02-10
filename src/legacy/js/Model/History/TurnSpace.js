class TurnSpace {
  constructor(space, value = null) {
    this._space = space;
    this._value = value;
  }

  get space()       { return this._space; }
  get value()       { return this._value; }

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
