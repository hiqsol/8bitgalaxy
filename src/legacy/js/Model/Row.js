import Pile from "./Pile.js";
import Assert from "./Assert.js";
import Direction from "./Direction.js";

class Row {
  constructor(type, direction, size) {
    this._type = Row.assertType(type);
    this._direction = Direction.assert(direction);
    this._piles = [];
    this.initPiles(size);
  }

  toJSON() {
    return {
      '_class':     'Row',
      'type':       this._type,
      'direction':  this._direction.name,
      'piles':      this._piles,
    }
  }

  initPiles(size) {
    let piles = Types[this.type];
    for (var i = 0, len = piles.length; i < len; i++) {
      this._piles.push(new Pile(piles[i], this.direction.counterpart));
    }
  }

  get isMain()    { return this.isType(Types.Main); }
  get direction() { return this._direction; }
  get type()      { return this._type; }
  get size()      { return this._piles.length; }
  get last()      { return this._piles[0]; }
  get piles()     { return this._piles; }

  pile(no)        { return this.piles[this.assertNo(no)]; }
  isType(type)    { return this._type === type; }

  put(card, no)   { this.pile(no).put(card); }

  assertNo(no) {
    if (no<0 || no>=this.size) {
      Assert.error('wrong pile no', no);
    }
    return no;
  }

  static assertType(type) {
    if (Types[type] === undefined) {
      Assert.error('wrong Row type',  type);
    }
    return type;
  }
}

const Types = Object.freeze({
  Deck:       ['Discard', 'Reserve'],
  Progress:   ['Science', 'Production', 'Colonization', 'Attack'],
  Property:   ['Reserve', 'Hand', 'Techs', 'Assets', 'Missions'],
  Production: ['Scrap', 'Production', 'Production', 'Production'],
  Research:   ['Ideas', 'Research', 'Research', 'Research', 'Research'],
})

export default Row;
