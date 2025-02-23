import aCard from "../aCard.js";
import Specs from "../Specs.js";
import Human from "./Human.js";
import Alien from "./Alien.js";
import AI from "./AI.js";
import Other from "./Other.js";

class Decks {
  static get(name) {
    name = Specs.normalizeName(name);
    let all = Decks.all();
    let specs = all[name.toLowerCase()];
    return Specs.fromNameAndSpecs(name, specs);
  }

  static getCard(name) {
    return new aCard(Decks.get(name));
  }

  static _all = undefined;
  static all() {
    if (Decks._all === undefined) {
      let src = Decks.allAnyCase();
      Decks._all = Object.keys(src).reduce(function (dst, key) {
        dst[key.toLowerCase()] = src[key];
        return dst;
      }, {});
      Decks.copyCards(src, 'Human', 'Martian');
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

  static old_all() {
    let src = Decks.allAnyCase();
    return Object.keys(src).reduce(function (dst, key) {
      dst[key.toLowerCase()] = src[key];
      return dst;
    }, {});
  }

  static allAnyCase() {
    let human = Human.cards();
    let alien = Alien.cards();
    //let ai = AI.cards();
    let other = Other.cards();
    return {...human, ...alien, ...other};
  }
}

export default Decks;
