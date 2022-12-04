import Drawer from "./Drawer.js";
import Params from "./Params.js";
import aDrawer from './aDrawer.js';

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
    let e = this.drawNode(parent, params);
    e.id = card.Name;

    if (card.State.name) e.classList.add(card.State.name);
    if (card.Type) e.classList.add(card.Type);
    if (card.Race) e.classList.add(card.Race);
    if (card.Alternative) e.classList.add('Alterable');

    e.ondragstart = (event) => {
      event.currentTarget.classList.add("dragging");
      event.dataTransfer.setData("text/plain", event.currentTarget.id);
    };
    e.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
    });
    e.ondblclick = (event) => {
      let cl = event.currentTarget.classList;
      if (event.ctrlKey) {
        if (event.currentTarget.classList.contains('Alterable')) {
          cl.toggle('Altered');
          card.setAltered(cl.contains('Altered'));
        }
      } else {
        cl.toggle('Turned');
        card.setTurned(cl.contains('Turned'));
      }
    }

    e.onclick = (event) => {
      event.currentTarget.classList.toggle('Selected');
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
