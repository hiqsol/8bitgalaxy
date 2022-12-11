import Card from "./Card.js";
import Assert from "./Assert.js";

class Pile {
  constructor(parent, name) {
    this._parent = parent;
    this._name = name;
    this._id = parent.id + '.' + (name || 'Pile');
    this._folded = true;
    this._cards = [];
  }

  toJSON() {
    return {
      '_class':     'Pile',
      'name':       this._name,
      'cards':      this._cards,
    }
  }

  static fromJSON(json, parent) {
    Assert.assert(json._class == 'Pile', "wrong class hydrating Pile", json);
    let pile = new Pile(parent, json.name);
    if (json.cards) pile._cards = Card.arrayFromJSON(json.cards);
    return pile;
  }

  static arrayFromJSON(json, parent) {
    Assert.assert(Array.isArray(json), "must be array of Piles", json);
    let piles = [];
    for (const k in json) {
      piles[k] = json[k] ? Pile.fromJSON(json[k], parent) : null;
    }
    return piles;
  }

  get id()        { return this._id; }
  get folded()    { return this._folded; }
  get cards()     { return this._cards; }
  get name()      { return this._name; }
  get size()      { return this._cards.length; }
  get top()       { return this._cards[this.size - 1] ?? null; }

  get(i) {
    return this._cards[i] ?? (i === 0 ? this.top : null);
  }

  pop(card=null) {
    if (card) {
      card = Card.assert(card);
      let res = this._cards.pop();
      Assert.assert(res.id === card.id, 'popped card is not '+card.id, res.id);
      return res;
    } else {
      return this._cards.pop();
    }
  }

  unfold()  { this._folded = false; }
  fold()    { this._folded = true; }
  shuffle() { this.shuffleArray(this._cards); }

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

  removeAll() {
    this._cards = [];
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
    this._cards = this._cards.filter( e => e.Name !== name );
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
