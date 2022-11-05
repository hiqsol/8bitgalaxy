import Card from "./Card.js";
import Assert from "./Assert.js";

class Star {
  constructor(field, y, x) {
    this.field = field;
    this.y = y;
    this.x = x;
    this.ships = [null, null, null, null, null];
    this.heroes = [null, null, null, null];
    this.estates = [null, null, null, null, null];
  }

  ship(slot)    { return this.ships[slot]     ?? null; }
  hero(slot)    { return this.heroes[slot]    ?? null; }
  estate(slot)  { return this.estates[slot]   ?? null; }

  put(card, slot) {
    card = Card.assert(card);
    if (card.isShip) {
      return this.putToSlot(card, slot, this.ships);
    } else if (card.isHero) {
      return this.putToSlot(card, slot, this.heroes);
    } else if (card.isBase) {
      return this.putToSlot(card, slot, this.estates);
    } else if (card.isColony) {
      return this.putToSlot(card, slot, this.estates);
    }
    Assert.error('wrong card type', card);
  }

  putToSlot(card, slot, slots) {
    if (slots[slot] === undefined) {
      Assert.error('non-existent slot', slot);
    }
    if (slots[slot] !== null) {
      Assert.error('slot already taken', slot);
    }
    slots[slot] = card;
    return this;
  }
}

export default Star;
