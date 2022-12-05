import Drawer from "./Drawer.js";
import aDrawer from "./aDrawer.js";

class SlotDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Slot droppable"></div>';
  }

  draw(parent, slot, params) {
    let e = this.drawNode(parent, params);
    let types = [slot.name];
    if (slot.isName('Hand')) {
      types = ['Hero', 'Ship'];
    } else if (slot.isName('Base')) {
      types = ['Base', 'Colony'];
    }
    for (let type of types) {
      e.classList.add('for-' + type);
    }
    this.drawer.addDragEvents(e, slot);
    this.drawCard(e, slot);

    return e;
  }

  drawCard(parent, slot) {
    if (slot.card) {
      let card = this._drawer.draw(parent, slot.card);
      card.draggable = true;
    }
  }
}

export default SlotDrawer;
