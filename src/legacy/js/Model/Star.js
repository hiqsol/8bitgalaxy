import Pile from "./Pile.js";
import Type from "./Type.js";
import Space from "./Space.js";
import Slots from "./Slots.js";
import Counter from "./Tokens/Counter.js";
import Bearing from "./Bearing.js";
import Assert from "./Assert.js";

class Star {
  constructor(field, y, x) {
    this._field = field;
    this._id = 'S' + y + x;
    this._y = y;
    this._x = x;
    this._counter = new Counter(this, '', 0);
    this._spaces = this.createSpaces();
    this._ipm = new Pile(this, ''); // Interplanetary Medium
    this._actors = new Slots(this, Type.Ship, 5);
    this._structures = new Slots(this, Type.Base, 5);
  }

  toJSON() {
    return {
      '_class':     'Star',
      'x':          this._x,
      'y':          this._y,
      'ipm':        this._ipm,
      'actors':     this._actors,
      'structures': this._structures,
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
    if (json.actors) star._actors = Slots.fromJSON(json.actors, star);
    if (json.structures) star._structures = Slots.fromJSON(json.structures, star);
    return star;
  }

  get x()           { return this._x; }
  get y()           { return this._y; }
  get id()          { return this._id; }
  get field()       { return this._field; }
  get ipm()         { return this._ipm; }
  get actors()      { return this._actors; }
  get structures()  { return this._structures; }
  get spaces()      { return this._spaces; }
  get counter()     { return this._counter; }
  actor(slot)       { return this._actors[slot] ?? null; }
  structure(slot)   { return this._structures[slot] ?? null; }

  space(course) { return this._spaces[course]  ?? null; }

  findSpace(bearing) {
    bearing = Bearing.assert(bearing);
    let space = this.space(bearing.oclock);
    if (space) return space;
    let star = this.findStar(bearing);
    return star.space(bearing.reversed.oclock);
  }
  findStar(bearing) {
    bearing = Bearing.assert(bearing);
    return this.nextStar(bearing.xStep, bearing.yStep);
  }
  nextStar(dx, dy) {
    const sign = dx>0 ? 1 : -1;
    if (dx == +0.5) dx = (this.y%2 == 1 ?  0 : 1);
    if (dx == -0.5) dx = (this.y%2 == 1 ? -1 : 0);
    let nx = this.x + dx;
    let ny = this.y + dy;
    //console.log('x: ', this.x, dx, nx);
    //console.log('y: ', this.y, dy, ny);
    return this.field.star(ny, nx);
  }

  initAllSpaces() {
    let spaces = [null];
    for (let i = 1; i <= 12; i++) {
      spaces[i] = this.createSpace(i);
    }
    this._spaces = spaces;
  }
  createSpaces() {
    let spaces = [null];
    for (let i = 1; i <= 12; i++) {
      spaces[i] = this.createSpaceIfNeeded(i);
    }
    return spaces;
  }
  createSpaceIfNeeded(bearing) {
    var allAdds = {
      'S00': [2, 10, 12],
      'S01': [2,  4, 12],
      'S10': [8, 10, 12],
      'S12': [2,  4,  6],
      'S20': [6,  8, 10],
      'S21': [4,  6,  8],
    };

    var adds = allAdds[this.id] ?? [];
    if (bearing %2 == 1 || adds.includes(bearing)) {
      return this.createSpace(bearing);
    }
    return null;
  }
  createSpace(bearing) {
    return new Space(this, bearing, this.random(6));
  }

  random(range) {
    return 1 + Math.floor(Math.random() * range);
  }

  put(card, slot) {
    if (card.isActor) {
      this._actors.put(card, slot);
    } else if (card.isStructure) {
      this._structures.put(card, slot);
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
