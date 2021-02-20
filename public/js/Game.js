import Board from "./Model/Board.js";
import Drawer from "./DivDrawer/Drawer.js";

class Game {
  constructor() {
    this._board = new Board();
    this._drawer = new Drawer();
  }

  get board() { return this._board; }
  get drawer() { return this._drawer; }

  static create(options = {}) {
    let game = new Game();
    return game.init(options);
  }

  init(options) {
    let players = options.players ?? {
      p1: 'human',
      p2: 'ai',
    };
    for (const [name, race] of Object.entries(players)) {
      this.board.addPlayer(name, race);
    }
    return this;
  }

  start(options = null, parent = null) {
    this.draw(parent);
  }

  draw(parent = null) {
    this.drawer.draw(parent, this.board);
  }

  demo() {
    this.demoPlay();
    this.start();
  }

  demoPlay() {
    let b = this.board;
    b.star(0, 0)
      .put('AI-Hero-1s',      1)
      .put('AI-Base-7a',      2)
      .put('AI-Ship-2a',      0)
      .put('AI-Colony-4p',    0)
    ;
    b.star(0, 1)
      .put('AI-Base-6C',      2)
      .put('AI-Colony-4P',    0)
    ;
    b.star(1, 0)
      .put('AI-Ship-2A',      0)
      .put('AI-Hero-1A',      0)
      .put('AI-Hero-2A',      1)
    ;
    b.star(1, 2)
      .put('Human-Base-6C',   2)
      .put('Human-Ship-2A',   0)
      .put('Human-Colony-4P', 0)
      .put('Human-Hero-2A',   1)
    ;
    b.star(2, 0)
      .put('Human-Base-6c',   2)
      .put('Human-Colony-4p', 0)
    ;
    b.star(2, 1)
      .put('Human-Base-7C',   0)
      .put('Human-Base-6C',   1)
      .put('Human-Base-5S',   2)
      .put('Human-Ship-1C',   0)
      .put('Human-Ship-2A',   1)
      .put('Human-Ship-3S',   2)
      .put('Human-Ship-4S',   3)
      .put('Human-Colony-4P', 0)
      .put('Human-Colony-3S', 1)
      .put('Human-Colony-6P', 2)
      .put('Human-Hero-2A',   0)
      .put('Human-Hero-1s',   1)
    ;
  }
}

export default Game;
