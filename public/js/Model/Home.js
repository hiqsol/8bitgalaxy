import Row from "./Row.js";
import Pile from "./Pile.js";
import Player from "./Player.js";
import Direction from "./Direction.js";

class Home {
  constructor(board, player, align = null) {
    this._align     = Direction.assert(align);
    this._player    = Player.assert(player, board);
    this._reserve   = new Pile(Direction.TopToBottom);
    this._discard   = new Pile(Direction.TopToBottom);
    this._factory   = new Row(Direction.LeftToRight, 4, 1);
    this._research  = new Row(Direction.LeftToRight, 5, 1);
  }

  get player()    { return this._player; }
  get reserve()   { return this._reserve; }
  get discard()   { return this._discard; }
  get factory()   { return this._factory; }
  get research()  { return this._research; }
}

export default Home;
