import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';

class RowDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `<div class="Row"></div>`;
  }

  draw(parent, row, params) {
    let e = this.drawNode(parent, params);
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
}

export default RowDrawer;
