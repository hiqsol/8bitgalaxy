import Drawer from "./Drawer.js";

class PileDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
    this._discards = {};
    this._discardPiles = {};
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
    this._drawer.addDragEvents(e, pile);
    this.drawCards(e, pile);
    e.querySelector(".Name .Value").innerHTML = pile.name;

    if (pile.name != 'Ideas' && pile.name != 'Reserve') {
      let overTimer, outTimer;
      e.onmouseover = () => {
        clearTimeout(outTimer);
        overTimer = setTimeout(function(){
          e.classList.remove('Folded');
        }, 300);
      }
      e.onmouseout = () => {
        clearTimeout(overTimer);
        outTimer = setTimeout(function(){
          e.classList.add('Folded');
        }, 200);
      }
    }

    const home = e.closest('.Home');
    let race = null;
    if (home) {
      race = home.getAttribute('race');
    }
    if (pile.name === 'Discard') {
      this._discards[race] = e;
      this._discardPiles[race] = pile;
    }
    if (pile.name === 'Reserve') {
      e.ondblclick = (event) => {
        let discard = this._discards[race];
        let discardPile = this._discardPiles[race];
        let cards = discardPile.cards;
        discardPile.removeAll();

        const nums = new Set();
        while(nums.size !== cards.length) {
          nums.add(Math.floor(Math.random() * cards.length));
        }

        for (const i of nums) {
          let card = cards[i];
          let elem = document.getElementById(card.Name);
          elem.classList.add('Turned');
          card.setTurned(true);
          console.log(card, elem);
          pile.put(card);
          e.appendChild(elem);
        }
        Drawer.resetDraggability(e);
      }
    }

    return e;
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  drawCards(parent, pile) {
    if (!pile.size) return;
    for (let i = 0; i < pile.size; i++) {
      let card = this._drawer.draw(parent, pile.get(i));
      card.draggable = (i === pile.size-1);
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
    <div class="Name">
      <div class="Value">Name</div>
      <div class="Size"></div>
    </div>
  </div>
`;

export default PileDrawer;
