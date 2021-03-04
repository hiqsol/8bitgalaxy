import Prop from "./Prop.js";
import aCard from "./aCard.js";
import State from "./State.js";

class Card {
  constructor(state, acard) {
    this._state = State.assert(state);
    this._acard = aCard.assert(acard);
  }

  get State()             { return this._state; }
  get visibility()        { return this._state.visibility; }
  get isAbsent()          { return this._state.isAbsent; }
  get isTurned()          { return this._state.isTurned; }
  get isVisible()         { return this._state.isVisible; }
  get isAlternative()     { return this._state.isAlternative; }

  get aCard()             { return this._acard; }
  get Specs()             { return this._acard.Specs; }
  get Alternative()       { return this._acard.Alternative; }

  get Name()              { return this.aCard.Name; }
  get Type()              { return this.aCard.Type; }
  get Race()              { return this.aCard.Race; }
  get Level()             { return this.statedValue(Prop.Level); }
  get Klass()             { return this.statedValue(Prop.Klass); }
  get Defense()           { return this.statedValue(Prop.Defense); }
  get Attack()            { return this.statedValue(Prop.Attack); }
  get Colonization()      { return this.statedValue(Prop.Colonization); }
  get Science()           { return this.statedValue(Prop.Science); }
  get Production()        { return this.statedValue(Prop.Production); }
  get Requires()          { return this.statedValue(Prop.Requires); }
  get Cooperation()       { return this.statedValue(Prop.Cooperation); }
  get Utilization()       { return this.statedValue(Prop.Utilization); }

  get isHero()            { return this.aCard.isHero; }
  get isColony()          { return this.aCard.isColony; }
  get isShip()            { return this.aCard.isShip; }
  get isBase()            { return this.aCard.isBase; }

  static AbsentBase   = Card.assert('absent Base');
  static AbsentHero   = Card.assert('absent Hero');
  static AbsentShip   = Card.assert('absent Ship');
  static AbsentColony = Card.assert('absent Colony');

  statedValue(prop)       {
    if (this.isTurned) {
      return null;
    }
    if (this.isAlternative) {
      throw new Error('TODO implement!')
    }
    return this.aCard.getValue(prop);
  }

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
