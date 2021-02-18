import Board from './Board.js';
import Star from './Star.js';
import Card from './Card.js';
import Template from './Template.js';

class DivDrawer {
  constructor() {
    this.m    = 50;
    this.tpl  = new Template();
  }

  draw(parent, obj) {
    if (parent === null) {
      parent = document.querySelector('body');
    }
    if (obj instanceof(Board)) {
      this.drawBoard(parent, obj);
    }
  }

  drawBoard(parent, board) {
    this.drawHomes(parent, board);
    this.drawField(parent, board.field);
  }

  drawHomes(parent, board) {
    this.drawHome(parent, board);
  }

  drawHome(parent, board) {
    let n = document.importNode(this.tpl.home, true);
    let e = n.querySelector('.pile');
    parent.appendChild(n);
    let c = this.drawCard(e, board.card('AI-Base-7a'), 0, 0);
    c.style.transform = "rotate(-90deg)";
  }

  drawField(parent, field) {
    this.drawStar(parent, field.star(0, 0));
    this.drawStar(parent, field.star(1, 0));
    this.drawStar(parent, field.star(0, 1));
    this.drawStar(parent, field.star(1, 1));
    this.drawStar(parent, field.star(2, 1));
    this.drawStar(parent, field.star(0, 2));
    this.drawStar(parent, field.star(1, 2));
  }

  drawStar(parent, star) {
    let n = document.importNode(this.tpl.star, true);
    let e = n.querySelector('.star');
    parent.appendChild(n);
    let indent = this.m * (star.y % 2 ? 1 : 8.4);
    e.style.left  = (star.x*this.m*14.6 + indent) + 'px';
    e.style.top   = (star.y*this.m*12.6 + this.m) + 'px';
    let i = n.querySelector('.star .inner');
    this.drawStarCards(e, star);
  }

  drawStarCards(parent, star) {
    this.drawCard(parent, star.base(0), 0, 0);
    this.drawCard(parent, star.base(1), 0, 1);
    this.drawCard(parent, star.base(2), 0, 2);

    this.drawCard(parent, star.ship(0), 0, 3);
    this.drawCard(parent, star.ship(1), 1, 3);
    this.drawCard(parent, star.ship(2), 2, 3);
    this.drawCard(parent, star.ship(3), 3, 3);

    this.drawCard(parent, star.colony(0), 8, 0);
    this.drawCard(parent, star.colony(1), 8, 1);
    this.drawCard(parent, star.colony(2), 8, 2);

    this.drawCard(parent, star.hero(0), 6, 4);
    this.drawCard(parent, star.hero(1), 6, 5);
    this.drawCard(parent, star.hero(2), 6, 6);
    this.drawCard(parent, star.hero(3), 6, 7);
  }

  drawCard(parent, card, x, y) {
    if (! card) {
      return;
    }

    let t = this.tpl.card;
    let n = document.importNode(t, true);
    let e = n.querySelector('.card');
    parent.appendChild(n);
    e.style.left  = (25 + x*this.m) + 'px';
    e.style.top   = (160 + y*this.m) + 'px';
    let type = card.spec.type;
    e.classList.add(type);
    e.classList.add(card.spec.race);

    let i = e.querySelector('.Image .Klass.lni');
    i.classList.add('lni-'+this.type2image(type));

    this.setCardPart(e, 'Level',        card.level, card.klass);
    this.setCardPart(e, 'Defense',      null);
    this.setCardPart(e, 'Attack',       card.spec.attack);
    this.setCardPart(e, 'Colonization', card.spec.colonization);
    this.setCardPart(e, 'Science',      card.spec.science);
    this.setCardPart(e, 'Production',   card.spec.production);
    this.setCardPart(e, 'Utilization',  null, card.spec.utilizationValue, card.spec.utilizationType);

    return e;
  }

  type2image(type) {
    return TypeImages[type] ?? 'question-circle';
  }

  race2image(race) {
    return raceImages[race] ?? 'question-circle';
  }

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
}

const TypeImages = Object.freeze({
  'Hero':     'user',
  'Ship':     'rocket',
  'Base':     'flower',
  'Colony':   'world',
})

const raceImages = Object.freeze({
  'Plasma':   'emoji-smile',
  'Giant':    'bricks',
  'Ai':       'rook',
  'human':    'world',
})

export default DivDrawer;
