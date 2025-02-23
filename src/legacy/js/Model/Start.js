import Home from "./Home.js";
import Pile from "./Pile.js";

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
    tmp.put(this.deck.upper);
    tmp.shuffle();
    this._heroNum = 0;
    this._baseNum = 0;
    for (const i in tmp.cards) {
      const card = tmp.get(i);
      if (!this.dealCard(card)) {
        if (card.MaxLevel <= 3) {
          this.factory.put(card);
        } else {
          this.research.put(card);
        }
      }
    }
    for (const i in this.research.piles) {
      this.research.pile(i).sortDesc();
    }
  }

  oldDealCard(card) {
    if (card.Type.isShip)   return this.dealShip(card);
    if (card.Type.isHero)   return this.dealHero(card);
    if (card.Type.isBase)   return this.dealBase(card);
    if (card.Type.isColony) return this.dealColony(card);
    return false;
  }

  dealCard(card) {
    if (card.Type.isActor)      return this.dealActor(card);
    if (card.Type.isStructure)  return this.dealStructure(card);
    return false;
  }

  dealShip(card) {
    if (card.isAnyLevel(1)) {
      this.discard.put(card);
      return true;
    }
    return false;
  }

  dealHero(card) {
    if (card.isAnyLevel(1) && this._heroNum++ < 2) {
      card.alter();
      this.discard.put(card);
      return true;
    }
    return false;
  }

  dealBase(card) {
    if (card.isAltLevel(1) && ['Production', 'Colonization'].includes(card.AltKlass)) {
      card.alter();
      this.home.star.put(card);
      return true;
    }
    return false;
  }

  dealColony(card) {
    if (card.isAltLevel(1) && card.AltKlass == "Science") {
      card.alter();
      this.home.star.put(card);
      return true;
    }
    return false;
  }

  dealActor(card) {
    if (card.isAnyLevel(1)) {
      this.discard.put(card);
      return true;
    }
    return false;
  }

  dealStructure(card) {
    if (card.isAnyLevel(1) && ['shpyrd', 'shipyard', 'academy'].includes(card.Power.value)) {
      this.home.star.put(card);
      return true;
    }
    return false;
  }

  initAlien() {
    this.initIdeas();
    for (var i in this.ideas.cards) {
      this.ideas.get(i).unknow().turn();
    }
    this.ideas._name = 'Source';
    this.research.pile(1)._name = 'Get 1';
    this.research.pile(2)._name = 'Get 2';
  }

  initIdeas() {
    this.ideas.put(this.deck.upper);
    this.ideas.shuffle();
  }
}

export default Start;
