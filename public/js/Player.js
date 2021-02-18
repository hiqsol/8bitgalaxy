class Player {
  constructor(name, race) {
    this._name = name;
    this._race = race;
  }

  get name() { return this._name; }
  get race() { return this._race; }
}

export default Player;
