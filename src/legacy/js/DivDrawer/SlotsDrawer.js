import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';

class SlotsDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Slots"></div>';
  }

  draw(parent, slots, params) {
    params.x += 0.4;
    params.y += 0.2;
    let e = this.drawNode(parent, params);
    this.drawSlots(e, slots, params.direction);
    return e;
  }

  drawSlots(parent, slots, direction) {
    for (let i=0; i<slots.size; i++) {
      this._drawer.draw(parent, slots.slot(i), new Params(0, i, direction));
    }
  }
}

export default SlotsDrawer;
