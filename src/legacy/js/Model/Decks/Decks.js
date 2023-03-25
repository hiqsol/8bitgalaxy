import Pair from "../Pair.js";
import Prop from "../Prop.js";
import Type from "../Type.js";
import Spec from "../Spec.js";
import aCard from "../aCard.js";
import Klass from "../Klass.js";
import Specs from "../Specs.js";
import Assert from "../Assert.js";
import Human from "./Human.js";
import AI from "./AI.js";
import Other from "./Other.js";
import Generator from "./Generator.js";

class Decks {
  static get(name) {
    name = Decks.normalizeName(name);
    let all = Decks.all();
    let specs = all[name.toLowerCase()];
    return new Specs(Decks.parseCard(name, specs));
  }

  static getCard(name) {
    let res = Decks.get(name);
    //console.log(name);
    //console.log(res);throw new Error('die');
    return new aCard(Decks.get(name));
  }

  static _all = undefined;
  static all() {
    if (Decks._all === undefined) {
      //let src = (new Generator().all());
      let src = Decks.allAnyCase();
      Decks._all = Object.keys(src).reduce(function (dst, key) {
        dst[key.toLowerCase()] = src[key];
        return dst;
      }, {});
      Decks.copyCards(src, 'Human', 'Martian');
      Decks.copyCards(src, 'Human', 'Alien');
    }
    return Decks._all;
  }

  static copyCards(cards, src, dst) {
    src = src+'-';
    dst = dst+'-';
    for (const key in cards) {
      if (key.startsWith(src)) {
        Decks._all[key.replace(src, dst).toLowerCase()] = cards[key];
      }
    }
  }

  static parseCard(name, specs) {
    let type = typeof(specs);
    let res = Decks.parseName(name);
    if (!specs) {
      return res;
    }
    if (type === 'object') {
      return res.setSpecs(specs);
    }
    if (type === 'string') {
      return res.setSpecs(Decks.parseSpecs(specs));
    }
    Assert.error('wrong card specs', specs);
  }

  static parseName(name) {
    if (!name.includes('-')) {
      return new Specs(Spec.text(Prop.Name, name));
    }
    let ps = Decks.splitName(name);
    return new Specs({
      [Prop.Name]:          name,
      [Prop.Race]:          Pair.text(ps[0]),
      [Prop.Type]:          Pair.text(ps[1]),
      [Prop.Level]:         Pair.assert(ps[2]),
    });
  }

  static normalizeName(name) {
    let ps = Decks.splitName(name);
    return ps.join('-');
  }

  static splitName(name) {
    let ps = name.split('-');
    ps = ps.map(s => Decks.capitalize(s));
    let os = [...ps];
    if (ps.length == 2) {
      let str = ps[1];
      let type = Type.assert(str.charAt(0));
      ps[1] = type.name;
      ps[2] = str.substring(1);
    }
    return ps;
  }

  static capitalize(str) {
    if (str.length == 0) return str;
    return str[0].toUpperCase() + str.substr(1);
  }

  static parseSpecs(specs) {
    Assert.string(specs);
    let ps = specs.split(',');
    let res = new Specs();
    ps.forEach(value => res.setSpec(Decks.parseSpec(value)));
    return res;
  }

  static parseSpec(spec) {
    Assert.string(spec);
    let prefix = spec.charAt(0).toLowerCase();
    let pair = Pair.assert(spec.substring(1, 3));
    if (spec.length === 2) {
      pair = Pair.assert(spec);
      return new Spec(Prop.Power, pair);
    }
    if (spec.length > 4) {
      let k = spec.substring(2, 3);
      let klass = new Klass(k);
      let text = spec.substring(4);
      pair = new Pair(klass, text);
    }
    if (prefix === 'p') {
      return new Spec(Prop.Power, pair);
    }
    if (prefix === 'c') {
      if (pair.value.length === 1) {
        pair = new Pair(pair.klass, '+' + pair.value);
      }
      return new Spec(Prop.Cooperation, pair);
    }
    if (prefix === 'a') {
      return new Spec(Prop.Alternative, pair);
    }
    if (prefix === 'r') {
      return new Spec(Prop.Requires, pair);
    }
    Assert.error('wrong spec', spec);
  }

  static old_all() {
    let src = Decks.allAnyCase();
    return Object.keys(src).reduce(function (dst, key) {
      dst[key.toLowerCase()] = src[key];
      return dst;
    }, {});
  }

  static allAnyCase() {
    let human = Human.cards();
    let ai = AI.cards();
    let other = Other.cards();
    return {...human, ...ai, ...other};
  }
}

export default Decks;
