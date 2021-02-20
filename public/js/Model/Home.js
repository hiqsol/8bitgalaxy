import Pile from "./Pile.js";

class Home {
  constructor(player) {
    this._player = player;
    this._discard = new Pile('discard');
    this._scrap = new Pile('scrap');
  }

  get player()  { return this._player; }
  get scrap()   { return this._scrap; }
  get discard() { return this._discard; }
}

export default Home;
