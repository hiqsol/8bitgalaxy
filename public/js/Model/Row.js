import Pile from "./Pile.js";

class Row {
  constructor(name, total, inlets) {
    this._name = name;
    this._total = total;
    this.initPiles(total);
  }

  initPiles(total) {
    for (let i=0;i<total;i++) {
      this._piles.push(new Pile(this.name+i));
    }
  }

  get name()  { return this._name; }
  get total() { return this._total; }
  get piles() { return this._piles; }
  get inlet() { return this._piles[0]; }

  pile(no) { return this.piles[no]; }
}

export default Pile;
