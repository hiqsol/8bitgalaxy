import Drawer from "./Drawer.js";

class aDragger {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  get drawer()      { return this._drawer; }
  get performer()   { return this._drawer.performer; }

  obj(id)           { return this.drawer.obj(id); }
  elem(id)          { return this.drawer.elem(id); }
  apply(effect)     { return this.performer.apply(effect); }

  assert(sample) {
    if (sample instanceof (aDragger)) {
      return sample;
    }
    Assert.error("not a aDragger", sample);
  }
}

export default aDragger;
