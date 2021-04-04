import Prop from "./Prop.js";
import Spec from "./Spec.js";
import Specs from "./Specs.js";
import Action from "./Action.js";
import Assert from "./Assert.js";

class Decks {
  static get(name) {
    let all = Decks.all();
    let specs = all[name.toLowerCase()];
    let ps = Decks.parseCard(name, specs);
    return new Specs(Decks.parseCard(name, specs));
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
    let ps = name.split('-');
    let action = Action.assert(ps[2]);
    return new Specs({
      [Prop.Race]:          Action.text(ps[0]),
      [Prop.Type]:          Action.text(ps[1]),
      [Prop.Level]:         action,
      [action.Klass.name]:  action.dec(),
    });
  }

  static parseSpecs(specs) {
    let ps = specs.split(',');
    let res = new Specs();
    ps.forEach(value => res.setSpec(Decks.parseSpec(value)));
    return res;
  }

  static parseSpec(spec) {
    Assert.string(spec);
    let prefix = spec.charAt(0).toLowerCase();
    let action = Action.assert(spec.substring(1, 3));
    if (spec.length === 2) {
      action = Action.assert(spec);
      return new Spec(action.Klass, action);
    }
    if (prefix === 'u') {
      return new Spec(Prop.Utilization, action);
    }
    if (prefix === 'c') {
      return new Spec(Prop.Cooperation, action);
    }
    if (prefix === 'a') {
      return new Spec(Prop.Alternative, action);
    }
    if (prefix === 'r') {
      return new Spec(Prop.Requires, action);
    }
    Assert.error('wrong spec', spec);
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
      'AI-Hero-2s':         '1s,a1p',
      'AI-Hero-2a':         '2a,a1p',
      'AI-Ship-2a':         'c1a,u2s',
      'AI-Base-7a':         'u5p,r6c,r7a',
      'AI-Base-7c':         'u5p,c2c,r6p,r7c',
      'AI-Base-6c':         'a5p,r5a,r6c',
      'AI-Colony-4p':       'c2p,a3s,r3c,r4p',

      'Human-Ship-1a':      '',
      'Human-Ship-1c':      '',
      'Human-Ship-1s':      '',
      'Human-Ship-1p':      '',

      'Human-Ship-2a':      '1a,c1a',
      'Human-Ship-2c':      '1c,c1c',
      'Human-Ship-2s':      '1s,c1s',
      'Human-Ship-2p':      '1p,c1p',

      'Human-Ship-3a':      'a4p',
      'Human-Ship-3c':      'a4a',
      'Human-Ship-3s':      'a4c',
      'Human-Ship-3p':      'a4s',

      'Human-Ship-4a':      'c2a,a3c,r3c,r4a',
      'Human-Ship-4c':      'c2c,a3s,r3s,r4c',
      'Human-Ship-4s':      'c2s,a3p,r3p,r4s',
      'Human-Ship-4p':      'c2p,a3a,r3a,r4p',

      'Human-Hero-2a':      'a1a',
      'Human-Hero-2c':      'a1c',
      'Human-Hero-2s':      'a1s',
      'Human-Hero-2p':      'a1p',

      'Human-Hero-1a':      'a2a',
      'Human-Hero-1c':      'a2c',
      'Human-Hero-1s':      'a2s',
      'Human-Hero-1p':      'a2p',

      'Human-Hero-4a':      '4a,a3a,r3c,r3a',
      'Human-Hero-4c':      '4c,a3c,r3s,r3c',
      'Human-Hero-4s':      '4s,a3s,r3p,r3s',
      'Human-Hero-4p':      '4p,a3p,r3a,r3p',

      'Human-Hero-3a':      '3a,a4a',
      'Human-Hero-3c':      '3c,a4c',
      'Human-Hero-3s':      '3s,a4s',
      'Human-Hero-3p':      '3p,a4p',

      'Human-Base-3a':      'c1a',
      'Human-Base-3c':      'c1c,a2p',
      'Human-Base-3s':      'c1s,u4c',
      'Human-Base-3p':      'c1p',

      'Human-Base-5a':      'c3a,a6c',
      'Human-Base-5c':      'c3c,a6s',
      'Human-Base-5s':      'c3s,a6p',
      'Human-Base-5p':      'c3p,a6a',

      'Human-Base-6a':      'c3a,a5p,r5p,r6a',
      'Human-Base-6c':      'c3c,a5a,r5a,r6c',
      'Human-Base-6s':      'c3s,a5c,r5c,r6s',
      'Human-Base-6p':      'c3p,a5s,r5s,r6p',

      'Human-Base-7a':      'u5p,r6p,r7a',
      'Human-Base-7c':      'u5p,c2c',

      'Human-Colony-3a':    '2a,a3c',
      'Human-Colony-3c':    '2c,u3s',
      'Human-Colony-3s':    '2s',
      'Human-Colony-3p':    '2p,a3s,r3c,r4p',

      'Human-Colony-4a':    'c2a,a3c',
      'Human-Colony-4c':    'c2c,u3s',
      'Human-Colony-4s':    'c2s,u3p',
      'Human-Colony-4p':    '3p,c2p,a3c,r3a,r4p',

      'Human-Colony-5s':    'a4p',

      'Human-Colony-6a':    '5s,c3a,r5s,r6a',
      'Human-Colony-6c':    '5p,c3c,r5p,r6c',
      'Human-Colony-6s':    '5a,c3s,r5a,r6s',
      'Human-Colony-6p':    '5c,c3p,r5c,r6p',

      'Human-Colony-7a':    '5a,3s,c3a,r6s,r7a',
      'Human-Colony-7c':    '5c,3p,c3c,r6p,r7c',
      'Human-Colony-7s':    '5s,3a,c3s,r6a,r7s',
      'Human-Colony-7p':    '5p,3c,c3p,r6c,r7p',

      'Human-Colony-8a':    '6a,4s,c4a,r7s,r8a',
      'Human-Colony-8c':    '6c,4p,c4c,r7p,r8c',
      'Human-Colony-8s':    '6s,4a,c4s,r7a,r8s',
      'Human-Colony-8p':    '6p,4c,c4p,r7c,r8p',

      'Human-Tech-4a':      'r3s,r3a',
      'Human-Tech-4c':      'r3p,r3c',
      'Human-Tech-4s':      'r3a,r3s',
      'Human-Tech-4p':      'r3c,r3p',

      'Human-Tech-5a':      'r4s,r4a',
      'Human-Tech-5c':      'r4p,r4c',
      'Human-Tech-5s':      'r4a,r4s',
      'Human-Tech-5p':      'r4c,r4p',

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
      'Ideas':              { Type: 'Other', Name: 'Deck' },
    }
  }
}

export default Decks;
