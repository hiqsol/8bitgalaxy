import Row from "./Row.js";
import Pile from "./Pile.js";
import Player from "./Player.js";
import Direction from "./Direction.js";

class Home {
  constructor(player) {
    this._player    = Player.assert(player);
    this._discard   = new Pile(Direction.TopToBottom);
    this._main      = new Row(Direction.LeftToRight, 5);
    this._factory   = new Row(Direction.TopToBottom, 4);
    this._research  = new Row(Direction.TopToBottom, 5);
  }

  get player()    { return this._player; }
  get direction() { return this._player.direction; }
  get main()      { return this._main; }
  get reserve()   { return this._main.pile(0); }
  get hand()      { return this._main.pile(1); }
  get techs()     { return this._main.pile(2); }
  get assets()    { return this._main.pile(3); }
  get missions()  { return this._main.pile(4); }
  get discard()   { return this._discard; }
  get factory()   { return this._factory; }
  get research()  { return this._research; }
}

export default Home;
