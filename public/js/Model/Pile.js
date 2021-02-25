import Card from "./Card.js";
import Direction from "./Direction.js";

class Pile {
  constructor(direction) {
    this._direction = Direction.assert(direction);
    this._cards = [];
  }

  get direction() { return this._direction; }
  get size()      { return this._cards.length; }
  get top()       { return this._cards[this.size-1]; }

  get(i)          { return this._cards[i] ?? null; }

  putUnder(card)  { this._cards.unshift(Card.assert(card)); }
  put(card)       { this._cards.push(Card.assert(card)); }
}

export default Pile;
