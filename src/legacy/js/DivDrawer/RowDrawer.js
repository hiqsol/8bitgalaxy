import Drawer from './Drawer.js';
import Params from './Params.js';

class RowDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, row, params) {
    let e = this._drawer.importNode(parent, this.fragment, '.Row');
    let m = this._drawer.m;
    e.style.left  = (0 + params.x*m) + 'px';
    e.style.top   = (0 + params.y*m) + 'px';
    e.classList.add(params.direction.name);
    this.drawPiles(e, row, params.direction);
    return e;
  }

  drawPiles(parent, row, direction) {
    const dir = direction.counterpart;
    for (let i=row.size-1; i>=0; i--) {
      this._drawer.draw(parent, row.pile(i),
        new Params(i*direction.xStep*6, i*direction.yStep*6, dir)
      );
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Row"></div>
`;

export default RowDrawer;
