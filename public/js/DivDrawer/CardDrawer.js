import Template from './Template.js';

class CardDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, card, y, x) {
    if (! card) {
      return;
      //throw new Error('no card given');
    }

    let n = document.importNode(this._drawer.tpl.card, true);
    let e = n.querySelector('.card');
    parent.appendChild(n);
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

export default CardDrawer;
