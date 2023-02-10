import Effect from "./Effect.js";
import DragCard from "./DragCard.js";
import TurnCard from "./TurnCard.js";
import AlterCard from "./AlterCard.js";
import TurnSpace from "./TurnSpace.js";
import Assert from "../Assert.js";

class BulkEffect extends Effect {
  constructor(effects = null) {
    super();
    this._effects = effects ? Assert.arrayOf(effects, Effect) : [];
  }

  get effects() { return this._effects; }

  undo() {
    let list = [];
    for (const ef of this.effects) {
      if (ef === null) continue;
      list.unshift(ef.undo());
    }
    return new BulkEffect(list);
  }

  toJSON() {
    return {
      '_class':     this.constructor.name,
      'effects':    this._effects,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'BulkEffect', "wrong class hydrating BulkEffect", json);
    let bulk = new BulkEffect();
    bulk._effects = BulkEffect.effectsFromJSON(json.effects);
    return bulk;
  }

  static effectsFromJSON(json) {
    Assert.array(json);
    let effects = [];
    for (const k in json) {
      effects[k] = json[k] ? BulkEffect.effectFromJSON(json[k]) : null;
    }
    return effects;
  }

  static effectFromJSON(json) {
    const klass = Effects[json._class] || null;
    if (!klass) Assert.error('unknown Effect '+json._class, json);
    return klass.fromJSON(json);
  }

  static assert(sample) {
    if (sample instanceof(BulkEffect)) {
      return sample;
    }
    Assert.error('wrong BulkEffect '+typeof(sample), sample);
  }
}

const Effects = Object.freeze({
  BulkEffect:     BulkEffect,
  DragCard:       DragCard,
  TurnCard:       TurnCard,
  AlterCard:      AlterCard,
  TurnSpace:       TurnSpace,
});

export default BulkEffect;
