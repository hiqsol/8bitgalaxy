import Card from "./Model/Card.js";
import Board from "./Model/Board.js";
import Player from "./Model/Player.js";
import Direction from "./Model/Direction.js";
import Assert from "./Model/Assert.js";
// import Drawer from "./DivDrawer/Drawer.js";
import Options from "./Model/Options.js";

class Game {
  constructor(options = {}) {
    this._options = Options.assert(options);
    // this._drawer = options.drawer ?? new Drawer();
    this._board = options.board || new Board();
    // this._board = options.board ?? new Board();
    this.init();
  }

  card(name) { return Card.assert(name); }
  get name() { return this._options.name; }
  get board() { return this._board; }
  // get drawer() { return this._drawer; }
  get options() { return this._options; }

  static create(options = {}) { return new Game(options); }

  init() {
    let direction = Direction.TopToBottom;
    for (const [name, race] of Object.entries(this.options.players)) {
      this.board.addPlayer(new Player(name, race, direction));
      direction = direction.reversed;
    }
    return this;
  }

  start(options = null, parent = null) {
    this.draw(parent, this);
  }

  draw(parent = null, obj = null, y, x) {
    return this.drawer.draw(parent, obj || this, y, x);
    // return this.drawer.draw(parent, obj ?? this, y, x);
  }

  static assert(sample) {
    if (sample instanceof(Game)) {
      return sample;
    }
    Assert.error('not a Game', sample);
  }
}

export default Game;
