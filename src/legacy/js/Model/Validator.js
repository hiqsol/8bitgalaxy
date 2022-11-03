import Decks from "./Decks.js";

class Validator {
  constructor() {
    this._stats = {};
  }

  stats(cards) {
    for (const name in cards) {
      let card = Decks.getCard(name);
      this.getStat(card.Race).stat(card);
    }
    for (const race in this._stats) {
      this.getStat(race).aggregate();
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
  constructor(race) {
    this._race = race;
    this._names = {};
    this._uniqs = {};
    this._total_num = 0;
    this._uniqs_num = 0;
    this._types = {};
    this._klasses = {};
    this._levels = {};
  }

  stat(card) {
    let uniq = card.Uniq;
    let type = card.Type;
    let klass = card.Klass;
    let level = card.Level.toString();
    this._names[card.Name] = card;
    this._uniqs[card.Uniq] = card;
    this._types[type] = ++this._types[type] || 1;
    this._klasses[klass] = ++this._klasses[klass] || 1;
    this._levels[level] = ++this._levels[level] || 1;
  }

  aggregate() {
    this._total_num = Object.keys(this._names).length;
    this._uniqs_num = Object.keys(this._uniqs).length;
  }
}

export default Validator;
