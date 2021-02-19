import Card from "./Home.js";

class Item {
  constructor(acard, state) {
    this._acard = acard;
    this._state = state;
  }

  get isVisible()   { return this._state === States.visible; }
  get aCard()       { return this._acard; }

  static visible(acard)  { return new Item(Deck.get(acard), States.visible); }
  static hidden(acard)   { return new Item(Deck.get(acard), States.hidden); }

  static assert(item) {
    if (! item instanceof(Item)) {
      throw new Error('not an item:' + typeof(item))
    }
    return item;
  }
}

const States = Object.freeze({
  hidden:   'hidden',
  visible:  'visible',
})

export default Item;
