import Drawer from "./Drawer.js";

class SlotDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, slot, params) {
    let m = this._drawer.m;
    let e = this.importNode(parent, ".Slot");
    e.style.left  = (0 + params.x*m) + "px";
    e.style.top   = (0 + params.y*m) + "px";
    e.classList.add('for-'+slot.type.name);
    if (slot.type.isBase) {
      e.classList.add('for-Colony');
    }
    e.classList.add(params.direction.name);
    this._drawer.addDragEvents(e, slot);
    this.drawCard(e, slot);

    return e;
  }

  drawCard(parent, slot) {
    if (slot.card) {
      let card = this._drawer.draw(parent, slot.card);
      card.draggable = true;
    }
  }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment() {
    return this._drawer.getFragment(HTML);
  }
}

const HTML = `
  <div class="Slot droppable"></div>
`;

export default SlotDrawer;
