import Card from "./Card.js";
import Direction from "./Direction.js";


class Pile {
  constructor(type, direction) {
    this._type = type;
    this._direction = Direction.assert(direction);
    this.absentCard = Card.assert('absent '+type);
    this._cards = [this.absentCard];
  }

  get cards()     { return this._cards; }
  get direction() { return this._direction; }
  get type()      { return this._type; }
  get size()      { return this._cards.length; }
  get top()       { return this._cards[this.size-1]; }

  get(i)          { return this._cards[i] || (i===0 ? this.top : null); }

  removeCard(card) { 
    return this._cards.reduce((acc, c) => {
      if(card===c ){
         acc.splice(-1, 1)
      } 
      return acc;
    }, this._cards);
  }

  putUnder(card)  { this._cards.unshift(Card.assert(card)); }
  put(card)       { this._cards.push(Card.assert(card, this)); }
}

export default Pile;
