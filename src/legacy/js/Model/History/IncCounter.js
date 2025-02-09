import Effect from "./Effect.js";

class IncCounter extends Effect {
  constructor(counter, value = 1) {
    super();
    this._counter = counter;
    this._value = value;
  }

  get value()       { return this._value; }
  get counter()     { return this._counter; }

  undo() {
    return new IncCounter(this.counter, 0 - this.value);
  }

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'counter':    this.counter.id,
      'value':      this.value,
    }
  }

  static fromJSON(json) {
    return new IncCounter(json.counter, json.value);
  }
}

export default IncCounter;
