import Type from "./Type.js";


class Generator {
  constructor(){
    this._gens = {}
    this.add('Human');
    this.add('AI');
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
    this._p1 = 'a';
    this._p2 = 's';
    this._p3 = 'p';
    this._p4 = 'c';
  }

  all() {
    let res = {};
    Object.assign(res, this.heroes());
    return res;
  }

  heroes() {
    let res = {};

    for (const klass of [this._p1, this._p2]) {
      res[this.hero(1, klass)] = 'a2' + klass;
      res[this.hero(3, klass)] = 'a4' + klass;
      res[this.hero(5, klass)] = 'a6' + klass;
      res[this.hero(7, klass)] = 'a8' + klass;
    }
    for (const klass of [this._p3, this._p4]) {
      res[this.hero(1, klass)] = 'a2' + klass;
      res[this.hero(3, klass)] = 'a4' + klass;
    }

    return res;
  }

  hero(level, klass) {
    return this.card(Type.Hero, level, klass);
  }

  card(type, level, klass) {
    return this._race + '-' + type + '-' + level + klass;
  }
}

export default Generator;
