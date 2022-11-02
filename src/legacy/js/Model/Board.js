//import Game from "../Game.js";

import Star from "./Star.js";
import Home from "./Home.js";
import Field from "./Field.js";
import Player from "./Player.js";
import Assert from "./Assert.js";

class Board {
  constructor(game) {
    this._game = game;
    this._field = new Field(this);
    this._players = [];
  }

  get game()    { return this._game; }
  get field()   { return this._field; }

  star(y, x)    { return this.field.star(y, x); }
  player(no)    { return this._players[this.assertPlayerNo(no)-1]; }
  home(no)      { return this.player(no).home; }

  addPlayer(player) { this._players.push(Player.assert(player).setBoard(this)); }

  assertPlayerNo(no) {
    if (typeof(no) !== 'number' || no<1 || no>this._players.length) {
      Assert.error('wrong player no', no);
    }
    return no;
  }

  static assert(sample) {
    if (sample instanceof(Board)) {
      return sample;
    }
    Assert.error('not a Board', sample);
  }
}

export default Board;
