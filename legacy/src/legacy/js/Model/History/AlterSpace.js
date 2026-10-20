class AlterSpace {
  constructor(space, value = 1) {
    this._space = space;
    this._value = Math.floor(value);
  }

  get space() { return this._space; }
  get value() { return this._value; }

  perform(performer) {
    let space = this.space;
    let elem = performer.elem(space);
    let cl = elem.classList;
    cl.remove('Type'+space.type);
    space.alter(this.value);
    cl.add('Type'+space.type);
    elem.querySelector('.Type').innerHTML = space.type;
    return true;
  }

  undo() {
    return new AlterSpace(this.space, -1*this.value);
  }

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'space':      this.space.id,
      'value':      this.value,
    }
  }

  static fromJSON(json) {
    return new AlterSpace(json.space, json.value);
  }
}

export default AlterSpace;
