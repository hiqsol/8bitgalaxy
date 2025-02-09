import CardEffect from "./CardEffect.js";

class TurnCard extends CardEffect {
  constructor(card, value = null) {
    super(card);
    this._value = value;
  }

  get value()       { return this._value; }

  perform(performer) {
    let value = this.value;
    let card = this.card;
    let cl = performer.elem(card).classList;
    if (value === null) {
      value = !cl.contains('Turned');
    }
    if (value) {
      cl.add('Turned');
    } else {
      cl.remove('Turned');
    }
    card.setTurned(value);
    return true;
  }

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
