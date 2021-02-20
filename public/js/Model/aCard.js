import Spec from "./Spec.js";
import Decks from "./Decks.js";

class aCard {
  constructor(specs) {
    this._specs = specs ?? {};
  }

  get Specs()             { return this._specs; }
  get Type()              { return this.getValue(Spec.Type); }
  get Race()              { return this.getValue(Spec.Race); }
  get Level()             { return this.getValue(Spec.Level, 0); }
  get Klass()             { return this.getValue(Spec.Klass, 'Neutral'); }
  get Defense()           { return this.getValue(Spec.Defense, this.getValue(Spec.Level)); }
  get Race()              { return this.getValue(Spec.Race, null); }
  get Attack()            { return this.getValue(Spec.Attack, 0); }
  get Colonization()      { return this.getValue(Spec.Colonization, 0); }
  get Science()           { return this.getValue(Spec.Science, 0); }
  get Production()        { return this.getValue(Spec.Production, 0); }
  get Cooperation()       { return this.getValue(Spec.Cooperation, 0); }
  get UtilizationKlass()  { return this.getValue(Spec.UtilizationKlass, null); }
  get UtilizationValue()  { return this.getValue(Spec.UtilizationValue, 0); }

  getValue(spec, def = null) {
    return this.Specs[Spec.assert(spec).name] ?? def;
  }

  get isHero()            { return this.isType(Types.Hero); }
  get isColony()          { return this.isType(Types.Colony); }
  get isShip()            { return this.isType(Types.Ship); }
  get isBase()            { return this.isType(Types.Base); }
  isType(type)            { return this.Type === type; }

  static assert(sample) {
    if (sample instanceof(aCard)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return aCard.fromString(sample);
    }
    console.log(sample);
    throw new Error('not a aCard:' + sample.constructor.name)
  }

  static fromString(name) {
    return Decks.get(name);
  }
}

const Types = Object.freeze({
  Hero:   'Hero',
  Base:   'Base',
  Ship:   'Ship',
  Colony: 'Colony',
})

const Colors = Object.freeze({
  Attack:         'red',
  Colonization:   'green',
  Science:        'blue',
  Production:     'yellow',
})

class Specs {
  alternativeType = 'Science';
  alternativeValue = 1;

  utilizationType = 'Production';
  utilizationValue = 1;

  cooperativeType = 'Attack';
  cooperativeValue = '2';
}

export default aCard;
