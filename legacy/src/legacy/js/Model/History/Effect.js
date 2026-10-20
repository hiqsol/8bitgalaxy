import Assert from "../Assert.js";

class Effect {
  constructor() {
  }

  static assert(sample) {
    if (sample instanceof(Effect)) {
      return sample;
    }
    Assert.error('wrong Effect '+typeof(sample), sample);
  }
}

export default Effect;
