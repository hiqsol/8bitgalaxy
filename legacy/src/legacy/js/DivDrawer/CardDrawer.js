import Params from "./Params.js";
import aDrawer from './aDrawer.js';
import TurnCard from '../Model/History/TurnCard.js';
import AlterCard from '../Model/History/AlterCard.js';
import heroImage from '$images/types/astronaut-helmet.svg?raw';
import shipImage from '$images/types/jet-fighter.svg?raw';
import baseImage from '$images/types/defense-satellite.svg?raw';
import colonyImage from '$images/types/moon-orbit.svg?raw';
import eventImage from '$images/types/spiky-explosion.svg?raw';
import toolImage from '$images/types/spanner.svg?raw';

class CardDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Card">
        <span class="Back1"></span>
        <span class="Back2"></span>
        <div class="Image"><div class="Klass lni"></div></div>
        <div class="Name"><div class="Value">Name</div></div>
      </div>
    `;
  }

  draw(parent, card, params) {
    params.id = card.id;
    let e = this.drawNode(parent, params);

    if (card.State.name) e.classList.add(...card.State.names);
    if (card.Type) e.classList.add(card.Type);
    if (card.Type) e.classList.add(card.Role);
    if (card.Type) e.classList.add(card.Origin);
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
      this.apply(new TurnCard(card));
    }
    e.onclick = (event) => {
      if (event.ctrlKey) {
        this.apply(new AlterCard(card));
      } else {
        let card = event.currentTarget;
        this.getDrawer('Show').show(card);
        card.classList.toggle('Selected');
      }
    }

    this.addShowEvents(e, card);

    this.drawer.draw(e, card.Specs, new Params().setClassList('Normal'));
    if (card.Alternative) {
      this.drawer.draw(e, card.Alt, new Params().setClassList('Alternative'));
    }
    this.drawImage(e, card.Specs);

    e.querySelector(".Name .Value").innerHTML = card.Name;

    return e;
  }

  addShowEvents(e, card) {
    let show = this.getDrawer('Show');
    e.onmouseenter = (event) => {
      if (e.classList.contains("Turned")) {
        return;
      }
      show.show(event.currentTarget);
    };
    e.onmouseleave = (event) => {
      if (e.classList.contains("Turned")) {
        return;
      }
      show.hide();
    };
  }

  removeShowEvents(e) {
    e.onmouseenter = null;
    e.onmouseleave = null;
  }

  drawImage(e, specs) {
    let i = e.querySelector(".Image .Klass.lni");
    if (!i) return;
    const svg = TypeSvgs[specs.Type.toLowerCase()];
    if (svg) i.innerHTML = svg;
    else i.classList.add("lni-" + this.type2image(specs.Type));
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
  event: "bolt-alt",
  tool: "wrench",
  tech: "react",
});

// game-icons.net images, a LineIcons glyph for a Type without one
const TypeSvgs = Object.freeze({
  hero: heroImage,
  ship: shipImage,
  base: baseImage,
  colony: colonyImage,
  event: eventImage,
  tool: toolImage,
});

const RaceImages = Object.freeze({
  plasma: "emoji-smile",
  giant: "bricks",
  ai: "rook",
  human: "world",
});

export default CardDrawer;
