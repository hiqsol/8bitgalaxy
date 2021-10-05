import Type from "./Type.js";
import Specs from "./Specs.js";
import Decks from "./Decks.js";
import Action from "./Action.js";
import Assert from "./Assert.js";

class aCard {
  constructor(specs) {
    this._specs = Specs.assert(specs);
    this._alternative = this.findAlternative(specs.Alternative);
    this._uniq = undefined;
  }

  get Specs()             { return this._specs; }
  get Alternative()       { return this._alternative; }
  get Uniq()              { return this.getUniq(); }
  get Name()              { return this.Specs.Name; }
  get Type()              { return this.Specs.Type; }
  get Race()              { return this.Specs.Race; }
  get Level()             { return this.Specs.Level; }
  get Klass()             { return this.Specs.Klass; }
  get Requires()          { return this.Specs.Requires; }
  get Defense()           { return this.Specs.Defense; }
  get Attack()            { return this.Specs.Attack; }
  get Colonization()      { return this.Specs.Colonization; }
  get Science()           { return this.Specs.Science; }
  get Production()        { return this.Specs.Production; }
  get Cooperation()       { return this.Specs.Cooperation; }
  get Utilization()       { return this.Specs.Utilization; }

  get isHero()            { return this.isType(Type.Hero); }
  get isColony()          { return this.isType(Type.Colony); }
  get isShip()            { return this.isType(Type.Ship); }
  get isBase()            { return this.isType(Type.Base); }
  isType(type)            { return this.Type === type; }

  getValue(prop)          { return this.Specs.getValue(prop); }

  getUniq() {
    if (this._uniq === undefined) {
      this._uniq = this.buildUniq();
    }
    return this._uniq;
  }

  buildUniq() {
    if (this.Alternative === undefined) {
      return this.Name;
    }
    return this.Name > this.Alternative.Name
      ? this.Name + '/' + this.Alternative.Name
      : this.Alternative.Name + '/' + this.Name
    ;
  }

  static assert(sample) {
    if (sample instanceof(aCard)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return new aCard(Decks.get(sample));
    }
    Assert.error('not a aCard', sample);
  }

  findAlternative(alt) {
    if (! alt) {
      return undefined;
    }
    if (typeof(alt) === 'string') {
      alt = Action.assert(alt);
    }
    if (alt instanceof Action) {
      return Decks.get(aCard.buildName(this.Race, this.Type, alt.short));
    }
    Assert.error('wrong alternative', alt);
  }

  static buildName(race, type, action) {
    return race + '-' + type + '-' + action;
  }
}

export default aCard;
