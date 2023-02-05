import Card from "./Card.js";
import Pile from "./Pile.js";
import Type from "./Type.js";
import Slot from "./Slot.js";
import Space from "./Space.js";
import Slots from "./Slots.js";
import Assert from "./Assert.js";

class Star {
  constructor(field, y, x) {
    this._field = field;
    this._id = 'S' + y + x;
    this._y = y;
    this._x = x;
    this._ipm = new Pile(this, ''); // Interplanetary Medium
    this._ships = new Slots(this, Type.Ship, 5);
    this._heroes = new Slots(this, Type.Hero, 4);
    this._estates = new Slots(this, Type.Base, 5);
  }

  toJSON() {
    return {
      '_class':     'Star',
      'x':          this._x,
      'y':          this._y,
      'ipm':        this._ipm,
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
    if (json.ipm) star._ipm = Pile.fromJSON(json.ipm, star);
    if (json.ships) star._ships = Slots.fromJSON(json.ships, star);
    if (json.heroes) star._heroes = Slots.fromJSON(json.heroes, star);
    if (json.estates) star._estates = Slots.fromJSON(json.estates, star);
    return star;
  }

  get x()       { return this._x; }
  get y()       { return this._y; }
  get id()      { return this._id; }
  get field()   { return this._field; }
  get ipm()     { return this._ipm; }
  get ships()   { return this._ships; }
  get heroes()  { return this._heroes; }
  get estates() { return this._estates; }
  ship(slot)    { return this._ships[slot]     ?? null; }
  hero(slot)    { return this._heroes[slot]    ?? null; }
  estate(slot)  { return this._estates[slot]   ?? null; }

  space(course) {
    var adds = {
      'S00': [2, 10, 12],
      'S01': [2,  4, 12],
      'S10': [8, 10, 12],
      'S12': [2,  4,  6],
      'S20': [6,  8, 10],
      'S21': [4,  6,  8],
    };

    var allSkips = {
      'S00': [1, 9, 11],
      'S01': [1, 3, 11],
      'S10': [7, 9, 11],
      'S12': [1, 3, 5],
      'S20': [5, 7, 9],
      'S21': [3, 5, 7],
    };
    var skips = allSkips[this.id] ?? [];
    if (skips.includes(course)) return null;
    return new Space(this, course, 1);
  }

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

  static assert(sample) {
    if (sample instanceof(Star)) {
      return sample;
    }
    if (sample instanceof HTMLElement) {
      return Star.assert(sample.id);
    }
    if (typeof(sample) === 'string') {
      return Star.fromString(sample);
    }
    Assert.error('not a Star', sample);
  }
}

export default Star;
