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
    this.drawer.draw(e, board.field, new Params(17, 10));
    this.drawHomes(e, board);
    return e;
  }

  drawHomes(parent, board) {
    this._drawer.draw(parent, board.home(1), new Params(70, 55, Direction.BottomToTop));
    this._drawer.draw(parent, board.home(2), new Params( 1,  3, Direction.TopToBottom));
    this._drawer.draw(parent, board.home(3), new Params(55, 12, Direction.TopToBottom));
  }
}

export default BoardDrawer;
