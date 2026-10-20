import Card from "./Card.js";
import Assert from "./Assert.js";

class Slot {
  constructor(parent, no, card = null) {
    this._parent = parent;
    this._no = no;
    this._id = parent.id + '.' + (no || '0');
    this._card = card ? Card.assert(card) : null;
  }

  toJSON() {
    return {
      '_class':     'Slot',
      'no':         this._no,
      'card':       this._card,
    }
  }

  static fromJSON(json, parent) {
    Assert.assert(json._class == 'Slot', "wrong class hydrating Slot", json);
    let card = json.card ? Card.fromJSON(json.card) : null;
    return new Slot(parent, json.no, card);
  }

  static arrayFromJSON(json, parent) {
    Assert.assert(Array.isArray(json), "must be array of Slot", json);
    let slots = [];
    for (const k in json) {
      slots[k] = Slot.fromJSON(json[k], parent);
    }
    return slots;
  }

  get id()                { return this._id; }
  get no()                { return this._no; }
  get card()              { return this._card; }
  get name()              { return this._parent.name; }
  get parent()            { return this._parent; }

  put(card) {
    Assert.assert(!this._card, 'can not put second card to Slot', this);
    this._card = Card.assert(card);
  }

  pop(card) {
    Assert.assert(this._card, 'no card in Slot to pop', this);
    let res = this._card;
    if (card) {
      card = Card.assert(card);
      Assert.assert(res.id === card.id, 'popped card is not '+card, res);
    }
    this._card = null;
    return res;
  }
}

export default Slot;
