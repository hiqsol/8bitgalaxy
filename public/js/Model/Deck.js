import Card from "./Card.js";
import Decks from "./Decks.js";

class Deck {
  constructor(race) {
    this._race = race.toLowerCase();
    this._all = undefined;
    this._lower = undefined;
    this._upper = undefined;
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
        if (alt && card.Level < alt.Level) {
          this._lower[name] = card;
        } else {
          this._upper[name] = card;
        }

      }

    }
    return this._all;
  }

  get lower() { this.all;return this._lower; }
  get upper() { this.all;return this._upper; }

  get size() { return Object.keys(this.upper).length; }

  isThatRace(race) {
    if (typeof race != 'string') return false;
    return race.toLowerCase() == this._race;
  }
}

export default Deck;
