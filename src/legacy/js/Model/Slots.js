import Slot from "./Slot.js";
import Type from "./Type.js";
import Assert from "./Assert.js";

class Slots {
  constructor(type, size) {
    this._type = Type.assert(type);
    this.initSlots(size);
  }

  toJSON() {
    return {
      '_class':     'Slots',
      'type':       this._type.name,
      'slots':      this._slots,
    }
  }

  static fromJSON(json) {
    Assert.assert(json._class == 'Slots', "wrong class hydrating Slots", json);
    let slots = new Slots(json.type, 0);
    slots._slots = Slot.arrayFromJSON(json.slots);
    return slots;
  }

  initSlots(size) {
    this._slots = [];
    for (var i = 0; i < size; i++) {
      this._slots.push(new Slot(this._type));
    }
  }

  get type()      { return this._type; }
  get size()      { return this._slots.length; }
  get last()      { return this._slots[0]; }
  get slots()     { return this._slots; }

  slot(no)        { return this.slots[this.assertNo(no)]; }
  isType(type)    { return this._type === type; }

  put(card, no)   { this.slot(no).put(card); }

  assertNo(no) {
    if (no<0 || no>=this.size) {
      Assert.error('wrong slot no', no);
    }
    return no;
  }
}

export default Slots;
