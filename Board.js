import Star from "./Star.js";
import Deck from "./Deck.js";
import Field from "./Field.js";

class Board {
  constructor() {
    this.field = new Field(this);
    this.deck = new Deck(this);
  }

  get pos() {
    return new Pos(table.ctx, 1, 1, 50)
  }

  star(x, y) {
    return this.field.star(x, y);
  }

  card(name) {
    return this.deck.get(name);
  }

  draw(ctx) {
    this.ctx = ctx;
    this.card.draw();
  }
}

export default Board;
