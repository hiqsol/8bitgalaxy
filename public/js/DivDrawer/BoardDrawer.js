import Template from './Template.js';

class BoardDrawer {
  constructor(drawer) {
    this._drawer  = drawer;
  }

  draw(parent, board) {
    this.drawHomes(parent, board);
    this._drawer.draw(parent, board.field);
  }

  drawHomes(parent, board) {
    //this.drawHome(parent, board.home('p1'));
  }
}

export default BoardDrawer;
