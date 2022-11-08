import Home from "./Home.js";
import Pile from "./Pile.js";
import Decks from "./Decks.js";

class Start {
  constructor(home) {
    this._home = Home.assert(home);
    this.init();
  }

  get home() {
    return this._home;
  }

  get deck() {
    return this.home.deck;
  }

  get field() {
    return this.home.player.game.board.field;
  }

  get ideas() {
    return this.home.ideas;
  }

  get factory() {
    return this.home.factory;
  }

  get discard() {
    return this.home.discard;
  }

  get research() {
    return this.home.research;
  }

  init() {
    this.ideas.put(this.deck.upper);
    this.initShips();
    this.initHeroes();
    this.initBases();
    this.initColonies();
    this.initResearch();
  }

  initShips() {
    let ships = this.filterObject(
      this.home.deck.ships,
      (key, card) => card.isAnyLevel(1),
    );
    this.discard.put(ships);
    this.ideas.remove(ships);
  }

  initHeroes() {
    let heroes = this.filterObject(
      this.home.deck.heroes,
      (key, card) => card.isAnyLevel(1),
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
    let bases = this.filterObject(
      this.home.deck.bases,
      (key, card) => card.isAnyLevel(2),
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
    let colonies = this.filterObject(
      this.home.deck.colonies,
      (key, card) => card.isAnyLevel(2),
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
    this.ideas.shuffle();
    for (var i = 4; i > 0; i--) {
      this.research.put(this.ideas.pop(), i);
    }
  }

  filterObject(obj, callback) {
    let array = Object.entries(obj);
    let filtered = array.filter(
      ([key, card]) => callback(key, card),
    );
    return Object.fromEntries(filtered);
  }
}

export default Start;
