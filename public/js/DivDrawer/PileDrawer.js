import Drawer from './Drawer.js';

class PileDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, pile) {
    let e = this.importNode(parent, '.Pile');
    e.classList.add(pile.align);
    this._drawer.drawCard(e, pile.top, 0, 0);
  }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Pile"></div>
`;

export default PileDrawer;
