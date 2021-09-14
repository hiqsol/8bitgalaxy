import Row from "./Row.js";
import Pile from "./Pile.js";
import Player from "./Player.js";
import Direction from "./Direction.js";

class Home {
  constructor(player) {
    this._player    = Player.assert(player);
    this._discard   = new Pile('Discard', Direction.TopToBottom);
    this._estate    = new Row('Estate',   Direction.LeftToRight, 5);
    this._factory   = new Row('Factory',  Direction.TopToBottom, 4);
    this._research  = new Row('Research', Direction.TopToBottom, 5);
  }

  get player()    { return this._player; }
  get direction() { return this._player.direction; }
  get reserve()   { return this._estate.pile(0); }
  get hand()      { return this._estate.pile(1); }
  get techs()     { return this._estate.pile(2); }
  get assets()    { return this._estate.pile(3); }
  get missions()  { return this._estate.pile(4); }
  get discard()   { return this._discard; }
  get estate()    { return this._estate; }
  get factory()   { return this._factory; }
  get research()  { return this._research; }
  get scrap()     { return this._factory.pile(0); }
  get ideas()     { return this._research.pile(0); }
}

export default Home;
