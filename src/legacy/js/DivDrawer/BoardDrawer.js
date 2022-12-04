import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';
import Direction from './Direction.js';

class BoardDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `<div class="Board"></div>`;
  }

  draw(parent, board, params) {
    let e = this.drawNode(parent, params);
    this.drawer.draw(e, board.field, new Params(16, 8));
    this.drawHomes(e, board);
    return e;
  }

  drawHomes(parent, board) {
    this._drawer.draw(parent, board.home(1), new Params(68, 55, Direction.BottomToTop));
    this._drawer.draw(parent, board.home(2), new Params( 1,  1, Direction.TopToBottom));
    this._drawer.draw(parent, board.home(3).ideas, new Params(55, 13, Direction.TopToBottom));
  }
}

export default BoardDrawer;
