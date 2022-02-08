import Assert from "./Assert.js";

class Options {
  constructor(options) {
    this.init(options);
  }

  get name() { return this._name; }
  get players() { return this._players; }

  static assert(sample) {
    if (!sample) {
      return new Options({});
    }
    if (sample instanceof(Object)) {
      return new Options(sample);
    }
    if (sample instanceof(Options)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Options.fromString(sample);
    }
    Assert.error('not an Options', sample);
  }

  static fromString(name) {
    Assert.error('TODO implement');
  }

  init(options) {
    this._players = options.players || {
    // this._players = options.players ?? {
      p1: 'human',
      p2: 'ai',
    };
    this._name = options.name || this.generateName();
    // this._name = options.name ?? this.generateName();
  }

  generateName() {
    return this.players.p1 + ' vs ' + this.players.p2;
  }
}

export default Options;
