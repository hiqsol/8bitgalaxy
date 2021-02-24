class Direction {
  constructor(name) {
    this._name = Direction.assertName(name);
  }

  get name() { return this._name; }

  static _values = {};

  static get TopToBottom() { return Direction.getOne(Names.TopToBottom); }
  static get BottomToTop() { return Direction.getOne(Names.BottomToTop); }
  static get LeftToRight() { return Direction.getOne(Names.LeftToRight); }
  static get RightToLeft() { return Direction.getOne(Names.RightToLeft); }

  static getOne(name) {
    name = Direction.assertName(name);
    if (Direction._values[name] === undefined) {
      Direction._values[name] = new Direction(name);
    }
    return Direction._values[name];
  }

  static fromString(name) { return new Direction(name); }
  static isName(name)     { return Direction.normalizeName(name) !== null; }

  static assert(sample) {
    if (! sample) {
      return Direction.TopToBottom;
    }
    if (sample instanceof(Direction)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Direction.fromString(sample);
    }
    throw new Error('not a Direction:' + sample.constructor.name)
  }

  static assertName(name) {
    let norm = Direction.normalizeName(name);
    if (name === null) {
      throw new Error('wrong Direction name: ' + name)
    }
    return norm;
  }

  static normalizeName(name) {
    if (! name) {
      return Names.TopToBottom;
    }
    let lc = name.toLowerCase();
    return Names[name] ?? Names[lc] ?? null;
  }
}

const Names = Object.freeze({
  TopToBottom:      'TopToBottom',
  BottomToTop:      'BottomToTop',
  LeftToRight:      'LeftToRight',
  RightToLeft:      'RightToLeft'
})

export default Direction;