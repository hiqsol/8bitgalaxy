import Card from "./Card.js";
import Direction from "./Direction.js";

class Pile {
  constructor(type, direction) {
    this._type = type;
    this._direction = Direction.assert(direction);
    let card = Card.assert('absent '+type);
    this._folded = true;
    this._cards = [];
  }

  get direction() { return this._direction; }
  get folded()    { return this._folded; }
  get type()      { return this._type; }
  get size()      { return this._cards.length; }
  get top()       { return this._cards[this.size-1] ?? Card.assert('absent '+this.type); }

  get(i)          { return this._cards[i] ?? (i===0 ? this.top : null); }
  pop()           { return this._cards.pop(); }
  unfold()        { this._folded = false; }
  fold()          { this._folded = true; }
  shuffle()       { this.shuffleArray(this._cards); }

  put(card) {
    let type = typeof(card)
    if (type === 'string' || type === 'Card') {
      this._cards.push(Card.assert(card));
    } else {
      for (var c in card) {
        this.put(c)
      }
    }
  }

  putUnder(card) {
    let type = typeof(card)
    if (type === 'string' || type === 'Card') {
      this._cards.unshift(Card.assert(card));
    } else {
      for (var c in card) {
        this.putUnder(c)
      }
    }
  }

  remove(name) {
    let i = this._cards.findIndex(item => item.isAnyName(name));
    this._cards.splice(i, 1);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

}

export default Pile;
