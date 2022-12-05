import Prop from "./Prop.js";
import aCard from "./aCard.js";
import State from "./State.js";
import Assert from "./Assert.js";

class Card {
  constructor(state, acard) {
    this._state = State.assert(state);
    this._acard = aCard.assert(acard);
  }

  toJSON() {
    return {
      '_class':   'Card',
      'state':    this._state.name,
      'name':     this._acard.Name,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'Card', "wrong class hydrating Card", json);
    return new Card(json.state, json.name);
  }

  static arrayFromJSON(json) {
    Assert.assert(Array.isArray(json), "must be array of Cards", json);
    let cards = [];
    for (const k in json) {
      cards[k] = json[k] ? Card.fromJSON(json[k]) : null;
    }
    return cards;
  }

  get State()             { return this._state; }
  get isTurned()          { return this._state.isTurned; }
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
  get Attack()            { return this.aCard.Attack; }
  get Colonization()      { return this.aCard.Colonization; }
  get Science()           { return this.aCard.Science; }
  get Production()        { return this.aCard.Production; }
  get Requires()          { return this.aCard.Requires; }
  get Cooperation()       { return this.aCard.Cooperation; }

  get isHero()            { return this.aCard.isHero; }
  get isColony()          { return this.aCard.isColony; }
  get isShip()            { return this.aCard.isShip; }
  get isBase()            { return this.aCard.isBase; }

  isType(type)            { return this.aCard.isType(type); }
  isName(name)            { return name.toLowerCase() === this.Name.toLowerCase(); }
  isAnyName(name)         { return [this.Name, this.AltName].includes(name.toLowerCase()); }

  isLevel(no)             { return this.Level === no; }
  isAnyLevel(no)          { return this.Level === no || this.AltLevel === no; }

  turn()    { this._state.turn();return this; }
  alter()   { this._state.alter();return this; }
  insert()  { this._state.insert();return this; }

  setTurned(value)  { this._state.setTurned(value);return this; }
  setAltered(value) { this._state.setAltered(value);return this; }

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
