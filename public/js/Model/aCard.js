import Spec from "./Spec.js";
import Decks from "./Decks.js";

class aCard {
  constructor(specs) {
    this._specs = specs ?? {};
    this.initAlternative();
  }

  get Specs()             { return this._specs; }
  get Name()              { return this.getValue(Spec.Name); }
  get Type()              { return this.getValue(Spec.Type); }
  get Race()              { return this.getValue(Spec.Race); }
  get Level()             { return this.getValue(Spec.Level, 0); }
  get Klass()             { return this.getValue(Spec.Klass, 'Neutral'); }
  get Defense()           { return this.getValue(Spec.Defense, this.getValue(Spec.Level)); }
  get Attack()            { return this.getValue(Spec.Attack, 0); }
  get Colonization()      { return this.getValue(Spec.Colonization, 0); }
  get Science()           { return this.getValue(Spec.Science, 0); }
  get Production()        { return this.getValue(Spec.Production, 0); }
  get Cooperation()       { return this.getValue(Spec.Cooperation, 0); }
  get UtilizationKlass()  { return this.getValue(Spec.UtilizationKlass); }
  get UtilizationValue()  { return this.getValue(Spec.UtilizationValue, 0); }
  get Alternative()       { return this.getValue(Spec.Alternative); }

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
    throw new Error('not a aCard:' + sample.constructor.name)
  }

  static fromString(name) {
    return Decks.get(name);
  }

  initAlternative() {
    let alt = this.Alternative;
    if (! alt) {
      return;
    }
    if (typeof(alt) !== 'string') {
      throw new Error('wrong alternative ' + typeof(alternative));
    }
    this._specs.Alternative = Decks.get([this.Race, this.Type, this.Alternative].join('-'));
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
