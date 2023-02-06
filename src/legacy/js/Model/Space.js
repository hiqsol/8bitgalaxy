import Star from "./Star.js";
import Bearing from "./Bearing.js";
import Assert from "./Assert.js";

// Interstellar Space aka ISM - Interstellar Medium
class Space {
  constructor(star, bearing, type) {
    this._star = Star.assert(star);
    this._bearing = Bearing.assert(bearing);
    this._id = 'ism' +star.y + star.x + bearing.oclock;
    this._type = type;
  }

  toJSON() {
    return {
      '_class':     'Space',
      'bearing':    this._bearing,
      'type':       this._type,
    }
  }

  static matrixFromJSON(json, star) {
    Assert.assert(Array.isArray(json), "must be matrix of Spaces", json);
    let stars = [];
    for (const k in json) {
      stars[k] = Space.arrayFromJSON(json[k], star);
    }
    return stars;
  }

  static arrayFromJSON(json, star) {
    Assert.assert(Array.isArray(json), "must be array of Spaces", json);
    let stars = [];
    for (const k in json) {
      stars[k] = Space.fromJSON(json[k], star);
    }
    return stars;
  }

  static fromJSON(json, star) {
    Assert.assert(json._class == 'Space', "wrong class hydrating Space", json);
    return new Space(star, json.bearing, json.type);
  }

  get x()       { return this._x; }
  get y()       { return this._y; }
  get id()      { return this._id; }
  get star()    { return this._star; }
  get bearing() { return this._bearing; }
  get type()    { return this._type; }

  static assert(sample) {
    if (sample instanceof(Space)) {
      return sample;
    }
    if (sample instanceof HTMLElement) {
      return Space.assert(sample.id);
    }
    if (typeof(sample) === 'string') {
      return Space.fromString(sample);
    }
    Assert.error('not a Space', sample);
  }
}

export default Space;
