import Star from "./Star.js";

class Field {
  constructor(board) {
    this.board = board;
    this.stars = [[], [], []];
  }

  star(y, x) {
    if (! this.stars[y][x]) {
      this.stars[y][x] = new Star(this, y, x);
    }
    return this.stars[y][x];
  }
}

export default Field;
