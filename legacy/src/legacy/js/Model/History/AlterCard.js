import CardEffect from "./CardEffect.js";

class AlterCard extends CardEffect {
  constructor(card) {
    super(card);
  }

  perform(performer) {
    let card = this.card;
    let cl = performer.elem(card).classList;
    if (!cl.contains('Alterable')) return false;
    cl.toggle('Altered');
    card.setAltered(cl.contains('Altered'));
    return true;
  }

  static fromJSON(json) {
    return new AlterCard(json.card);
  }
}

export default AlterCard;
