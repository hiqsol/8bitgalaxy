import Prop from "./Prop.js";
import Type from "./Type.js";
import Spec from "./Spec.js";
import aCard from "./aCard.js";
import Specs from "./Specs.js";
import Action from "./Action.js";
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
    }
    return Decks._all;
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
    let action = Action.assert(ps[2]);
    return new Specs({
      [Prop.Name]:          name,
      [Prop.Race]:          Action.text(ps[0]),
      [Prop.Type]:          Action.text(ps[1]),
      [Prop.Level]:         action,
      [action.Klass.name]:  action.dec(),
    });
  }

  static normalizeName(name) {
    let ps = Decks.splitName(name);
    return ps.join('-');
  }

  static splitName(name) {
    let ps = name.split('-');
    let os = [...ps];
    if (ps.length == 2) {
      let str = ps[1];
      let type = Type.assert(str.charAt(0));
      ps[1] = type.name;
      ps[2] = str.substring(1);
    }
    return ps;
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

  static old_all() {
    let src = Decks.allAnyCase();
    return Object.keys(src).reduce(function (dst, key) {
      dst[key.toLowerCase()] = src[key];
      return dst;
    }, {});
  }

  static allAnyCase() {
    return {
      'Human-Ship-1a':      '1a',
      'Human-Ship-1c':      '1c',
      'Human-Ship-1p':      '1p',
      'Human-Ship-1s':      '1s',

      'Human-Ship-2a':      '1a,c1a,a3p,r1a,r2p',
      'Human-Ship-2c':      '1c,c1c,a3a,r1c,r2a',
      'Human-Ship-2p':      '1p,c1p,a3s,r1p,r2s',
      'Human-Ship-2s':      '1s,c1s,a3c,r1s,r2c',

      'Human-Ship-3a':      '1a,c1a,a2p',
      'Human-Ship-3c':      '1c,c1c,a2a',
      'Human-Ship-3p':      '1p,c1p,a2s',
      'Human-Ship-3s':      '1s,c1s,a2c',

      'Human-Ship-4a':      '2a,c2a,a5c,r3a,r4c',
      'Human-Ship-4c':      '2c,c2c,a5s,r3c,r4s',
      'Human-Ship-4p':      '2p,c2p,a5a,r3p,r4a',
      'Human-Ship-4s':      '2s,c2s,a5p,r3s,r4p',

      'Human-Ship-5a':      '2a,c2a,a4c',
      'Human-Ship-5c':      '2c,c2c,a4s',
      'Human-Ship-5p':      '2p,c2p,a4a',
      'Human-Ship-5s':      '2s,c2s,a4p',

      'Human-Ship-6a':      '3a,c3a,a7s,r5a,r6s',
      'Human-Ship-6c':      '3c,c3c,a7p,r5c,r6p',
      'Human-Ship-6p':      '3p,c3p,a7a,r5p,r6a',
      'Human-Ship-6s':      '3s,c3s,a7c,r5s,r6c',

      'Human-Ship-7a':      '3a,c3a,a4c',
      'Human-Ship-7c':      '3c,c3c,a4s',
      'Human-Ship-7p':      '3p,c3p,a4a',
      'Human-Ship-7s':      '3s,c3s,a4p',

      'Human-Ship-8a':      '4a,c4a,r7a,r7c',
      'Human-Ship-8c':      '4c,c4c,r7c,r7s',
      'Human-Ship-8p':      '4p,c4p,r7p,r7a',
      'Human-Ship-8s':      '4s,c4s,r7s,r7p',


      'Human-Hero-1a':      '0a,a2a',
      'Human-Hero-1c':      '0c,a2c',
      'Human-Hero-1p':      '0p,a2p',
      'Human-Hero-1s':      '0s,a2s',

      'Human-Hero-2a':      '1a,a1a',
      'Human-Hero-2c':      '1c,a1c',
      'Human-Hero-2p':      '1p,a1p',
      'Human-Hero-2s':      '1s,a1s',

      'Human-Hero-3a':      '2a,a4a,r3a,r2s',
      'Human-Hero-3c':      '2c,a4c,r3c,r2a',
      'Human-Hero-3p':      '2p,a4p,r3p,r2c',
      'Human-Hero-3s':      '2s,a4s,r3s,r2p',

      'Human-Hero-4a':      '3a,a3a',
      'Human-Hero-4c':      '3c,a3c',
      'Human-Hero-4p':      '3p,a3p',
      'Human-Hero-4s':      '3s,a3s',

      'Human-Hero-5a':      '4a,a6a,r5a,r4p',
      'Human-Hero-5c':      '4c,a6c,r5c,r4s',
      'Human-Hero-5p':      '4p,a6p,r5p,r4c',
      'Human-Hero-5s':      '4s,a6s,r5s,r4a',

      'Human-Hero-6a':      '5a,a5a',
      'Human-Hero-6c':      '5c,a5c',
      'Human-Hero-6p':      '5p,a5p',
      'Human-Hero-6s':      '5s,a5s',

      'Human-Hero-7a':      '6a,a8a,r7a,r6c',
      'Human-Hero-7c':      '6c,a8c,r7c,r6p',
      'Human-Hero-7p':      '6p,a8p,r7p,r6s',
      'Human-Hero-7s':      '6s,a8s,r7s,r6a',

      'Human-Hero-8a':      '7a,a7a',
      'Human-Hero-8c':      '7c,a7c',
      'Human-Hero-8p':      '7p,a7p',
      'Human-Hero-8s':      '7s,a7s',


      'Human-Base-3a':      '2a,c1a,a4c,r2a,r3c',
      'Human-Base-3c':      '2c,c1c,a4p,r2c,r3p',
      'Human-Base-3p':      '2p,c1p,a4s,r2p,r3s',
      'Human-Base-3s':      '2s,c1s,a4a,r2s,r3a',

      'Human-Base-4a':      '2a,c1a',
      'Human-Base-4c':      '2c,c1c',
      'Human-Base-4p':      '2p,c1p',
      'Human-Base-4s':      '2s,c1s',

      'Human-Base-5a':      '3a,c2a,a6s,r4a,r5s',
      'Human-Base-5c':      '3c,c2c,a6a,r4c,r5a',
      'Human-Base-5p':      '3p,c2p,a6c,r4p,r5c',
      'Human-Base-5s':      '3s,c2s,a6p,r4s,r5p',

      'Human-Base-6a':      '3a,c2a,a5p',
      'Human-Base-6c':      '3c,c2c,a5a',
      'Human-Base-6p':      '3p,c2p,a5s',
      'Human-Base-6s':      '3s,c2s,a5c',

      'Human-Base-7a':      '4a,c3a,a8p,r6a,r7p',
      'Human-Base-7c':      '4c,c3c,a8a,r6c,r7a',
      'Human-Base-7p':      '4p,c3p,a8s,r6p,r7s',
      'Human-Base-7s':      '4s,c3s,a8c,r6s,r7c',

      'Human-Base-8a':      '4a,c3a',
      'Human-Base-8c':      '4c,c3c',
      'Human-Base-8p':      '4p,c3p',
      'Human-Base-8s':      '4s,c3s',


      'Human-Colony-2a':    '1a,a3s,r1a,r2s',
      'Human-Colony-2c':    '1c,a3p,r1c,r2p',
      'Human-Colony-2p':    '1p,a3a,r1p,r2a',
      'Human-Colony-2s':    '1s,a3c,r1s,r2c',

      'Human-Colony-3a':    '1a,a2s',
      'Human-Colony-3c':    '1c,a2a',
      'Human-Colony-3p':    '1p,a2c',
      'Human-Colony-3s':    '1s,a2p',

      'Human-Colony-4a':    '2a,c1a,a5p,r3a,r4p',
      'Human-Colony-4c':    '2c,c1c,a5s,r3c,r4s',
      'Human-Colony-4p':    '2p,c1p,a5c,r3p,r4c',
      'Human-Colony-4s':    '2s,c1s,a5a,r3s,r4a',

      'Human-Colony-5a':    '2a,c1a,a4s',
      'Human-Colony-5c':    '2c,c1c,a4a',
      'Human-Colony-5p':    '2p,c1p,a4c',
      'Human-Colony-5s':    '2s,c1s,a4p',

      'Human-Colony-6a':    '3a,c2a,a7c,r5a,r6c',
      'Human-Colony-6c':    '3c,c2c,a7s,r5c,r6s',
      'Human-Colony-6p':    '3p,c2p,a7a,r5p,r6a',
      'Human-Colony-6s':    '3s,c2s,a7p,r5s,r6p',

      'Human-Colony-7a':    '3a,c2a,a6s',
      'Human-Colony-7c':    '3c,c2c,a6p',
      'Human-Colony-7p':    '3p,c2p,a6c',
      'Human-Colony-7s':    '3s,c2s,a6a',

      'Human-Colony-8a':    '4a,c3a,r7a,r7s',
      'Human-Colony-8c':    '4c,c3c,r7c,r7p',
      'Human-Colony-8p':    '4p,c3p,r7p,r7c',
      'Human-Colony-8s':    '4s,c3s,r7s,r7a',


      'Human-Tech-4a':      'r3s,r3a',
      'Human-Tech-4c':      'r3p,r3c',
      'Human-Tech-4s':      'r3a,r3s',
      'Human-Tech-4p':      'r3c,r3p',

      'Human-Tech-5a':      'r4s,r4a',
      'Human-Tech-5c':      'r4p,r4c',
      'Human-Tech-5s':      'r4a,r4s',
      'Human-Tech-5p':      'r4c,r4p',

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
      'AI-Base-7a':         'u5p,r6c,r7a',
      'AI-Base-7c':         'u5p,c2c,r6p,r7c',
      'AI-Base-6c':         'a5p,r5a,r6c',

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
      'Research':           { Type: 'Other', Name: 'Research' },
      'Ideas':              { Type: 'Other', Name: 'Deck' },
    }
  }
}

export default Decks;
