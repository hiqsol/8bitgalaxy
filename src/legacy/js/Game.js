import Card from "./Model/Card.js";
import Board from "./Model/Board.js";
import Player from "./Model/Player.js";
import Assert from "./Model/Assert.js";
import Drawer from "./DivDrawer/Drawer.js";
import Options from "./Model/Options.js";
import Scoreboard from "./Scoreboard.js";

class Game {
  constructor(options = {}) {
    this._options = Options.assert(options);
    this._drawer = options.drawer ?? new Drawer();
    this._board = options.board ?? this.createBoard();
    this._scoreboard = options.scoreboard ?? new Scoreboard(this);
    this.populateOptions();
  }

  toJSON() {
    return {
      '_class':     'Game',
      'board':      this._board,
    }
  }

  static fromJSON(json, options) {
    Assert.assert(json._class == 'Game', "wrong class hydrating Game", json);
    let game = new Game(options);
    game._board = Board.fromJSON(json.board, game);
    return game;
  }

  card(name) { return Card.assert(name); }
  get name() { return this._options.name; }
  get board() { return this._board; }
  get drawer() { return this._drawer; }
  get options() { return this._options; }
  get scoreboard() { return this._scoreboard; }

  static create(options = {}) { return new Game(options); }

  createBoard() {
    let board = new Board(this);
    let no = 1;
    for (const [name, race] of Object.entries(this.options.players)) {
      board.addPlayer(new Player(name, race, no));
      no++;
    }
    return board;
  }

  populateOptions() {
    this._options.drawer = this._drawer;
    this._options.scoreboard = this._scoreboard;
  }

  start(options = null, parent = null) {
    this.draw(parent, this);
  }

  draw(parent = null, obj = null, y, x) {
    return this.drawer.draw(parent, obj ?? this, y, x);
  }

  redraw() {
    document.getElementById('Game').remove();
    return this.draw();
  }

  exportJson() {
      return JSON.stringify(this, null, 2);
  }

  importJson(json) {
    let game = Game.fromJSON(JSON.parse(json));
    this._board = game._board;
  }

  static assert(sample) {
    if (sample instanceof(Game)) {
      return sample;
    }
    Assert.error('not a Game', sample);
  }
}

export default Game;
