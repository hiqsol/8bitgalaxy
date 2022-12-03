import Drawer from './Drawer.js';
import Params from './Params.js';

class SlotsDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, slots, params) {
    let e = this._drawer.importNode(parent, this.fragment, '.Slots');
    let m = this._drawer.m;
    e.style.left  = (0.40 + params.x)*m + 'px';
    e.style.top   = (0.20 + params.y)*m + 'px';
    this.drawSlots(e, slots, params.direction);
    return e;
  }

  drawSlots(parent, slots, direction) {
    for (let i=0; i<slots.size; i++) {
      this._drawer.draw(parent, slots.slot(i), new Params(0, i, direction));
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Slots"></div>
`;

export default SlotsDrawer;
