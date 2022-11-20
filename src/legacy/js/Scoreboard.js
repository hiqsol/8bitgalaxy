import Game from "./Game.js";

class Scoreboard {
  constructor(game) {
    this._game = game;
  }

  get game() { return this._game; }

  static assert(sample) {
    if (sample instanceof(Scoreboard)) {
      return sample;
    }
    Assert.error('not a Scoreboard', sample);
  }
}

export default Scoreboard;
