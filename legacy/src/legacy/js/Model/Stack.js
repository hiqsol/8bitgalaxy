import Card from "./Card.js";
import Pile from "./Pile.js";
import Assert from "./Assert.js";

class Stack extends Pile {
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
}

export default Stack;
