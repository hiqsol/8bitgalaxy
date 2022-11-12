import Prop from "./Prop.js";
import aCard from "./aCard.js";
import State from "./State.js";
import Assert from "./Assert.js";

class Card {
  constructor(state, acard) {
    this._state = State.assert(state);
    this._acard = aCard.assert(acard);
  }

  get State()             { return this._state; }
  get visibility()        { return this._state.visibility; }
  get isTurned()          { return this._state.isTurned; }
  get isVisible()         { return this._state.isVisible; }
  get isAltered()         { return this._state.isAltered; }

  get aCard()             { return this._acard; }
  get Specs()             { return this._acard.Specs; }
  get Alternative()       { return this._acard.Alternative; }

  get Name()              { return this.aCard.Name; }
  get AltName()           { return this.Alternative ? this.Alternative.Name : null; }
  get Type()              { return this.aCard.Type; }
  get Race()              { return this.aCard.Race; }
  get Level()             { return this.aCard.Level; }
  get AltLevel()          { return this.Alternative ? this.Alternative.Level : null; }
  get Klass()             { return this.aCard.Klass; }
  get Defense()           { return this.aCard.Defense; }
  get Attack()            { return this.aCard.Attack; }
  get Colonization()      { return this.aCard.Colonization; }
  get Science()           { return this.aCard.Science; }
  get Production()        { return this.aCard.Production; }
  get Requires()          { return this.aCard.Requires; }
  get Cooperation()       { return this.aCard.Cooperation; }
  get Utilization()       { return this.aCard.Utilization; }

  get isHero()            { return this.aCard.isHero; }
  get isColony()          { return this.aCard.isColony; }
  get isShip()            { return this.aCard.isShip; }
  get isBase()            { return this.aCard.isBase; }

  isType(type)            { return this.aCard.isType(type); }
  isName(name)            { return name.toLowerCase() === this.Name.toLowerCase(); }
  isAnyName(name)         { return [this.Name, this.AltName].includes(name.toLowerCase()); }

  isLevel(no)             { return this.Level === no; }
  isAnyLevel(no)          { return this.Level === no || this.AltLevel === no; }

  static assert(sample) {
    if (sample instanceof(Card)) {
      return sample;
    }
    if (typeof(sample) === 'string') {
      return Card.fromString(sample);
    }
    Assert.error('not a Card', sample);
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
