import Drawer from './Drawer.js';

class GameDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, game) {
    let e = this._drawer.importNode(parent, this.fragment, '.Game');
    this._drawer.draw(e, game.board);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Game"></div>
`;

export default GameDrawer;
