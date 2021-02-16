import Star from "./Star.js";
import Deck from "./Deck.js";
import Field from "./Field.js";

class Board {
  constructor() {
    this._field = new Field(this);
    this._deck = new Deck(this);
  }

  get deck() {
    return this._deck;
  }

  get field() {
    return this._field;
  }

  star(x, y) {
    return this.field.star(x, y);
  }

  card(name) {
    return this._deck.get(name);
  }
}

export default Board;
