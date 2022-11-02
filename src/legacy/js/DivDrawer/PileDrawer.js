import Drawer from "./Drawer.js";

class PileDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, pile, y, x) {
    let m = this._drawer.m;
    let e = this.importNode(parent, ".Pile");
    e.style.left = (0 + x * m) + "px";
    e.style.top = (0 + y * m) + "px";
    e.classList.add(pile.direction.name);
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
    this.drawCards(e, pile);
    return e;
  }

  drawCards(parent, pile) {
    let size = pile.size ? pile.size : 1;
    let shift = pile.folded ? 1 / size : 1;
    for (let i = 0; i < size; i++) {
      this._drawer.draw(parent, pile.get(i), i * shift, i * shift);
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
    <div class="Pile droppable"></div>
`;

export default PileDrawer;
