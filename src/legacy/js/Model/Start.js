import Home from "./Home.js";
import Pile from "./Pile.js";
import Decks from "./Decks.js";

class Start {
  constructor(home) {
    this._home = Home.assert(home);
    if (this.home.player.isAlien) {
      this.initAlien();
    } else {
      this.initHuman();
    }
  }

  get home()      { return this._home; }
  get deck()      { return this._home.deck; }
  get field()     { return this._home.player.game.board.field; }
  get ideas()     { return this._home.ideas; }
  get factory()   { return this._home.factory; }
  get discard()   { return this._home.discard; }
  get research()  { return this._home.research; }

  initHuman() {
    let tmp = new Pile("tmp");
    tmp.put(this.deck.lower);
    tmp.shuffle();
    this._heroNum = 0;
    this._baseNum = 0;
    for (const i in tmp.cards) {
      const card = tmp.get(i);
      switch (card.Type) {
        case "Ship":    this.dealShip(card); break;
        case "Hero":    this.dealHero(card); break;
        case "Base":    this.dealBase(card); break;
        case "Colony":  this.dealColony(card); break;
      }
    }
  }

  dealShip(card) {
    if (card.isAnyLevel(1)) {
      this.discard.put(card);
    } else if (card.isAnyLevel(2)) {
      this.factory.put(card);
    } else {
      this.research.put(card);
    }
  }

  dealHero(card) {
    if (card.isAnyLevel(1)) {
      if (this._heroNum++ < 2) {
        this.discard.put(card);
      } else {
        this.factory.put(card);
      }
    } else {
      this.research.put(card);
    }
  }

  dealBase(card) {
    if (card.isAnyLevel(2)) {
      if (this._baseNum++ < 2) {
        this.home.star.put(card);
      } else {
        this.factory.put(card);
      }
    } else {
      this.research.put(card);
    }
  }

  dealColony(card) {
    if (card.isAnyLevel(2)) {
      if (card.Klass == "Colonization") {
        this.home.star.put(card);
      } else {
        this.factory.put(card);
      }
    } else {
      this.research.put(card);
    }
  }

  initAlien() {
    this.initIdeas();
    for (var i in this.ideas.cards) {
      this.ideas.get(i).turn();
    }
    this.ideas._name = 'Source';
  }

  initIdeas() {
    this.ideas.put(this.deck.lower);
    this.ideas.shuffle();
  }
}

export default Start;
