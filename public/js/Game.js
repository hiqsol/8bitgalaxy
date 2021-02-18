import Board from "./Board.js";
import DivDrawer from "./DivDrawer.js";

class Game {
  constructor() {
    this._board = new Board();
    this._drawer = new DivDrawer();
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
    b.star(0,0)
      .add('AI-Hero-1s',      1)
      .add('AI-Base-7a',      2)
      .add('AI-Ship-2a',      0)
      .add('AI-Colony-4p',    0)
    ;
    b.star(1, 0)
      .add('AI-Base-6C',      2)
      .add('AI-Colony-4P',    0)
    ;
    b.star(0, 1)
      .add('AI-Ship-2A',      0)
      .add('AI-Hero-1A',      0)
      .add('AI-Hero-2A',      1)
    ;
    b.star(2, 1)
      .add('Human-Base-6C',   2)
      .add('Human-Ship-2A',   0)
      .add('Human-Colony-4P', 0)
      .add('Human-Hero-2A',   1)
    ;
    b.star(0, 2)
      .add('Human-Base-6c',   2)
      .add('Human-Colony-4p', 0)
    ;
    b.star(1, 2)
      .add('Human-Base-7C',   0)
      .add('Human-Base-6C',   1)
      .add('Human-Base-5S',   2)
      .add('Human-Ship-1C',   0)
      .add('Human-Ship-2A',   1)
      .add('Human-Ship-3S',   2)
      .add('Human-Ship-4S',   3)
      .add('Human-Colony-4P', 0)
      .add('Human-Colony-3S', 1)
      .add('Human-Colony-6P', 2)
      .add('Human-Hero-2A',   0)
      .add('Human-Hero-1s',   1)
    ;
  }
}

export default Game;
