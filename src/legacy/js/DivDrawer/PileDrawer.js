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
    if (pile.folded) {
      e.classList.add('Folded');
    }
    this._drawer.addDragEvents(e);
    this.drawCards(e, pile);
    e.querySelector(".Name .Value").innerHTML = pile.name;

    let timer;
    e.onmouseover = () => {
      timer = setTimeout(function(){
        e.classList.remove('Folded');
      }, 300);
    }
    e.onmouseout = () => {
      e.classList.add('Folded');
      clearTimeout(timer);
    }

    return e;
  }

  drawCards(parent, pile) {
    if (!pile.size) return;
    for (let i = 0; i < pile.size; i++) {
      this._drawer.draw(parent, pile.get(i));
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
  <div class="Pile droppable">
    <div class="Name"><div class="Value">Name</div></div>
  </div>
`;

export default PileDrawer;
