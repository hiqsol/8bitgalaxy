import Card from "./Card.js";
import Slot from "./Slot.js";
import Type from "./Type.js";
import Direction from "./Direction.js";
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

  slots() {
    return [
      new Slot(this.estate(0), Type.Base, 0, 4),
      new Slot(this.estate(1), Type.Base, 0, 5),
      new Slot(this.estate(2), Type.Base, 0, 6),
      new Slot(this.estate(3), Type.Base, 0, 7),
      new Slot(this.estate(4), Type.Base, 0, 8),

      new Slot(this.ship(0), Type.Ship, 8, 2),
      new Slot(this.ship(1), Type.Ship, 8, 3),
      new Slot(this.ship(2), Type.Ship, 8, 4),
      new Slot(this.ship(3), Type.Ship, 8, 5),
      new Slot(this.ship(4), Type.Ship, 8, 6),

      new Slot(this.hero(0), Type.Hero, 9, 8),
      new Slot(this.hero(1), Type.Hero, 9, 9),
    ];
  }
}

export default Star;
