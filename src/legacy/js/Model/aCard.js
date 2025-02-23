import Specs from "./Specs.js";
import Decks from "./Decks/Decks.js";
import Assert from "./Assert.js";

class aCard {
  constructor(specs) {
    this._specs = Specs.assert(specs);
    this._altspecs = this._specs.Alt;
    this._uniq = undefined;
  }

  get Specs()             { return this._specs; }
  get Alt()               { return this._altspecs; }
  get Uniq()              { return this.getUniq(); }
  get Name()              { return this.Specs.Name; }
  get Type()              { return this.Specs.Type; }
  get Role()              { return this.Specs.Role; }
  get Race()              { return this.Specs.Race; }
  get Level()             { return this.Specs.Level; }
  get Klass()             { return this.Specs.Klass; }
  get Requires()          { return this.Specs.Requires; }
  get Attack()            { return this.Specs.Attack; }
  get Colonization()      { return this.Specs.Colonization; }
  get Science()           { return this.Specs.Science; }
  get Production()        { return this.Specs.Production; }
  get Power()             { return this.Specs.Power; }
  get Cooperation()       { return this.Specs.Cooperation; }
  get Alternative()       { return this.Specs.Alternative; }
  get hasRequirements()   { return this.Specs.Requires == undefined; }

  isType(type)            { return this.Type.equals(type); }
  get isHero()            { return this.Type.isHero; }
  get isColony()          { return this.Type.isColony; }
  get isShip()            { return this.Type.isShip; }
  get isBase()            { return this.Type.isBase; }
  get isActor()           { return this.Type.isActor; }
  get isStructure()       { return this.Type.isStructure; }

  getValue(prop)          { return this.Specs.getValue(prop); }

  buildName() {
    return this._specs.buildName();
  }

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
    return this.Name > this.Alt.Name
      ? this.Name + '/' + this.Alt.Name
      : this.Alt.Name + '/' + this.Name
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
}

export default aCard;
