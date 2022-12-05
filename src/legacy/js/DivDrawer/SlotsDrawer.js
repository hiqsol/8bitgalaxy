import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';

class SlotsDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Slots">
        <div class="Name">
          <div class="Value">Name</div>
        </div>
      </div>
    `;
  }

  draw(parent, slots, params) {
    if (!slots.isName('Hand')) {
      params.x += 0.4;
      params.y += 0.2;
    }
    let e = this.drawNode(parent, params);
    e.querySelector(".Name .Value").innerHTML = slots.name;
    this.drawSlots(e, slots, params.direction);
    return e;
  }

  drawSlots(parent, slots, direction) {
    let xStep = slots.isName('Hand') ? 1 : 0;
    let yStep = slots.isName('Hand') ? 1 : 1;
    for (let i=0; i<slots.size; i++) {
      this._drawer.draw(parent, slots.slot(i), new Params(xStep*i, yStep*i, direction));
    }
  }
}

export default SlotsDrawer;
