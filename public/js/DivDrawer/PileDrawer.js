import Drawer from './Drawer.js';

class PileDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, pile) {
    let e = this.importNode(parent, '.Pile');
    e.classList.add(pile.align);
    this.drawCards(e, pile);
  }

  drawCards(parent, pile) {
    for (let i=0;i<pile.size;i++) {
      this._drawer.drawCard(parent, pile.get(i), i*0.1, i*0.1);
    }
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
