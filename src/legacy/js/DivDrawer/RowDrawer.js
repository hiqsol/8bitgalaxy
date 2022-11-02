import Drawer from './Drawer.js';

class RowDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, row, y, x) {
    let e = this._drawer.importNode(parent, this.fragment, '.Row');
    let m = this._drawer.m;
    e.style.left  = (0 + x*m) + 'px';
    e.style.top   = (0 + y*m) + 'px';
    e.classList.add(row.direction.name);
    this.drawPiles(e, row);
    return e;
  }

  drawPiles(parent, row) {
    for (let i=0; i<row.size; i++) {
      this._drawer.draw(parent, row.pile(row.size-i-1), i*row.direction.yStep*6, i*row.direction.xStep*6);
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Row"></div>
`;

export default RowDrawer;
