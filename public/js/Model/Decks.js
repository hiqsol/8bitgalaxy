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
      [action.Klass.name]:  action,
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
      'AI-Hero-2s':         'a1p',
      'AI-Hero-2a':         'a1p',
      'AI-Ship-2a':         'u2s',
      'AI-Base-7a':         'u5p',
      'AI-Base-7c':         'u5p,c2c',
      'AI-Base-6c':         'a5p',
      'AI-Colony-4p':       'a3s',

      'Human-Ship-1a':      '',
      'Human-Ship-1c':      'u2s',
      'Human-Ship-1s':      '',
      'Human-Ship-1p':      '',

      'Human-Ship-3a':      'a2p',
      'Human-Ship-3c':      'a2a',
      'Human-Ship-3s':      'a2c',
      'Human-Ship-3p':      'a2s',

      'Human-Ship-2a':      'a1s',
      'Human-Ship-3s':      'a2p',
      'Human-Ship-4s':      'a3a',

      'Human-Hero-2a':      'a1a',
      'Human-Hero-2c':      'a1c',
      'Human-Hero-2s':      'a1s',
      'Human-Hero-2p':      'a1p',

      'Human-Hero-1a':      'a2a',
      'Human-Hero-1c':      'a2c',
      'Human-Hero-1s':      'a2s',
      'Human-Hero-1p':      'a2p',

      'Human-Hero-4a':      'a3a,r3a3c',
      'Human-Hero-4c':      'a3c,r3c3s',
      'Human-Hero-4s':      'a3s,r3s3p',
      'Human-Hero-4p':      'a3p,r3p3a',

      'Human-Hero-3a':      'a4a',
      'Human-Hero-3c':      'a4c',
      'Human-Hero-3s':      'a4s',
      'Human-Hero-3p':      'a4p',

      'Human-Base-3a':      '',
      'Human-Base-3c':      'a2p',
      'Human-Base-3s':      'u4c',
      'Human-Base-3p':      '',

      'Human-Base-6c':      'a5a',
      'Human-Base-7a':      'u5p',
      'Human-Base-7c':      'u5p,c2c',
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

export default Decks;
