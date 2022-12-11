import Drawer from "./Drawer.js";

class aDragger {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  get drawer()      { return this._drawer; }
  get performer()   { return this._drawer.performer; }

  apply(effect)     { return this.performer.apply(effect); }

  assert(sample) {
    if (sample instanceof (aDragger)) {
      return sample;
    }
    Assert.error("not a aDragger", sample);
  }
}

export default aDragger;
