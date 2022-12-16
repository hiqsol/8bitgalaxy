import CardEffect from "./CardEffect.js";

class TurnCard extends CardEffect {
  constructor(card) {
    super(card);
  }

  static fromJSON(json) {
    return new TurnCard(json.card);
  }
}

export default TurnCard;
