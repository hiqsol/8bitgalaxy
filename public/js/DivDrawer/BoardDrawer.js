import Drawer from './Drawer.js';

class BoardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, board) {
    let e = this._drawer.importNode(parent, this.fragment, '.Board');
    this.drawHomes(e, board);
    this._drawer.draw(e, board.field);
  }

  drawHomes(parent, board) {
    this._drawer.draw(parent, board.home(1));
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Board"></div>
`;

export default BoardDrawer;
