import Slot from "./Slot.js";
import Assert from "./Assert.js";

class Slots {
  constructor(parent, name, size) {
    this._parent = parent;
    this._name = name;
    this._id = parent.id + '.' + name;
    this.initSlots(size);
  }

  initSlots(size) {
    this._slots = [];
    for (var i = 0; i < size; i++) {
      this._slots.push(new Slot(this, i));
    }
  }

  toJSON() {
    return {
      '_class':     'Slots',
      'name':       this._name,
      'slots':      this._slots,
    }
  }

  static fromJSON(json, parent) {
    Assert.assert(json._class == 'Slots', "wrong class hydrating Slots", json);
    let slots = new Slots(parent, json.name, 0);
    slots._slots = Slot.arrayFromJSON(json.slots, slots);
    return slots;
  }

  get id()        { return this._id; }
  get name()      { return this._name; }
  get size()      { return this._slots.length; }
  get last()      { return this._slots[0]; }
  get slots()     { return this._slots; }

  slot(no)        { return this.slots[this.assertNo(no)]; }
  isName(name)    { return this._name === name; }

  put(card, no)   { this.slot(no).put(card); }

  assertNo(no) {
    if (no<0 || no>=this.size) {
      Assert.error('wrong slot no', no);
    }
    return no;
  }
}

export default Slots;
