import Drawer from './Drawer.js';

class SlotsDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, slots, y, x) {
    let e = this._drawer.importNode(parent, this.fragment, '.Slots');
    let m = this._drawer.m;
    e.style.left  = (20 + x*m) + 'px';
    e.style.top   = (10 + y*m) + 'px';
    this.drawSlots(e, slots);
    return e;
  }

  drawSlots(parent, slots) {
    for (let i=0; i<slots.size; i++) {
      this._drawer.draw(parent, slots.slot(i), i, 0);
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Slots"></div>
`;

export default SlotsDrawer;
