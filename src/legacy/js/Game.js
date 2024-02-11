import Card from "./Model/Card.js";
import Board from "./Model/Board.js";
import Start from "./Model/Start.js";
import Player from "./Model/Player.js";
import Assert from "./Model/Assert.js";
import Drawer from "./DivDrawer/Drawer.js";
import Options from "./Model/Options.js";
import History from "./Model/History/History.js";
import Scoreboard from "./Scoreboard.js";

class Game {
  constructor(options = {}) {
    this._options = Options.assert(options);
    this._history = new History(this);
    this._drawer = options.drawer ?? new Drawer(this);
    this._board = options.board ?? this.createBoard();
    this._scoreboard = options.scoreboard ?? new Scoreboard(this);
    this.populateOptions();
  }

  toJSON() {
    return {
      '_class':     'Game',
      'board':      this._board,
      'history':    this._history,
    }
  }

  static fromJSON(json, options) {
    Assert.assert(json._class == 'Game', "wrong class hydrating Game", json);
    let game = new Game(options);
    game._board = Board.fromJSON(json.board, game);
    game._history = History.fromJSON(json.history);
    return game;
  }

  card(name) { return Card.assert(name); }

  get name() { return this._options.name; }
  get board() { return this._board; }
  get drawer() { return this._drawer; }
  get history() { return this._history; }
  get options() { return this._options; }
  get scoreboard() { return this._scoreboard; }

  static create(options = {}) { return new Game(options); }

  createBoard() {
    let board = new Board(this);
    let no = 1;
    for (const [name, race] of Object.entries(this.options.players)) {
      let player = board.addPlayer(new Player(name, race, no));
      no++;
    }
    return board;
  }

  populateOptions() {
    this._options.drawer = this._drawer;
    this._options.scoreboard = this._scoreboard;
  }

  start(options = null, parent = null) {
    this.initCentralVoid();
    for (const player of this.board.players) {
      new Start(player.home);
    }
    this.draw(parent, this);
  }

  initCentralVoid() {
    this.setVoid(1, 1, [1, 4, 5, 6, 7, 10, 11, 12]);
    //this.setVoid(0, 0, [4, 7]);
    //this.setVoid(2, 1, [1, 10]);
  }

  setVoid(y, x, bearings) {
    let star = this.board.field.star(y, x);
    for (const i of bearings) {
      star.findSpace(i).turn(false).setType(6);
    }
  }

  draw(parent = null, obj = null, params = null) {
    return this.drawer.draw(parent, obj ?? this, params);
  }

  redraw() {
    document.getElementById('Game').remove();
    return this.draw();
  }

  undo() {
    this.drawer.undo(this.history.undo());
  }

  exportJson() {
      return JSON.stringify(this, null, 2);
  }

  importJson(json) {
    let game = Game.fromJSON(JSON.parse(json));
    this._board = game._board;
    this._history = game._history;
  }

  static assert(sample) {
    if (sample instanceof(Game)) {
      return sample;
    }
    Assert.error('not a Game', sample);
  }
}

export default Game;
