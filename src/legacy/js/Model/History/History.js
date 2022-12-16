import Assert from "../Assert.js";
import BulkEffect from "./BulkEffect.js";
import DragCard from "./DragCard.js";
import TurnCard from "./TurnCard.js";
import AlterCard from "./AlterCard.js";

class History {
  constructor() {
    this._effects = [];
  }

  add(move) {
    this._effects.push(move);
  }

  undo() {
    return this._effects.pop();
  }

  toJSON() {
    return {
      '_class':     'History',
      'effects':    this._effects,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'History', "wrong class hydrating History", json);
    let history = new History();
    history._effects = History.effectsFromJSON(json.effects);
    return history;
  }

  static effectsFromJSON(json) {
    Assert.array(json);
    let effects = [];
    for (const k in json) {
      effects[k] = json[k] ? History.effectFromJSON(json[k]) : null;
    }
    return effects;
  }

  static effectFromJSON(json) {
    const klass = Effects[json._class] || null;
    if (!klass) Assert.error('unknown Effect '+json._class, json);
    return klass.fromJSON(json);
  }

  static assert(sample) {
    if (sample instanceof(History)) {
      return sample;
    }
    Assert.error('wrong History '+typeof(sample), sample);
  }
}

const Effects = Object.freeze({
  BulkEffect:     BulkEffect,
  DragCard:       DragCard,
  TurnCard:       TurnCard,
  AlterCard:      AlterCard,
});

export default History;
