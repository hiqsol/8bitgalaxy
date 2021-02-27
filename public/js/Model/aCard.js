import Spec from "./Spec.js";
import Specs from "./Specs.js";
import Decks from "./Decks.js";

class aCard {
  constructor(specs) {
    this._specs = Specs.assert(specs);
    this._alternative = this.findAlternative(this._specs.Alternative);
  }

  get Specs()             { return this._specs; }
  get Alternative()       { return this._alternative; }
  get Name()              { return this.Specs.Name; }
  get Type()              { return this.Specs.Type; }
  get Race()              { return this.Specs.Race; }
  get Level()             { return this.Specs.Level; }
  get Klass()             { return this.Specs.Klass; }
  get Defense()           { return this.Specs.Defense; }
  get Attack()            { return this.Specs.Attack; }
  get Colonization()      { return this.Specs.Colonization; }
  get Science()           { return this.Specs.Science; }
  get Production()        { return this.Specs.Production; }
  get Cooperation()       { return this.Specs.Cooperation; }
  get UtilizationKlass()  { return this.Specs.UtilizationKlass; }
  get UtilizationValue()  { return this.Specs.UtilizationValue; }

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
      return new aCard(Decks.get(sample));
    }
    throw new Error('not a aCard:' + sample.constructor.name)
  }

  findAlternative(alt) {
    if (! alt) {
      return null;
    }
    if (typeof(alt) !== 'string') {
      throw new Error('wrong alternative ' + typeof(alternative));
    }
    return Decks.get([this.Race, this.Type, alt].join('-'));
  }
}

const Types = Object.freeze({
  Hero:   'Hero',
  Base:   'Base',
  Ship:   'Ship',
  Colony: 'Colony',
})

export default aCard;
