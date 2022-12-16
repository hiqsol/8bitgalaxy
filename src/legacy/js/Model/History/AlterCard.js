import CardEffect from "./CardEffect.js";

class AlterCard extends CardEffect {
  constructor(card) {
    super(card);
  }

  static fromJSON(json) {
    return new AlterCard(json.card);
  }
}

export default AlterCard;
