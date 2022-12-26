import CardEffect from "./CardEffect.js";

class TurnCard extends CardEffect {
  constructor(card, value = null) {
    super(card);
    this._value = value;
  }

  get value()       { return this._value; }

  undo() {
    if (this.value === null) {
      return this;
    }
    return new TurnCard(this.card, !this.value);
  }

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'card':       this.card.id,
      'value':      this.value,
    }
  }

  static fromJSON(json) {
    return new TurnCard(json.card, json.value);
  }
}

export default TurnCard;
