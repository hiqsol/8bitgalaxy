import Drawer from "./Drawer.js";
import Params from "./Params.js";
import aDrawer from './aDrawer.js';
import Assert from '../Model/Assert.js';
import TurnCard from '../Model/History/TurnCard.js';
import AlterCard from '../Model/History/AlterCard.js';

class CardDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Card">
        <div class="Image"><div class="Klass lni"></div></div>
        <div class="Name"><div class="Value">Name</div></div>
      </div>
    `;
  }

  draw(parent, card, params) {
    params.id = card.id;
    let e = this.drawNode(parent, params);

    if (card.State.name) e.classList.add(card.State.name);
    if (card.Type) e.classList.add(card.Type);
    if (card.Race) e.classList.add(card.Race);
    if (card.Alternative) e.classList.add('Alterable');

    e.ondragstart = (event) => {
      event.currentTarget.classList.add("dragging");
      event.dataTransfer.setData("text/plain", event.currentTarget.id);
    };
    e.ondragend = (event) => {
      event.target.classList.remove("dragging");
    };
    e.ondblclick = (event) => {
      this.apply(event.ctrlKey ? new AlterCard(card) : new TurnCard(card));
    }
    e.onclick = (event) => {
      let card = event.currentTarget;
      let show = document.getElementById('Show');

      show.innerHTML = '';
      if (!card.classList.contains("Selected")) {
        let copy = card.cloneNode(true);
        copy.id = 'CardCopyForShow';
        copy.style.left = null;
        copy.style.top = null;
        copy.style.bottom = '0px';
        copy.classList.remove('Turned');
        show.appendChild(copy);
      }

      card.classList.toggle('Selected');
    }

    this.drawImage(e, card.Specs);
    this.drawer.draw(e, card.Specs, Params.empty());
    if (card.Alternative) {
      this.drawer.draw(e, card.Alternative, Params.isAlternative());
    }

    e.querySelector(".Name .Value").innerHTML = card.Name;

    return e;
  }

  drawImage(e, specs) {
    let i = e.querySelector(".Image .Klass.lni");
    if (i) {
      i.classList.add("lni-" + this.type2image(specs.Type));
    }
  }

  type2image(type) {
    return TypeImages[type.toLowerCase()];
  }

  race2image(race) {
    return RaceImages[race.toLowerCase()];
  }
}

const TypeImages = Object.freeze({
  hero: "user",
  ship: "rocket",
  base: "codepen",
  colony: "world",
  tech: "react",
});

const RaceImages = Object.freeze({
  plasma: "emoji-smile",
  giant: "bricks",
  ai: "rook",
  human: "world",
});

export default CardDrawer;
