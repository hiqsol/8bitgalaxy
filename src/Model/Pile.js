import Card from "./Card.js";
import Direction from "./Direction.js";


class Pile {
  constructor(type, direction) {
    this._type = type;
    this._direction = Direction.assert(direction);
    this.absentCard = Card.assert('absent '+type);
    this._cards = [];
  }

  get cards()     {
    return this._cards[this.size - 1] ? this._cards : [this.absentCard];
  }
  get direction() { return this._direction; }
  get type()      { return this._type; }
  get size()      { return this._cards.length; }
  get top()       { return this._cards[this.size-1] ?? this.absentCard; }

  get(i)          { return this._cards[i] ?? (i===0 ? this.top : null); }

  putUnder(card)  { this._cards.unshift(Card.assert(card)); }
  put(card)       { this._cards.push(Card.assert(card)); }
}

export default Pile;
