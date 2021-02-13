import Star from "./Star.js";

class Field {
  constructor(board) {
    this.board = board;
    this.stars = [[], [], []];
  }

  star(x, y) {
    if (! this.stars[x][y]) {
      this.stars[x][y] = new Star(this, x, y);
    }
    
    return this.stars[x][y];
  }
}

export default Field;
