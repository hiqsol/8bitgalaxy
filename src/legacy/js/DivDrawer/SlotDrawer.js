import Drawer from "./Drawer.js";
import aDrawer from "./aDrawer.js";

class SlotDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Slot droppable"></div>';
  }

  draw(parent, slot, params) {
    let e = this.drawNode(parent, params);
    e.classList.add('for-'+slot.type.name);
    if (slot.type.isBase) {
      e.classList.add('for-Colony');
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
