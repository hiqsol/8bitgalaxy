import Spec from "./Spec.js";
import aCard from "./aCard.js";
import State from "./State.js";

class Card {
  constructor(state, acard) {
    this._state = State.assert(state);
    this._acard = aCard.assert(acard);
  }

  get aCard()             { return this._acard; }
  get State()             { return this._state; }
  get isVisible()         { return this._state.isHidden; }
  get isAlternative()     { return this._state.isAlternative; }

  get Type()              { return this.aCard.Type; }
  get Race()              { return this.aCard.Race; }
  get Level()             { return this.statedValue(Spec.Level); }
  get Klass()             { return this.statedValue(Spec.Klass); }
  get Defense()           { return this.statedValue(Spec.Defense); }
  get Attack()            { return this.statedValue(Spec.Attack); }
  get Colonization()      { return this.statedValue(Spec.Colonization); }
  get Science()           { return this.statedValue(Spec.Science); }
  get Production()        { return this.statedValue(Spec.Production); }
  get UtilizationKlass()  { return this.statedValue(Spec.UtilizationKlass); }
  get UtilizationValue()  { return this.statedValue(Spec.UtilizationValue); }

  get isHero()            { return this.aCard.isHero; }
  get isColony()          { return this.aCard.isColony; }
  get isShip()            { return this.aCard.isShip; }
  get isBase()            { return this.aCard.isBase; }

  statedValue(spec)       {
    if (this.isHidden) {
      return null;
    }
    if (this.isAlternative) {
      throw new Error('TODO implement!')
    }
    return this.aCard.getValue(spec);
  }

  static hidden(acard)      { return new Card(acard, States.Hidden); }
  static visible(acard)     { return new Card(acard, States.Visible); }
  static alternative(acard) { return new Card(acard, States.Alternative); }

  static assert(sample) {
    if (sample instanceof(Card)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Card.fromString(sample);
    }
    throw new Error('not a Card:' + sample.constructor.name)
  }

  static fromString(name) {
    let [state, acard] = name.split(' ', 2);
    if (! State.isName(state)) {
      acard = state;
      state = '';
    }
    return new Card(state, acard);
  }
}

export default Card;