import Row from "./Row.js";
import Deck from "./Deck.js";
import Pile from "./Pile.js";
import Slots from "./Slots.js";
import Player from "./Player.js";
import Assert from "./Assert.js";

class Home {
  constructor(player) {
    this._player    = Player.assert(player);
    this._id        = player.race + '.home';
    this._deck      = new Deck(this.race);
    this._progress  = new Row(this, 'Progress');
    this._hand      = new Slots(this, 'Hand', 3);
    this._discard   = new Pile(this, 'Discard');
    this._reserve   = new Pile(this, 'Reserve');
    this._factory   = new Row(this, 'Factory');
    this._research  = new Row(this, 'Research');
  }

  toJSON() {
    return {
      '_class':   'Home',
      'progress': this._progress,
      'hand':     this._hand,
      'discard':  this._discard,
      'reserve':  this._reserve,
      'factory':  this._factory,
      'research': this._research,
    }
  }

  static fromJSON(json, player) {
    Assert.assert(json._class == 'Home', "wrong class hydrating Home", json);
    let home = new Home(player);
    home._progress  = Row.fromJSON(json.progress, home);
    home._hand      = Slots.fromJSON(json.hand, home);
    home._discard   = Pile.fromJSON(json.discard, home);
    home._reserve   = Pile.fromJSON(json.reserve, home);
    home._factory   = Row.fromJSON(json.factory, home);
    home._research  = Row.fromJSON(json.research, home);
    return home;
  }

  get id()            { return this._id; }
  get player()        { return this._player; }
  get star()          { return this._player.star; }
  get race()          { return this._player.race; }
  get deck()          { return this._deck; }
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

  rnd(no) { return this._research.pile(no); }

  static assert(sample) {
    if (sample instanceof(Home)) {
      return sample;
    }
    Assert.error('not a Home', sample);
  }
}

export default Home;
