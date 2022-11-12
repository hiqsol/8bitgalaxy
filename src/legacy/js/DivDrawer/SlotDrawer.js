import Drawer from "./Drawer.js";

class SlotDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, slot) {
    let m = this._drawer.m;
    let e = this.importNode(parent, ".Slot");
    e.style.left = (20 + slot.x * m) + "px";
    e.style.top = (10 + slot.y * m) + "px";
    e.classList.add(slot.direction.name);
    e.addEventListener("dragover", (event) => {
      console.log("dragOver");
      event.preventDefault();
    });
    e.addEventListener("drop", (event) => {
      console.log("Drop");
      event.preventDefault();
      // Get the data, which is the id of the source element
      const id = event.dataTransfer.getData("text");
      const card = document.getElementById(id);
      e.appendChild(card);
    });
    this.drawCard(e, slot);

    return e;
  }

  drawCard(parent, slot) {
    if (slot.card) {
      this._drawer.draw(parent, slot.card, 0, 0);
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
