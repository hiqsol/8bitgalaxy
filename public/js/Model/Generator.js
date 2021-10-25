import Type from "./Type.js";
import aCard from "./aCard.js";
import Klass from "./Klass.js";

class Generator {
  constructor(){
    this._gens = {}
    this.add('Human','Ship', 'Base', 'Colony');
    this.add('AI','Ship', 'Base', 'Colony');
  }

  add(race) {
    this._gens[race] = new GenDeck(race);
  }

  all() {
    let res = {}
    for (const race in this._gens) {
      Object.assign(res, this._gens[race].all());
    }
    return res;
  }

  stats() {
    let all = this.all();
  }
}

class GenDeck {
  constructor(race) {
    this._race = race;
    this._p1 = 'A';
    this._p2 = 'S';
    this._p3 = 'P';
    this._p4 = 'C';
  }

  all() {
    let res = {};
    Object.assign(res, this.colonies());
    Object.assign(res, this.bases());
    Object.assign(res, this.ships());
    Object.assign(res, this.heroes());
    console.log('GeneratorALL',res)
    return res;
  }

  colonies() {
    let res = {};
    for (const klass in Klass.Letters) {
      res[this.colony(3, klass)] = '';
      res[this.colony(4, klass)] = '';
    }
    for (const klass of [this._p1, this._p2]) {
      res[this.colony(5, klass)] = 'a6' + klass;
      res[this.colony(6, klass)] = 'a5' + klass;
      res[this.colony(7, klass)] = 'a8' + klass;
      res[this.colony(8, klass)] = 'a7' + klass;
    }
    return res;
  }

  bases() {
    let res = {};
    for (const klass in Klass.Letters) {
      res[this.base(3, klass)] = '';
      res[this.base(4, klass)] = '';
    }
    for (const klass of [this._p1, this._p2]) {
      res[this.base(5, klass)] = 'a6' + klass;
      res[this.base(6, klass)] = 'a5' + klass;
      res[this.base(7, klass)] = 'a8' + klass;
      res[this.base(8, klass)] = 'a7' + klass;
    }
    return res;
  }

  ships() {
    let res = {};
    for (const klass in Klass.Letters) {
      res[this.ship(1, klass)] = '';
      res[this.ship(2, klass)] = '';
      res[this.ship(3, klass)] = 'a4' + klass;
      res[this.ship(4, klass)] = 'a3' + klass;
      // res[this.ship(1, klass)] = '' + klass;
    }
    for (const klass of [this._p1, this._p2]) {
      res[this.ship(5, klass)] = 'a6' + klass;
      res[this.ship(6, klass)] = 'a5' + klass;
      res[this.ship(7, klass)] = 'a8' + klass;
      res[this.ship(8, klass)] = 'a7' + klass;
    }
    return res;
  }

  heroes() {
    let res = {};

    for (const klass in Klass.Letters) {
      res[this.hero(1, klass)] = 'a2' + klass;
      res[this.hero(2, klass)] = 'a1' + klass;
      res[this.hero(3, klass)] = 'a4' + klass;
      res[this.hero(4, klass)] = 'a3' + klass;
    }
    for (const klass of [this._p1, this._p2]) {
      res[this.hero(5, klass)] = 'a6' + klass;
      res[this.hero(6, klass)] = 'a5' + klass;
      res[this.hero(7, klass)] = 'a8' + klass;
      res[this.hero(8, klass)] = 'a7' + klass;
    }
    return res;
  }

  colony(level, klass)   { return this.card(Type.Colony, level, klass); }
  base  (level, klass)   { return this.card(Type.Base, level, klass); }
  ship  (level, klass)   { return this.card(Type.Ship, level, klass); }
  hero  (level, klass)   { return this.card(Type.Hero, level, klass); }

  card(type, level, klass) {
    return aCard.buildName(this._race, type, level.toString()+klass);
  }
}

export default Generator;
