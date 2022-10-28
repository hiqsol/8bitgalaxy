import Row from "./Row.js";
import Pile from "./Pile.js";
import Player from "./Player.js";
import Direction from "./Direction.js";

class Home {
  constructor(player) {
    this._player    = Player.assert(player);
    this._progress  = new Row('Progress',   Direction.LeftToRight, 4);
    this._hand      = new Pile('Hand', Direction.TopToBottom);
    this._discard   = new Pile('Discard', Direction.TopToBottom);
    this._reserve   = new Pile('Reserve', Direction.TopToBottom);
    this._factory   = new Row('Production',  Direction.TopToBottom, 4);
    this._research  = new Row('Research', Direction.TopToBottom, 5);
  }

  get player()        { return this._player; }
  get direction()     { return this._player.direction; }
  get hand()          { return this._hand; }
  get discard()       { return this._discard; }
  get reserve()       { return this._reserve; }
  get progress()      { return this._progress; }
  get attack()        { return this._progress.pile(3); }
  get colonization()  { return this._progress.pile(2); }
  get production()    { return this._progress.pile(1); }
  get science()       { return this._progress.pile(0); }
  get factory()       { return this._factory; }
  get research()      { return this._research; }
  get scrap()         { return this._factory.pile(0); }
  get ideas()         { return this._research.pile(0); }
}

export default Home;
