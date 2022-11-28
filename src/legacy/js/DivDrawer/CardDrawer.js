import Drawer from "./Drawer.js";
import {v4 as uuidv4} from "uuid";

class CardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, card, y, x) {
    let e = this._drawer.importNode(parent, this.fragment, ".Card");
    let m = this._drawer.m;
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
      if (event.ctrlKey) {
        if (event.currentTarget.classList.contains('Alterable')) {
          event.currentTarget.classList.toggle('Altered');
        }
      } else {
        event.currentTarget.classList.toggle('Turned');
      }
    }

    e.onclick = (event) => {
      event.currentTarget.classList.toggle('Selected');
    }

    this.drawImage(e, card.Specs);
    this._drawer.draw(e, card.Specs);
    if (card.Alternative) {
      this._drawer.draw(e, card.Alternative, true);
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

  get fragment() {
    return this._drawer.getFragment(HTML);
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

const HTML = `
  <div class="Card">
    <div class="Image"><div class="Klass lni"></div></div>
    <div class="Name"><div class="Value">Name</div></div>
  </div>
`;

export default CardDrawer;
