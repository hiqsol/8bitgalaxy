import Star from "./Star.js";
import Assert from "./Assert.js";

class Field {
  constructor(board) {
    this._board = board;
    this._stars = [[], [], []];
  }

  toJSON() {
    return {
      '_class':     'Field',
      'stars':      this._stars,
    }
  }

  static fromJSON(json, board) {
    Assert.assert(json._class == 'Field', "wrong class hydrating Field", json);
    let field = new Field(board);
    if (json.stars) field._stars = Star.matrixFromJSON(json.stars, field);
    return field;
  }

  get board() { return this._board; }

  star(y, x) {
    if (! this._stars[y][x]) {
      this._stars[y][x] = new Star(this, y, x);
    }
    return this._stars[y][x];
  }
}

export default Field;
