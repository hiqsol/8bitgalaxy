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

  setBoard(board) { this._board = Board.assert(board);return this; }

  get board()     { return this._board; }
  get game()      { return this._board.game; }
  get home()      { return this._home; }
  get name()      { return this._name; }
  get race()      { return this._race; }
  get direction() { return this._direction; }

  static assert(sample) {
    if (sample instanceof(Player)) {
      return sample;
    }
    Assert.error('not a Player', sample);
  }
}

export default Player;
