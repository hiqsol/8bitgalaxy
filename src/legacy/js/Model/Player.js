import Home from './Home.js';
import Board from "./Board.js";
import Assert from "./Assert.js";

class Player {
  constructor(name, race, no) {
    this._name = name;
    this._race = race;
    this._no = no;
    this._home = new Home(this);
  }

  toJSON() {
    return {
      '_class':     'Player',
      'name':       this._name,
      'race':       this._race,
      'no':         this._no,
      'home':       this._home,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'Player', "wrong class hydrating Player", json);
    let player = new Player(json.name, json.race, json.no);
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
  get no()        { return this._no; }
  get star()      {
    if (this.no == 1) return this.board.star(2, 1)
    if (this.no == 2) return this.board.star(0, 0)
    if (this.no == 3) return this.board.star(1, 1)
    return this.board.star(1, 1)
  }

  static assert(sample) {
    if (sample instanceof(Player)) {
      return sample;
    }
    Assert.error('not a Player', sample);
  }
}

export default Player;
