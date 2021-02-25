import Star from "./Star.js";
import Home from "./Home.js";
import Field from "./Field.js";
import Player from "./Player.js";

class Board {
  constructor() {
    this._field = new Field(this);
    this._players = [];
  }

  get field()   { return this._field; }

  star(y, x)    { return this.field.star(y, x); }
  player(no)    { return this._players[this.assertPlayerNo(no)-1]; }
  home(no)      { return this.player(no).home; }

  addPlayer(name, race) {
    let player = new Player(name, race)
    this._players.push(player);
    return player;
  }

  assertPlayerNo(no) {
    if (typeof(no) !== 'number' || no<1 || no>this._players.length) {
      throw new Error('wrong player no: ' + no);
    }
    return no;
  }
}

export default Board;
