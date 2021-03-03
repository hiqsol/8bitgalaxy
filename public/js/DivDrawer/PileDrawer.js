import Drawer from './Drawer.js';

class PileDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, pile, y, x) {
    let m = this._drawer.m;
    let e = this.importNode(parent, '.Pile');
    e.style.left  = (0 + x*m) + 'px';
    e.style.top   = (0 + y*m) + 'px';
    e.classList.add(pile.direction.name);
    this.drawCards(e, pile);
    return e;
  }

  drawCards(parent, pile) {
    let size = pile.size ? pile.size : 1;
    for (let i=0;i<size;i++) {
      this._drawer.draw(parent, pile.get(i), i*0.14, i*0.16);
    }
  }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment()  { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Pile"></div>
`;

export default PileDrawer;
