import Card from "./Card.js";
import Decks from "./Decks.js";

class Deck {
  constructor(race) {
    this._race = race.toLowerCase();
    this._all = undefined;
    this._lower = undefined;
    this._upper = undefined;
    this._ships = undefined;
    this._bases = undefined;
    this._heroes = undefined;
    this._colonies = undefined;
  }

  get all() {
    if (this._all === undefined) {
      this._all = {};
      this._lower = {};
      this._upper = {};

      for (var name in Decks.all()) {
        let card = Card.assert(name);
        if (!this.isThatRace(card.Race)) continue;
        this._all[name] = card;
        let alt = card.Alternative;
        let upper = card;
        let lower = card;
        if (alt) {
          let altCard = Card.assert(alt.Name);
          if (card.Level > alt.Level) {
            lower = altCard;
          } else {
            upper = altCard;
          }
        }
        this._upper[upper.Name] = upper;
        this._lower[lower.Name] = lower;
      }
    }
    return this._all;
  }

  get ships() { return this.getOfType('ship', '_ships'); }
  get bases() { return this.getOfType('base', '_bases'); }
  get heroes() { return this.getOfType('hero', '_heroes'); }
  get colonies() { return this.getOfType('colony', '_colonies'); }

  getOfType(type, name) {
    if (this[name] === undefined) {
      this[name] = this.findOfType(type);
    }
    return this[name]
  }

  findOfType(type) {
    let res = {};
    for (var name in this.lower) {
      let card = Card.assert(name);
      if (!card.isType(type)) continue;
      res[name] = card;
    }
    return res;
  }

  get lower() { this.all;return this._lower; }
  get upper() { this.all;return this._upper; }

  get size() { return Object.keys(this.lower).length; }

  isThatRace(race) {
    if (typeof race != 'string') return false;
    return race.toLowerCase() == this._race;
  }
}

export default Deck;
