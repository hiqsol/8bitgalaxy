import Pile from "./Pile.js";
import Assert from "./Assert.js";

class Row {
  constructor(parent, type) {
    this._parent = parent;
    this._id = parent.id + '.' + (type || 'row');
    this._type = Row.assertType(type);
    this._piles = [];
    this.initPiles();
  }

  toJSON() {
    return {
      '_class':     'Row',
      'type':       this._type,
      'piles':      this._piles,
    }
  }

  static fromJSON(json, parent) {
    Assert.assert(json._class == 'Row', "wrong class hydrating Row", json);
    let row = new Row(parent, json.type);
    row._piles = Pile.arrayFromJSON(json.piles, row);
    return row;
  }

  initPiles() {
    let piles = Types[this.type];
    for (var i = 0, len = piles.length; i < len; i++) {
      this._piles.push(new Pile(this, piles[i]));
    }
  }

  get id()        { return this._id; }
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
  Progress:   ['Attack', 'Colo', 'Prod', 'Science'],
  Production: ['Scrap', 'Production1', 'Production2', 'Production3'],
  Research:   ['Ideas', 'Research1', 'Research2', 'Research3', 'Research4'],
})

export default Row;
