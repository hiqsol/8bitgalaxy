import Drawer from './Drawer.js';

class BoardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, board) {
    let e = this._drawer.importNode(parent, this.fragment, '.Board');
    this._drawer.draw(e, board.field, 8, 15);
    this.drawHomes(e, board);
  }

  drawHomes(parent, board) {
    this._drawer.draw(parent, board.home(1), 31, 29);
    this._drawer.draw(parent, board.home(2), 30, 46);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Board"></div>
`;

export default BoardDrawer;
