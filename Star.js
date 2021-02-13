class Star {
  constructor(field, x, y) {
    this.field = field;
    this.x = x;
    this.y = y;
    this.ships = [];
    this.bases = [];
    this.heroes = [];
    this.colonies = [];
  }

  get pos() {
    return new Pos(board.ctx, 5, 5, board.m);
  }

  add(card, slot) {
    var card = this.field.board.card(card);
    if (! card) {
      return;
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
