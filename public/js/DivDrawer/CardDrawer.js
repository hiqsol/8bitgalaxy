import Drawer from './Drawer.js';

class CardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, card, y, x) {
    if (! card) {
      throw new Error('no card given');
    }

    let e = this.importNode(parent, card.visibility, '.Card');
    e.style.left  = (20 + x*this.m) + 'px';
    e.style.top   = (10 + y*this.m) + 'px';
    e.classList.add(card.Type ?? 'Ship');
    e.classList.add(card.Race ?? 'Neutral');
    e.classList.add(card.visibility);
    this.setParts(e, card);

    return e;
  }

  setParts(e, card) {
    let i = e.querySelector('.Image .Klass.lni');
    if (i) {
      i.classList.add('lni-'+this.type2image(card.Type));
    }

    this.setCardPart(e, 'Name',         card.Name);
    this.setCardPart(e, 'Level',        card.Level, card.Klass);
    this.setCardPart(e, 'Defense',      null);
    this.setCardPart(e, 'Attack',       card.Attack);
    this.setCardPart(e, 'Colonization', card.Colonization);
    this.setCardPart(e, 'Science',      card.Science);
    this.setCardPart(e, 'Production',   card.Production);
    this.setCardPart(e, 'Utilization',  null, card.UtilizationValue, card.UtilizationKlass);
  }

  type2image(type) { return TypeImages[type.toLowerCase()] ?? 'question-circle'; }
  race2image(race) { return raceImages[race.toLowerCase()] ?? 'question-circle'; }

  setCardPart(parent, part, value, type = null) {
    if (value) {
      this.setInnerHtml(parent, '.'+part+' .value', value);
      if (type) {
        parent.querySelector('.' + part).classList.add(type);
      }
    } else {
      this.setInnerHtml(parent, '.'+part, '');
    }
  }

  setInnerHtml(parent, selector, value) {
    let e = parent.querySelector(selector);
    if (e) {
      e.innerHTML = value;
    }
  }

  get m() { return this._drawer.m; }

  importNode(parent, name, selector) {
    return this._drawer.importNode(parent, this.fragment(name), selector);
  }

  fragment(name) {
    if (! HTMLs[name]) {
      throw new Error('no fragment named ' + name);
    }
    return this._drawer.getFragment(HTMLs[name]);
  }
}

const TypeImages = Object.freeze({
  hero:     'user',
  ship:     'rocket',
  base:     'flower',
  colony:   'world',
  tech:     'react',
})

const raceImages = Object.freeze({
  plasma:   'emoji-smile',
  giant:    'bricks',
  ai:       'rook',
  human:    'world',
})

const HTMLs = Object.freeze({
  Visible: `
    <div class="Card">
      <div class="image">
        <div class="klass lni"></div>
      </div>
      <div class="part utilization">
        <div class="lni lni-archive"></div>
        <div class="value">U</div>
      </div>
      <div class="part Defense"><div class="lni lni-shield"></div><div class="value">D</div></div>
      <div class="part Attack"><div class="lni lni-pointer"></div><div class="value">A</div></div>
      <div class="part Colonization"><div class="lni lni-basketball"></div><div class="value">C</div></div>
      <div class="part Science"><div class="lni lni-star"></div><div class="value">S</div></div>
      <div class="part Production"><div class="lni lni-package"></div><div class="value">P</div></div>
      <div class="Level Klass"><div class="value">L</div></div>
    </div>
  `,
  Hidden: `
    <div class="Card Hidden">
    </div>
  `,
  Absent: `
    <div class="Card Absent">
      <div class="Name"><div class="value">Name</div></div>
    </div>
  `,
});

export default CardDrawer;
