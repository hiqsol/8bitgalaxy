import Spec from "./Spec.js";
import Decks from "./Decks.js";

class Specs {
  constructor(specs) {
    this._specs = specs ?? {};
  }

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
  get Cooperation()       { return this.getValue(Spec.Cooperation); }
  get Alternative()       { return this.getValue(Spec.Alternative); }
  get Utilization()       { return this.getValue(Spec.Utilization); }

  getValue(spec, def = null) {
    return this._specs[Spec.assert(spec).name] ?? def;
  }

  get isHero()            { return this.isType(Types.Hero); }
  get isColony()          { return this.isType(Types.Colony); }
  get isShip()            { return this.isType(Types.Ship); }
  get isBase()            { return this.isType(Types.Base); }
  isType(type)            { return this.Type === type; }

  static assert(sample) {
    if (sample instanceof(Specs)) {
      return sample;
    }
    if (typeof(sample) === 'object') {
      return new Specs(sample);
    }
    throw new Error('not a Specs:' + typeof(sample));
  }
}

export default Specs;
