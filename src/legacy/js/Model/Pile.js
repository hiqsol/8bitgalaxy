import Card from "./Card.js";
import Direction from "./Direction.js";

class Pile {
  constructor(type, direction) {
    this._type = type;
    this._direction = Direction.assert(direction);
    let card = Card.assert("absent " + type);
    this._folded = true;
    this._cards = [];
  }

  get direction() {
    return this._direction;
  }

  get folded() {
    return this._folded;
  }

  get cards() {
    return this._cards;
  }

  get type() {
    return this._type;
  }

  get size() {
    return this._cards.length;
  }

  get top() {
    return this._cards[this.size - 1] ?? Card.assert("absent " + this.type);
  }

  get(i) {
    return this._cards[i] ?? (i === 0 ? this.top : null);
  }

  pop() {
    return this._cards.pop();
  }

  unfold() {
    this._folded = false;
  }

  fold() {
    this._folded = true;
  }

  shuffle() {
    this.shuffleArray(this._cards);
  }

  put(card) {
    if (card instanceof Card) {
      this._cards.push(card);
    } else if (typeof (card) === "string") {
      this._cards.push(Card.assert(card));
    } else if (typeof (card) === "array") {
      card.forEach(function (c, index) {
        this.put(c);
      });
    } else {
      for (var k in card) {
        this.put(card[k]);
      }
    }
  }

  putUnder(card) {
    if (card instanceof Card) {
      this._cards.push(card);
    } else if (typeof (card) === "string") {
      this._cards.push(Card.assert(card));
    } else if (typeof (card) === "array") {
      card.forEach(function (c, index) {
        this.putUnder(c);
      });
    } else {
      for (var k in card) {
        this.putUnder(card[k]);
      }
    }
  }

  remove(card) {
    if (card instanceof Card) {
      this.removeOne(card.Name);
    } else if (typeof (card) === "string") {
      this.removeOne(card);
    } else if (typeof (card) === "array") {
      card.forEach(function (c, index) {
        this.removeOne(c);
      });
    } else {
      for (var k in card) {
        this.removeOne(card[k]);
      }
    }
  }

  removeOne(name) {
    if (name instanceof Card) {
      name = name.Name;
    }
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
