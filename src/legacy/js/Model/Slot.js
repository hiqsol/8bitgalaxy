import Card from "./Card.js";
import Assert from "./Assert.js";

class Slot {
  constructor(name, card = null) {
    this._name = name;
    this._card = card ? Card.assert(card) : null;
  }

  toJSON() {
    return {
      '_class':     'Slot',
      'name':       this._name,
      'card':       this._card,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'Slot', "wrong class hydrating Slot", json);
    let card = json.card ? Card.fromJSON(json.card) : null;
    return new Slot(json.name, card);
  }

  static arrayFromJSON(json) {
    Assert.assert(Array.isArray(json), "must be array of Slots", json);
    let piles = [];
    for (const k in json) {
      piles[k] = Slot.fromJSON(json[k]);
    }
    return piles;
  }

  get card()              { return this._card; }
  get name()              { return this._name; }
  isName(name)            { return this._name === name; }

  put(card) {
    Assert.assert(!this._card, 'can not put second card to Slot', this);
    this._card = Card.assert(card);
  }

  pop(card) {
    Assert.assert(this._card, 'no card in Slot to pop', this);
    let res = this._card;
    if (card) {
      Assert.assert(res.Name === card, 'popped card is not '+card, res);
    }
    this._card = null;
    return res;
  }
}

export default Slot;
