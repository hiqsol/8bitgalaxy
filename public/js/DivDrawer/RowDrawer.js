import Drawer from './Drawer.js';

class RowDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, row) {
    let e = this._drawer.importNode(parent, this.fragment, '.Row');
    e.classList.add(row.direction.name);
    this.drawPiles(e, row);
    return e;
  }

  drawPiles(parent, row) {
    for (let i=0; i<row.size; i++) {
      this._drawer.draw(parent, row.pile(row.size-i-1), i*row.direction.yStep, i*row.direction.xStep);
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Row"></div>
`;

export default RowDrawer;
