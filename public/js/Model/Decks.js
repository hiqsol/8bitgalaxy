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
      return specs;
    }
    if (type === 'string') {
      let res = Object.assign(Decks.parseName(name), Decks.parseSpecs(specs))
      return res;
    }
    return Decks.parseName(name);
  }

  static parseName(name) {
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
      let [type, value] = Decks.parseSimpleAction(action);
      return {[type]: value};
    }
    let f = action.charAt(0).toLowerCase();
    if (f === 'u') {
      let [type, value] = Decks.parseSimpleAction(action.substring(1,3));
      return {
        'UtilizationValue': value,
        'UtilizationType': type,
      };
    }
    if (f === 'c') {
      return {
        'Cooperation': Number(action.charAt(2)),
      }
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

      'Human-Hero-1s':      '',
      'Human-Hero-1c':      '',
      'Human-Hero-2a':      'a1s',
      'Human-Base-6c':      'a5a',
      'Human-Base-7a':      'u5p',
      'Human-Base-7c':      'u5p,co2',
      'Human-Base-5s':      'u3p',
      'Human-Colony-4p':    'a3c',
      'Human-Colony-5s':    'a4p',
      'Human-Colony-6P':    '1s',
      'Human-Ship-1c':      'u2s',
      'Human-Ship-2a':      'a1s',
      'Human-Ship-3S':      'a2p',
      'Human-Ship-4S':      'a3a',
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
