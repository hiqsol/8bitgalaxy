import Field from "./Field.js";
import Player from "./Player.js";
import Assert from "./Assert.js";

class Board {
  constructor(game) {
    this._game = game;
    this._field = new Field(this);
    this._players = [];
  }

  toJSON() {
    return {
      '_class':     'Board',
      'field':      this._field,
      'players':    this._players,
    }
  }

  static fromJSON(json, game) {
    Assert.assert(json._class == 'Board', "wrong class hydrating Board", json);
    let board = new Board(game);
    if (json.field) board._field = Field.fromJSON(json.field, board);
    if (json.players) board._players = Player.arrayFromJSON(json.players);
    return board;
  }

  get game()    { return this._game; }
  get field()   { return this._field; }
  get players() { return this._players; }

  star(y, x)    { return this.field.star(y, x); }
  player(no)    { return this._players[this.assertPlayerNo(no)-1]; }
  home(no)      { return this.player(no).home; }

  addPlayer(player) {
    player = Player.assert(player).setBoard(this);
    this._players.push(player);
    return player;
  }

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
