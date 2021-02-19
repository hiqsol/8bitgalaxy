class Player {
  constructor(name, race) {
    this._name = name;
    this._race = race;
  }

  get name() { return this._name; }
  get race() { return this._race; }

  static assert(player) {
    if (! player instanceof(Player)) {
      throw new Error('not a player:' + typeof(player))
    }
    return player;
  }
}

export default Player;
