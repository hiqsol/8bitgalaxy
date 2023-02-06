import Assert from "./Assert.js";

class Bearing {
  constructor(oclock) {
    this._oclock = Bearing.assertOclock(oclock);
  }

  get oclock()        { return this._oclock; }
  get xStep()         { return xSteps[this.oclock]; }
  get yStep()         { return ySteps[this.oclock]; }
  get opposite()      { const n = this.oclock+6; return new Bearing(n>12 ? n-12 : n); }
  get reversed()      { return new Bearing(Reverseds[this.oclock]); }
  get isOdd()         { return this.oclock % 2 == 1; }
  get isEven()        { return this.oclock % 2 == 0; }

  static assertOclock(oclock) {
    if (Number.isInteger(oclock) && (oclock >= 1) && (oclock <= 12)) {
      return oclock;
    }
    Assert.error('wrong clock Bearing', oclock);
  }

  static assert(sample) {
    if (sample instanceof Bearing) {
      return sample;
    }
    if (Number.isInteger(sample)) {
      return new Bearing(sample);
    }
    console.log('typeof(sample)', typeof(sample));
    Assert.error('not a Bearing', sample);
  }
}

const xSteps = [0,
  +1/2, +1/2, +1.0, +1.0, +1/2, +1/2,
  -1/2, -1/2, -1.0, -1.0, -1/2, -1/2,
];

const ySteps = [0,
  -1, -1, +0, +0, +1, +1,
  +1, +1, +0, +0, -1, -1,
];

const Reverseds = [0,
  8, 7, 10, 9, 12, 11,
  2, 1,  4, 3,  6,  5,
];

export default Bearing;
