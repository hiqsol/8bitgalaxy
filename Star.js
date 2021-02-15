class Star {
  constructor(field, x, y) {
    this.field = field;
    this.x = x;
    this.y = y;
    this.ships = [null, null, null, null];
    this.bases = [null, null, null];
    this.heroes = [null, null, null, null];
    this.colonies = [null, null, null];
  }

  get pos() {
    return new Pos(board.ctx, 5, 5, board.m);
  }

  add(card, slot) {
    var card = this.field.board.card(card);
    if (! card) {
      return this;
    }
    if (card.isBase) {
      this.bases[slot] = card;
    }
    if (card.isShip) {
      this.ships[slot] = card;
    }
    if (card.isColony) {
      this.colonies[slot] = card;
    }
    if (card.isHero) {
      this.heroes[slot] = card;
    }
    return this;
  }

  base(slot) {
    return this.bases[slot];
  }
  hero(slot) {
    return this.heroes[slot];
  }
  ship(slot) {
    return this.ships[slot];
  }
  colony(slot) {
    return this.colonies[slot];
  }

}

export default Star;
