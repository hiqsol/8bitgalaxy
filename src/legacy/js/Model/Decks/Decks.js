import aCard from "../aCard.js";
import Specs from "../Specs.js";
import Human from "./Human.js";
import Alien from "./Alien.js";
import Other from "./Other.js";

class Decks {
  static get(name) {
    name = Specs.normalizeName(name);
    return Decks.all()[name.toLowerCase()];
  }

  static getCard(name) {
    return new aCard(Decks.get(name));
  }

  static _all = undefined;
  static all() {
    if (Decks._all === undefined) {
      let src = Decks.allAnyCase();
      Decks._all = Object.keys(src).reduce(function (dst, name) {
        let key = name.toLowerCase();
        let specs = Specs.fromNameAndSpecs(name, src[name]);
        let alt = specs.Alt;
        dst[key] = specs;
        if (alt) {
          dst[alt.LowerName] = alt;
        }
        return dst;
      }, {});
      Decks.copyCards(Decks._all, 'Human', 'Martian');
      console.log(Decks._all);
    }
    return Decks._all;
  }

  static copyCards(cards, src, dst) {
    for (const key in cards) {
      if (key.startsWith(src.toLowerCase()+'-')) {
        let copy = Decks.copyCard(cards[key], dst);
        Decks._all[copy.LowerName] = copy;
      }
    }
  }

  static copyCard(specs, race) {
    let res = new Specs();
    res.setSpecs(specs); // clone
    res.setRace(race);
    return res;
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
