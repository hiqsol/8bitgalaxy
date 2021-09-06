import Decks from "./Decks.js";
import Assert from "./Assert.js";

class Validator {
  constructor(){
    this._stats = {};
  }

  stats(cards) {
    for (const name in cards) {
      let card = Decks.getCard(name);
      this.getStat(card.Race).stat(card);
    }
    return this;
  }

  getStat(race) {
    if (!(race in this._stats)) {
      this._stats[race] = new Stat(race);
    }
    return this._stats[race];
  }
}

class Stat {
  constructor(race){
    this._race = race;
    this._names = {};
    this._total = 0;
    this._types = {};
    this._klasses = {};
    this._levels = {};
  }

  stat(card) {
    this._total++;
    let type = card.Type;
    let klass = card.Klass;
    let level = card.Level.toString();
    this._names[card.Name] = card;
    this._types[type] = ++this._types[type] || 1;
    this._klasses[klass] = ++this._klasses[klass] || 1;
    this._levels[level] = ++this._levels[level] || 1;
  }
}

export default Validator;
