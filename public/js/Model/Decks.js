import Spec from "./Spec.js";
import aCard from "./aCard.js";

class Decks {
  static get(name) {
    let all = Decks.all();
    let specs = all[name.toLowerCase()];
    return new aCard(Decks.parseCard(name, specs));
  }

  static parseCard(name, specs) {
    let type = typeof(specs);
    if (type === 'object') {
      return Object.assign(Decks.parseName(name), specs);
    }
    if (type === 'string') {
      return Object.assign(Decks.parseName(name), Decks.parseSpecs(specs));
    }
    return Decks.parseName(name);
  }

  static parseName(name) {
    let res = { Name: name };
    if (name.includes('-')) {
      res = Object.assign(res, Decks.parseNameParts(name));
    }
    return res;
  }

  static parseNameParts(name) {
    let ps = name.split('-');
    let [klass, level] = Decks.parseSimpleAction(ps[2]);
    return {
      Race:     ps[0],
      Type:     ps[1],
      Klass:    klass,
      Level:    level,
      [klass]:  level,
    };
  }

  static parseSpecs(specs) {
    let ps = specs.split(',');
    let res = {};
    ps.forEach(value => Object.assign(res, Decks.parseAction(value)));
    return res;
  }

  static parseAction(action) {
    if (action.length === 2) {
      let [klass, value] = Decks.parseSimpleAction(action);
      return {[klass]: value};
    }
    let f = action.charAt(0).toLowerCase();
    let subaction = action.substring(1, 3);
    if (f === 'u') {
      let [klass, value] = Decks.parseSimpleAction(subaction);
      return {
        'UtilizationKlass': klass,
        'UtilizationValue': value,
      };
    }
    if (f === 'c') {
      return { [Spec.Cooperation]: Number(action.charAt(2)) };
    }
    if (f === 'a') {
      return { [Spec.Alternative]: subaction };
    }
    return {};
  }

  static parseSimpleAction(action) {
    let t = action.charAt(0).toLowerCase();
    let n = action.charAt(1).toLowerCase();
    if (isNaN(n)) {
      [t, n] = [n, t];
    }
    return [
      Resources[t] ?? '',
      Number(n),
    ];
  }

  static all() {
    let src = Decks.allAnyCase();
    return Object.keys(src).reduce(function (dst, key) {
      dst[key.toLowerCase()] = src[key];
      return dst;
    }, {});
  }

  static allAnyCase() {
    return {
      'AI-Hero-1s':         '',
      'AI-Hero-2s':         'a1p',
      'AI-Hero-2a':         'a1p',
      'AI-Ship-2a':         'u2s',
      'AI-Base-7a':         'u5p',
      'AI-Base-7c':         'u5p,co2',
      'AI-Base-6c':         'a5p',
      'AI-Colony-4p':       'a3s',

      'Human-Ship-1a':      '',
      'Human-Ship-1c':      'u2s',
      'Human-Ship-1s':      '',
      'Human-Ship-1p':      '',

      'Human-Ship-2a':      'a1s',
      'Human-Ship-3s':      'a2p',
      'Human-Ship-4s':      'a3a',

      'Human-Hero-1a':      'a2a',
      'Human-Hero-1c':      'a2c',
      'Human-Hero-1s':      'a2s',
      'Human-Hero-1p':      'a2p',

      'Human-Hero-3a':      'a4s',
      'Human-Hero-3c':      'a4c',
      'Human-Hero-3s':      'a4s',
      'Human-Hero-3p':      'a4p',

      'Human-Base-3a':      '',
      'Human-Base-3c':      '',
      'Human-Base-3s':      '',
      'Human-Base-3p':      '',

      'Human-Base-6c':      'a5a',
      'Human-Base-7a':      'u5p',
      'Human-Base-7c':      'u5p,co2',
      'Human-Base-5s':      'u3p',

      'Human-Colony-4a':    'a3c',
      'Human-Colony-4c':    'u3s',
      'Human-Colony-4s':    'u3p',
      'Human-Colony-4p':    'a3a',

      'Human-Colony-5s':    'a4p',
      'Human-Colony-6P':    '1s',

      'Human-Tech-4a':      '1a',
      'Human-Tech-4c':      '1c',
      'Human-Tech-4s':      '1s',
      'Human-Tech-4p':      '1p',

      'Base':               { Type: 'Base', },
      'Hero':               { Type: 'Hero', },
      'Ship':               { Type: 'Ship', },
      'Colony':             { Type: 'Colony', },

      'Missions':           { Type: 'Other' },
      'Assets':             { Type: 'Other' },
      'Techs':              { Type: 'Other' },
      'Hand':               { Type: 'Other' },
      'Reserve':            { Type: 'Other' },
      'Discard':            { Type: 'Other' },
      'Scrap':              { Type: 'Other' },
      'Factory':            { Type: 'Other' },
      'Research':           { Type: 'Other', Name: 'R & D' },
      'Ideas':              { Type: 'Other' },
    }
  }
}

const Resources = Object.freeze({
  d:  'Defense',
  a:  'Attack',
  c:  'Colonization',
  s:  'Science',
  p:  'Production',
})

export default Decks;
