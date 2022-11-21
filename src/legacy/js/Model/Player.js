import Home from './Home.js';
import Board from "./Board.js";
import Assert from "./Assert.js";
import Direction from './Direction.js';

class Player {
  constructor(name, race, direction, y, x) {
    this._name = name;
    this._race = race;
    this._direction = Direction.assert(direction);
    this._y = y;
    this._x = x;
    this._home = new Home(this);
  }

  toJSON() {
    return {
      '_class':     'Player',
      'name':       this._name,
      'race':       this._race,
      'direction':  this._direction.name,
      'x':          this._x,
      'y':          this._y,
      'home':       this._home,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'Player', "wrong class hydrating Player", json);
    let player = new Player(json.name, json.race, json.direction, json.y, json.x);
    player._home = Home.fromJSON(json.home, player);
    return player;
  }

  static arrayFromJSON(json) {
    Assert.assert(Array.isArray(json), "must be array of Players", json);
    let players = [];
    for (const k in json) {
      players[k] = Player.fromJSON(json[k]);
    }
    return players;
  }

  setBoard(board) { this._board = Board.assert(board);return this; }

  get board()     { return this._board; }
  get game()      { return this._board.game; }
  get home()      { return this._home; }
  get name()      { return this._name; }
  get race()      { return this._race; }
  get direction() { return this._direction; }
  get star()      {
    return this._direction.isTopToBottom
      ? this.board.star(2, 1)
      : this.board.star(0, 0)
    ;
  }

  static assert(sample) {
    if (sample instanceof(Player)) {
      return sample;
    }
    Assert.error('not a Player', sample);
  }
}

export default Player;
