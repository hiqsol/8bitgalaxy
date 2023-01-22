import Pair from "./Pair.js";
import Prop from "./Prop.js";
import Type from "./Type.js";
import Spec from "./Spec.js";
import aCard from "./aCard.js";
import Klass from "./Klass.js";
import Specs from "./Specs.js";
import Assert from "./Assert.js";
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
    return {
      'Human-Ship-1a':      'p1a,c1a',
      'Human-Ship-1c':      'p1c,c1c',
      'Human-Ship-1p':      'p1p,c1p',
      'Human-Ship-1s':      'p1s,c1s',

      'Human-Ship-2a':      'a3p,p1a,c1a',
      'Human-Ship-2c':      'a3a,p1c,c1c',
      'Human-Ship-2p':      'a3s,p1p,c1p',
      'Human-Ship-2s':      'a3c,p1s,c1s',

      'Human-Ship-3a':      'a2c,p2a,c1a,r1a',
      'Human-Ship-3c':      'a2s,p2c,c1c,r1c',
      'Human-Ship-3p':      'a2a,p2p,c1p,r1p',
      'Human-Ship-3s':      'a2p,p2s,c1s,r1s',

      'Human-Ship-4a':      'a5c,p2a,c2a',
      'Human-Ship-4c':      'a5s,p2c,c2c',
      'Human-Ship-4p':      'a5a,p2p,c2p',
      'Human-Ship-4s':      'a5p,p2s,c2s',

      'Human-Ship-5a':      'a4p,p3a,c2a,r3a,r2p',
      'Human-Ship-5c':      'a4a,p3c,c2c,r3c,r2a',
      'Human-Ship-5p':      'a4s,p3p,c2p,r3p,r2s',
      'Human-Ship-5s':      'a4c,p3s,c2s,r3s,r2c',

      //'Human-Ship-6a':      '4a,c3a,a7s,r5a,r5s',
      //'Human-Ship-6c':      '4c,c3c,a7p,r5c,r5p',
      //'Human-Ship-6p':      '4p,c3p,a7a,r5p,r5a',
      //'Human-Ship-6s':      '4s,c3s,a7c,r5s,r5c',

      //'Human-Ship-7a':      '4a,c3a,a6p',
      //'Human-Ship-7c':      '4c,c3c,a6s',
      //'Human-Ship-7p':      '4p,c3p,a6c',
      //'Human-Ship-7s':      '4s,c3s,a6a',

      //'Human-Ship-8a':      '4a,c4a,r7a,r7c',
      //'Human-Ship-8c':      '4c,c4c,r7c,r7s',
      //'Human-Ship-8p':      '4p,c4p,r7p,r7a',
      //'Human-Ship-8s':      '4s,c4s,r7s,r7p',


      'Human-Hero-1a':      'a2a,p1a',
      'Human-Hero-1c':      'a2c,p1c',
      'Human-Hero-1p':      'a2p,p1p',
      'Human-Hero-1s':      'a2s,p1s',

      'Human-Hero-2a':      'a1a,p1a,c0a:1reco',
      'Human-Hero-2c':      'a1c,p1c,c0c:1efup',
      'Human-Hero-2p':      'a1p,p1p,c0p:1load',
      'Human-Hero-2s':      'a1s,p1s,c0s:1rang',

      'Human-Hero-3a':      'a4a,p0a:1/C,c0a:1reco',
      'Human-Hero-3c':      'a4c,p0c:1/C,c0c:1efup',
      'Human-Hero-3p':      'a4p,p0p:1/C,c0p:1load',
      'Human-Hero-3s':      'a4s,p0s:1/C,c0s:1rang',

      'Human-Hero-4a':      'a3a,p0a:1/C,c0a:2reco,r2a',
      'Human-Hero-4c':      'a3c,p0c:1/C,c0c:2efup,r2c',
      'Human-Hero-4p':      'a3p,p0p:1/C,c0p:2load,r2p',
      'Human-Hero-4s':      'a3s,p0s:1/C,c0s:2rang,r2s',

      'Human-Hero-5a':      'a6a,p0a:2/C,c0a:2reco',
      'Human-Hero-5c':      'a6c,p0c:2/C,c0c:2efup',
      'Human-Hero-5p':      'a6p,p0p:2/C,c0p:2load',
      'Human-Hero-5s':      'a6s,p0s:2/C,c0s:2rang',

      'Human-Hero-6a':      'a5a,p0a:2/C,c0a:3reco,r4a',
      'Human-Hero-6c':      'a5c,p0c:2/C,c0c:3efup,r4c',
      'Human-Hero-6p':      'a5p,p0p:2/C,c0p:3load,r4p',
      'Human-Hero-6s':      'a5s,p0s:2/C,c0s:3rang,r4s',

      //'Human-Hero-7a':      '7a,a8a,r6a',
      //'Human-Hero-7c':      '7c,a8c,r6c',
      //'Human-Hero-7p':      '7p,a8p,r6p',
      //'Human-Hero-7s':      '7s,a8s,r6s',

      //'Human-Hero-8a':      '8a,a7a',
      //'Human-Hero-8c':      '8c,a7c',
      //'Human-Hero-8p':      '8p,a7p',
      //'Human-Hero-8s':      '8s,a7s',


      'Human-Base-1a':      'a2a,p1n:milit',
      'Human-Base-1c':      'a2c,p1n: conv',
      'Human-Base-1p':      'a2p,p1n: conv',
      'Human-Base-1s':      'a2s,p1n:smart',

      'Human-Base-2a':      'a1a,p2a:milit',
      'Human-Base-2c':      'a1c,p2c: conv',
      'Human-Base-2p':      'a1p,p2p: conv',
      'Human-Base-2s':      'a1s,p2s:smart',

      'Human-Base-3a':      'a4a,p3n:+hand',
      'Human-Base-3c':      'a4c,p3n:+hero',
      'Human-Base-3p':      'a4p,p3n: +fac',
      'Human-Base-3s':      'a4s,p3n: +lab',

      'Human-Base-4a':      'a3a,p3a:+hand,r2a',
      'Human-Base-4c':      'a3c,p3c:+hero,r2c',
      'Human-Base-4p':      'a3p,p3p: +fac,r2p',
      'Human-Base-4s':      'a3s,p3s: +lab,r2s',

      'Human-Base-5a':      'a6s,p4n: fort',
      'Human-Base-5c':      'a6a,p4n:colab',
      'Human-Base-5p':      'a6c,p4n:hyper',
      'Human-Base-5s':      'a6p,p4n:espio',

      'Human-Base-6a':      'a5a,p4a: fort,r4a',
      'Human-Base-6c':      'a5c,p4c:colab,r4c',
      'Human-Base-6p':      'a5p,p4p:hyper,r4p',
      'Human-Base-6s':      'a5s,p4s:espio,r4s',

      //'Human-Base-7a':      '5a,c2a,a8p,r6a,r6p',
      //'Human-Base-7c':      '5c,c2c,a8a,r6c,r6a',
      //'Human-Base-7p':      '5p,c2p,a8s,r6p,r6s',
      //'Human-Base-7s':      '5s,c2s,a8c,r6s,r6c',

      //'Human-Base-8a':      '5a,c3a,a7c',
      //'Human-Base-8c':      '5c,c3c,a7s',
      //'Human-Base-8p':      '5p,c3p,a7a',
      //'Human-Base-8s':      '5s,c3s,a7p',


      'Human-Colony-1a':    'a2p,1a',
      'Human-Colony-1c':    'a2s,1c',
      'Human-Colony-1p':    'a2c,1p',
      'Human-Colony-1s':    'a2a,1s',

      'Human-Colony-2a':    'a1p,1a,c1a',
      'Human-Colony-2c':    'a1s,1c,c1c',
      'Human-Colony-2p':    'a1c,1p,c1p',
      'Human-Colony-2s':    'a1a,1s,c1s',

      'Human-Colony-3a':    'a4s,2a,c1a',
      'Human-Colony-3c':    'a4p,2c,c1c',
      'Human-Colony-3p':    'a4a,2p,c1p',
      'Human-Colony-3s':    'a4c,2s,c1s',

      'Human-Colony-4a':    'a3s,2a,c2a,r2a,r2s',
      'Human-Colony-4c':    'a3p,2c,c2c,r2c,r2p',
      'Human-Colony-4p':    'a3a,2p,c2p,r2p,r2a',
      'Human-Colony-4s':    'a3c,2s,c2s,r2s,r2c',

      'Human-Colony-5a':    'a6p,3a,c2a',
      'Human-Colony-5c':    'a6a,3c,c2c',
      'Human-Colony-5p':    'a6s,3p,c2p',
      'Human-Colony-5s':    'a6c,3s,c2s',

      'Human-Colony-6a':    'a5c,3a,c3a,r4a,r3c',
      'Human-Colony-6c':    'a5s,3c,c3c,r4c,r3s',
      'Human-Colony-6p':    'a5a,3p,c3p,r4p,r3a',
      'Human-Colony-6s':    'a5p,3s,c3s,r4s,r3p',

      //'Human-Colony-8a':    '4a,c3a,r7a,r7s',
      //'Human-Colony-8c':    '4c,c3c,r7c,r7p',
      //'Human-Colony-8p':    '4p,c3p,r7p,r7c',
      //'Human-Colony-8s':    '4s,c3s,r7s,r7a',

      'AI-Ship-1a':         '1a',
      'AI-Ship-1c':         '1c',
      'AI-Ship-1p':         '1p',
      'AI-Ship-1s':         '1s',

      'AI-Ship-2a':         '1a,c1a,a3c,r1a,r2p',
      'AI-Ship-2c':         '1c,c1c,a3s,r1c,r2a',
      'AI-Ship-2p':         '1p,c1p,a3a,r1p,r2s',
      'AI-Ship-2s':         '1s,c1s,a3p,r1s,r2c',

      'AI-Ship-3a':         '2a,c1a,a2p',
      'AI-Ship-3c':         '2c,c1c,a2a',
      'AI-Ship-3p':         '2p,c1p,a2s',
      'AI-Ship-3s':         '2s,c1s,a2c',

      'AI-Ship-4a':         '2a,c2a,a5p,r3a,r4c',
      'AI-Ship-4c':         '2c,c2c,a5a,r3c,r4s',
      'AI-Ship-4p':         '2p,c2p,a5s,r3p,r4a',
      'AI-Ship-4s':         '2s,c2s,a5c,r3s,r4p',

      'AI-Ship-5a':         '3a,c2a,a4c',
      'AI-Ship-5c':         '3c,c2c,a4s',
      'AI-Ship-5p':         '3p,c2p,a4a',
      'AI-Ship-5s':         '3s,c2s,a4p',

      'AI-Ship-6a':         '4a,c2a,a7s,r5a,r6s',
      'AI-Ship-6c':         '4c,c2c,a7p,r5c,r6p',
      'AI-Ship-6p':         '4p,c2p,a7a,r5p,r6a',
      'AI-Ship-6s':         '4s,c2s,a7c,r5s,r6c',

      'AI-Ship-7a':         '4a,c3a,a4c',
      'AI-Ship-7c':         '4c,c3c,a4s',
      'AI-Ship-7p':         '4p,c3p,a4a',
      'AI-Ship-7s':         '4s,c3s,a4p',

      'AI-Ship-8a':         '4a,c4a,r7a,r7c',
      'AI-Ship-8c':         '4c,c4c,r7c,r7s',
      'AI-Ship-8p':         '4p,c4p,r7p,r7a',
      'AI-Ship-8s':         '4s,c4s,r7s,r7p',


      'AI-Colony-2a':       '1a,a3c,r1a,r2c',
      'AI-Colony-2c':       '1c,a3p,r1c,r2p',
      'AI-Colony-2p':       '1p,a3s,r1p,r2s',
      'AI-Colony-2s':       '1s,a3a,r1s,r2a',

      'AI-Colony-3a':       '1a,c1a,a2s',
      'AI-Colony-3c':       '1c,c1c,a2a',
      'AI-Colony-3p':       '1p,c1p,a2c',
      'AI-Colony-3s':       '1s,c1s,a2p',

      'AI-Colony-4a':       '2a,c1a,a5p,r3a,r4s',
      'AI-Colony-4c':       '2c,c1c,a5s,r3c,r4a',
      'AI-Colony-4p':       '2p,c1p,a5c,r3p,r4c',
      'AI-Colony-4s':       '2s,c1s,a5a,r3s,r4p',

      'AI-Colony-5a':       '2a,c2a,a4s',
      'AI-Colony-5c':       '2c,c2c,a4a',
      'AI-Colony-5p':       '2p,c2p,a4c',
      'AI-Colony-5s':       '2s,c2s,a4p',

      'AI-Colony-6a':       '3a,c2a,a7s,r5a,r6p',
      'AI-Colony-6c':       '3c,c2c,a7a,r5c,r6s',
      'AI-Colony-6p':       '3p,c2p,a7c,r5p,r6a',
      'AI-Colony-6s':       '3s,c2s,a7p,r5s,r6c',

      'AI-Colony-7a':       '3a,c3a,a6s',
      'AI-Colony-7c':       '3c,c3c,a6p',
      'AI-Colony-7p':       '3p,c3p,a6c',
      'AI-Colony-7s':       '3s,c3s,a6a',

      'AI-Colony-8a':       '4a,c3a,r7a,r7s',
      'AI-Colony-8c':       '4c,c3c,r7c,r7p',
      'AI-Colony-8p':       '4p,c3p,r7p,r7c',
      'AI-Colony-8s':       '4s,c3s,r7s,r7a',


      'AI-Hero-1s':         '',
      'AI-Hero-2s':         '1s,a1p',
      'AI-Hero-2a':         '2a,a1p',
      'AI-Base-7a':         'r6c,r7a',
      'AI-Base-7c':         'c2c,r6p,r7c',
      'AI-Base-6c':         'a5p,r5a,r6c',

      'Base':               { Type: 'Base', },
      'Hero':               { Type: 'Hero', },
      'Ship':               { Type: 'Ship', },
      'Colony':             { Type: 'Colony', },

      'Home':               { Type: 'Other' },
      'Tech':               { Type: 'Other' },
      'Event':              { Type: 'Other' },
      'Mission':            { Type: 'Other' },

      'None':               { Type: 'Other', Name: '' },
      'Attack':             { Type: 'Other' },
      'Colonization':       { Type: 'Other', Name: 'Colony' },
      'Production':         { Type: 'Other', Name: 'Prod' },
      'Science':            { Type: 'Other' },
      'Hand':               { Type: 'Other' },
      'Reserve':            { Type: 'Other' },
      'Discard':            { Type: 'Other' },
      'Scrap':              { Type: 'Other' },
      'Research':           { Type: 'Other', Name: 'Research' },
      'Ideas':              { Type: 'Other', Name: 'Ideas' },
    }
  }
}

export default Decks;
