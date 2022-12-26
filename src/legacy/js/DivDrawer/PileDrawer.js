import Drawer from "./Drawer.js";
import aDrawer from "./aDrawer.js";
import DragCard from "../Model/History/DragCard.js";
import TurnCard from "../Model/History/TurnCard.js";
import BulkEffect from "../Model/History/BulkEffect.js";

class PileDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Pile">
        <div class="Name">
          <div class="Value">Name</div>
          <div class="Size"></div>
        </div>
      </div>
    `;
    this._discards = {};
  }

  draw(parent, pile, params) {
    params.id = pile.id;
    let e = this.drawNode(parent, params);
    if (pile.folded) {
      e.classList.add('Folded');
    }
    this.drawer.addDragEvents(e, pile);
    this.drawCards(e, pile);
    e.querySelector(".Name .Value").innerHTML = pile.name;

    const home = e.closest('.Home');
    let race = null;
    if (home) {
      race = home.getAttribute('race');
    }

    if (pile.name != 'Source' && pile.name != 'Reserve') {
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

    if (pile.name === 'Discard') {
      this._discards[race] = pile;
    }
    if (pile.name === 'Reserve') {
      e.ondblclick = (event) => {
        if (e.children.length>1) return;
        let discard = this._discards[race];
        let cards = discard.cards;

        let nums = new Set();
        while(nums.size !== cards.length) {
          nums.add(Math.floor(Math.random() * cards.length));
        }

        let efs = [];
        for (const n of nums) {
          let card = cards[n];
          efs.push(new BulkEffect([
            new DragCard(card, discard, pile),
            new TurnCard(card, true),
          ]));
        }
        this.apply(new BulkEffect(efs));
      }
    } else {
      e.classList.add('droppable');
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
      let card = this.drawer.draw(parent, pile.get(i));
      card.draggable = (i === pile.size-1);
    }
  }
}

export default PileDrawer;
