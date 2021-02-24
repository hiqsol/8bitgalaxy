import Drawer from './Drawer.js';

class CardDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, card, y, x) {
    if (! card) {
      return;
      //throw new Error('no card given');
    }

    let e = this.importNode(parent, '.Card');
    e.style.left  = (25 + x*this.m) + 'px';
    e.style.top   = (160 + y*this.m) + 'px';
    e.classList.add(card.Type);
    e.classList.add(card.Race);

    let i = e.querySelector('.Image .Klass.lni');
    i.classList.add('lni-'+this.type2image(card.Type));

    this.setCardPart(e, 'Level',        card.Level, card.Klass);
    this.setCardPart(e, 'Defense',      null);
    this.setCardPart(e, 'Attack',       card.Attack);
    this.setCardPart(e, 'Colonization', card.Colonization);
    this.setCardPart(e, 'Science',      card.Science);
    this.setCardPart(e, 'Production',   card.Production);
    this.setCardPart(e, 'Utilization',  null, card.UtilizationValue, card.UtilizationType);

    return e;
  }

  type2image(type) { return TypeImages[type.toLowerCase()] ?? 'question-circle'; }
  race2image(race) { return raceImages[race.toLowerCase()] ?? 'question-circle'; }

  setCardPart(parent, part, value, type = null) {
    if (value) {
      parent.querySelector('.'+part+' .value').innerHTML = value;
      if (type) {
        parent.querySelector('.' + part).classList.add(type);
      }
    } else {
      parent.querySelector('.'+part).innerHTML = '';
    }
  }

  get m() { return this._drawer.m; }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment() {
    return this._drawer.getFragment(HTML);
  }
}

const TypeImages = Object.freeze({
  hero:     'user',
  ship:     'rocket',
  base:     'flower',
  colony:   'world',
})

const raceImages = Object.freeze({
  plasma:   'emoji-smile',
  giant:    'bricks',
  ai:       'rook',
  human:    'world',
})

const HTML = `
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
`;

export default CardDrawer;
