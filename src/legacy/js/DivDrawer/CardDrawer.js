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
    this._elems = {};
    this._doers = {
      'TurnCard':   (card) => this.doTurn(card),
      'AlterCard':  (card) => this.doAlter(card),
    };
  }

  elem(card) { return this._elems[card.id]; }

  draw(parent, card, params) {
    let e = this.drawNode(parent, params);
    e.id = card.id;
    this._elems[card.Name] = e;

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
      this.apply(event.ctrlKey ? new AlterCard(card) : new TurnCard(card));
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

  apply(effect) {
    let ok = this.perform(effect);
    if (ok) this.history.add(effect);
  }

  perform(effect) {
    let cname = effect.constructor.name;
    if (this._doers[cname] === undefined) {
      Assert.error('wrong Effect `' +cname+ '` to perform at CardDrawer', effect);
    }
    let doer = this._doers[cname];
    return doer(effect.card);
  }

  doTurn(card) {
    let cl = this.elem(card).classList;
    cl.toggle('Turned');
    card.setTurned(cl.contains('Turned'));
    return true;
  }

  doAlter(card) {
    let cl = this.elem(card).classList;
    if (!cl.contains('Alterable')) return false;
    cl.toggle('Altered');
    card.setAltered(cl.contains('Altered'));
    return true;
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
