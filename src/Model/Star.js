import Card from "./Card.js";
import Assert from "./Assert.js";

class Star {
  constructor(field, y, x) {
    this.field = field;
    this.y = y;
    this.x = x;
    this.ships = [null, null, null, null];
    this.bases = [null, null, null];
    this.heroes = [null, null, null, null];
    this.colonies = [null, null, null];
  }

  base(slot)    { return this.bases[slot]     ?? Card.AbsentBase; }
  hero(slot)    { return this.heroes[slot]    ?? Card.AbsentHero; }
  ship(slot)    { return this.ships[slot]     ?? Card.AbsentShip; }
  colony(slot)  { return this.colonies[slot]  ?? Card.AbsentColony; }

  removeCard(card) {
    if (card.isBase) {
      this.bases.reduce((acc, base, index) => {
        if(card===base) {acc[index] = null};
        return acc;
      }, this.bases);
    }
    else if (card.isShip) {
      this.ships.reduce((acc, ship, index) => {
        if(card===ship) {acc[index] = null};
        return acc;
      }, this.ships);
    }
    else if (card.isHero) {
      this.heroes.reduce((acc, hero, index) => {
        if(card===hero) {acc[index] = null};
        return acc;
      }, this.heroes);
    }
    else if (card.isColony) {
      this.colonies.reduce((acc, colony, index) => {
        if(card===colony) {acc[index] = null};
        return acc;
      }, this.colonies);
    }
  }

  put(card, slot) {
    card = Card.assert(card);
    card.setDestination(this);
    if (card.isBase) {
      return this.putToSlot(card, slot, this.bases);
    } else if (card.isShip) {
      return this.putToSlot(card, slot, this.ships);
    } else if (card.isHero) {
      return this.putToSlot(card, slot, this.heroes);
    } else if (card.isColony) {
      return this.putToSlot(card, slot, this.colonies);
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
