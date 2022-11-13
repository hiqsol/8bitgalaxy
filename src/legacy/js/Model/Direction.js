import Assert from "./Assert.js";

class Direction {
  constructor(name) {
    this._name = Direction.assertName(name);
  }

  get name()        { return this._name; }
  get xStep()       { return xSteps[this.name]; }
  get yStep()       { return ySteps[this.name]; }
  get reversed()    { return Direction.getOne(Reverseds[this.name]); }
  get counterpart() { return Direction.getOne(Counterparts[this.name]); }

  get isTopToBottom() { return this.isName(Direction.TopToBottom); }
  get isBottomToTop() { return this.isName(Direction.BottomToTop); }
  get isLeftToRight() { return this.isName(Direction.LeftToRight); }
  get isRightToLeft() { return this.isName(Direction.RightToLeft); }
  get isHorizontal()  { return this.LeftToRight || this.RightToLeft; }
  get isVertical()    { return this.TopToBottom || this.BottomToTop; }

  isName(name)      { return Direction.normalizeName(name) === this._name; }

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
    Assert.error('not a Direction', sample);
  }

  static assertName(name) {
    let norm = Direction.normalizeName(name);
    if (name === null) {
      Assert.error('wrong Direction name', name);
    }
    return norm;
  }

  static normalizeName(name) {
    if (! name) {
      return Names.TopToBottom;
    }
    if (name instanceof(Direction)) {
      return name.name;
    }
    let lc = name.toLowerCase();
    return Names[name] ?? Names[lc] ?? null;
  }
}

const Names = Object.freeze({
  TopToBottom:      'TopToBottom',
  BottomToTop:      'BottomToTop',
  LeftToRight:      'LeftToRight',
  RightToLeft:      'RightToLeft',
})

const xSteps = Object.freeze({
  TopToBottom:      0,
  BottomToTop:      0,
  LeftToRight:      1,
  RightToLeft:      -1
})

const ySteps = Object.freeze({
  TopToBottom:      1,
  BottomToTop:      -1,
  LeftToRight:      0,
  RightToLeft:      0
})

const Reverseds = Object.freeze({
  TopToBottom:      'BottomToTop',
  BottomToTop:      'TopToBottom',
  LeftToRight:      'RightToLeft',
  RightToLeft:      'LeftToRight',
})

const Counterparts = Object.freeze({
  TopToBottom:      'LeftToRight',
  BottomToTop:      'RightToLeft',
  LeftToRight:      'TopToBottom',
  RightToLeft:      'BottomToTop'
})

export default Direction;
