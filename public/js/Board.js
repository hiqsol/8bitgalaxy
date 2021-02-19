import Star from "./Star.js";
import Deck from "./Deck.js";
import Home from "./Home.js";
import Field from "./Field.js";
import Player from "./Player.js";

class Board {
  constructor() {
    this._field = new Field(this);
    this._deck = new Deck(this);
    this._players = {};
    this._homes = {};
  }

  get deck() { return this._deck; }
  get field() { return this._field; }

  star(x, y) {
    return this.field.star(x, y);
  }

  card(name) {
    return this.deck.get(name);
  }

  home(name) {
    let player = this.player(name);
    name = player.name;
    if (this._homes[name] === undefined) {
      this._homes[name] = new Home(player);
    }
    return this._homes[name];
  }

  player(name) {
    if (name instanceof(Player)) {
      return name;
    }
    if (this._players[name] === undefined) {
      throw new error('wrong player: '+name);
    }
    return this._players[name];
  }

  addPlayer(name, race) {
    if (this._players[name] !== undefined) {
      throw new error('player alread exist: '+name);
    }
    let player = new Player(name, race)
    this._players[name] = player;
    return player;
  }
}

export default Board;