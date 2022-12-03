import Drawer from './Drawer.js';
import Params from './Params.js';
import Direction from './Direction.js';

class BoardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, board, params) {
    let e = this._drawer.importNode(parent, this.fragment, '.Board');
    this._drawer.draw(e, board.field, new Params(16, 8));
    this.drawHomes(e, board);
  }

  drawHomes(parent, board) {
    this._drawer.draw(parent, board.home(1), new Params(68, 55, Direction.BottomToTop));
    this._drawer.draw(parent, board.home(2), new Params( 1,  1, Direction.TopToBottom));
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Board"></div>
`;

export default BoardDrawer;
