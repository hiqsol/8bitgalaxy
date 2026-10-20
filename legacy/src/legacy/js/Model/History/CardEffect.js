import Effect from "./Effect.js";
import Card from "../Card.js";
import Assert from "../Assert.js";

class CardEffect extends Effect {
  constructor(card) {
    super();
    this._card = Card.assert(card);
  }

  get card()        { return this._card; }

  undo() { return this; }

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'card':       this.card.id,
    }
  }

  static assert(sample) {
    if (sample instanceof(CardEffect)) {
      return sample;
    }
    Assert.error('wrong CardEffect '+typeof(sample), sample);
  }
}

export default CardEffect;
