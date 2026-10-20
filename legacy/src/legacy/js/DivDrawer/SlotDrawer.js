import aDrawer from "./aDrawer.js";

class SlotDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Slot droppable"></div>';
  }

  draw(parent, slot, params) {
    params.id = slot.id;
    let e = this.drawNode(parent, params);
    let slots = slot.parent;
    let types = [slots.name];
    if (slots.isName('Hand')) {
      types = ['Hero', 'Ship'];
    } else if (slots.isName('Base')) {
      types = ['Base', 'Colony'];
    } else if (slots.isName('Ship')) {
      types = ['Hero', 'Ship'];
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
