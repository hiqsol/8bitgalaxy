import Home from "./Home.js";
import Pile from "./Pile.js";
import Decks from "./Decks.js";

class Start {
  constructor(home) {
    this._home = Home.assert(home);
    this.init();
  }

  get home()      { return this._home; }
  get deck()      { return this._home.deck; }
  get field()     { return this._home.player.game.board.field; }
  get ideas()     { return this._home.ideas; }
  get factory()   { return this._home.factory; }
  get discard()   { return this._home.discard; }
  get research()  { return this._home.research; }

  init() {
    this.ideas.put(this.deck.lower);
    this.ideas.shuffle();
    this.initShips();
    this.initHeroes();
    this.initBases();
    this.initColonies();
    this.initResearch();
  }

  initShips() {
    let ships = this.ideas.cards.filter(
      card => card.isShip && card.isAnyLevel(1)
    );
    this.discard.put(ships);
    this.ideas.remove(ships);
  }

  initHeroes() {
    let heroes = this.ideas.cards.filter(
      card => card.isHero && card.isAnyLevel(1)
    );
    let tmp = new Pile("tmp");
    tmp.put(heroes);
    tmp.shuffle();
    this.factory.put(tmp.pop(), 3);
    this.factory.put(tmp.pop(), 2);
    this.discard.put(tmp.cards);
    this.ideas.remove(heroes);
  }

  initBases() {
    let bases = this.ideas.cards.filter(
      card => card.isBase && card.isAnyLevel(2)
    );
    let tmp = new Pile("tmp");
    tmp.put(bases);
    tmp.shuffle();
    this.factory.put(tmp.pop(), 1);
    this.factory.put(tmp.pop(), 0);
    this.home.star
      .put(tmp.pop(), 0)
      .put(tmp.pop(), 1)
    ;
    this.ideas.remove(bases);
  }

  initColonies() {
    let colonies = this.ideas.cards.filter(
      card => card.isColony && card.isAnyLevel(2)
    );
    let tmp = new Pile("tmp");
    tmp.put(colonies);
    tmp.shuffle();
    this.factory.put(tmp.pop(), 3);
    this.factory.put(tmp.pop(), 2);
    this.home.star
      .put(tmp.pop(), 3)
      .put(tmp.pop(), 4)
    ;
    this.ideas.remove(colonies);
  }

  initResearch() {
    for (var i = 4; i > 0; i--) {
      this.research.put(this.ideas.pop(), i);
    }
    for (var i in this.ideas.cards) {
      this.ideas.get(i).turn();
    }
    this.ideas.top.turn();
  }
}

export default Start;
