import Home from './Home.js';
import Direction from './Direction.js';

class Player {
  constructor(name, race, direction, y, x) {
    this._home = new Home(this);
    this._name = name;
    this._race = race;
    this._direction = Direction.assert(direction);
    this._y = y;
    this._x = x;
  }

  get home()      { return this._home; }
  get name()      { return this._name; }
  get race()      { return this._race; }
  get direction() { return this._direction; }

  static assert(sample) {
    if (sample instanceof(Player)) {
      return sample;
    }
    throw new Error('not a player:' + typeof(sample));
  }
}

export default Player;
