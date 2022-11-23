import Card from "./Card.js";
import Pile from "./Pile.js";
import Type from "./Type.js";
import Slot from "./Slot.js";
import Slots from "./Slots.js";
import Direction from "./Direction.js";
import Assert from "./Assert.js";

class Star {
  constructor(field, y, x) {
    this._field = field;
    this._y = y;
    this._x = x;
    this._space = new Pile('', Direction.LeftToRight);
    this._ships = new Slots(Type.Ship, 5);
    this._heroes = new Slots(Type.Hero, 4);
    this._estates = new Slots(Type.Base, 5);
  }

  toJSON() {
    return {
      '_class':     'Star',
      'x':          this._x,
      'y':          this._y,
      'space':      this._space,
      'ships':      this._ships,
      'heroes':     this._heroes,
      'estates':    this._estates,
    }
  }

  static matrixFromJSON(json, field) {
    Assert.assert(Array.isArray(json), "must be matrix of Stars", json);
    let stars = [];
    for (const k in json) {
      stars[k] = Star.arrayFromJSON(json[k], field);
    }
    return stars;
  }

  static arrayFromJSON(json, field) {
    Assert.assert(Array.isArray(json), "must be array of Stars", json);
    let stars = [];
    for (const k in json) {
      stars[k] = Star.fromJSON(json[k], field);
    }
    return stars;
  }

  static fromJSON(json, field) {
    Assert.assert(json._class == 'Star', "wrong class hydrating Star", json);
    let star = new Star(field, json.y, json.x);
    if (json.space) star._space = Pile.fromJSON(json.space);
    if (json.ships) star._ships = Slots.fromJSON(json.ships);
    if (json.heroes) star._heroes = Slots.fromJSON(json.heroes);
    if (json.estates) star._estates = Slots.fromJSON(json.estates);
    return star;
  }

  get x()       { return this._x; }
  get y()       { return this._y; }
  get field()   { return this._field; }
  get space()   { return this._space; }
  get ships()   { return this._ships; }
  get heroes()  { return this._heroes; }
  get estates() { return this._estates; }
  ship(slot)    { return this._ships[slot]     ?? null; }
  hero(slot)    { return this._heroes[slot]    ?? null; }
  estate(slot)  { return this._estates[slot]   ?? null; }

  put(card, slot) {
    if (card.isShip) {
      this._ships.put(card, slot);
    } else if (card.isHero) {
      this._heroes.put(card, slot);
    } else if (card.isBase) {
      this._estates.put(card, slot);
    } else if (card.isColony) {
      this._estates.put(card, slot);
    } else {
      Assert.error('wrong card type', card);
    }
    return this;
  }
}

export default Star;
