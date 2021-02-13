import Board from './Board.js';
import Star from './Star.js';
import Card from './Card.js';

class DivDrawer {
  constructor(root) {
    this.root = root;
    this.m    = 50;
  }

  get pos() {
    return new Pos(board.ctx, 5, 5, board.m);
  }

  draw(obj) {
    if (obj instanceof(Board)) {
      this.drawBoard(obj);
    }
  }

  drawBoard(board) {
    this.drawStar(board.star(0, 0));
    this.drawStar(board.star(1, 0));
    this.drawStar(board.star(0, 1));
    this.drawStar(board.star(1, 1));
  }

  drawStar(star) {
    let t = document.querySelector('#star-template').content;
    let n = document.importNode(t, true);
    let e = n.querySelector('.star');
    this.root.appendChild(n);
    console.log(star.x+','+star.y);
    e.style.left  = (star.x*this.m*15 - 50) + 'px';
    e.style.top   = (star.y*this.m*15 - 300) + 'px';
    this.drawCards(e, star);
  }

  drawCards(s, star) {
    this.drawCard(s, star.base(0), 0, 0);
    this.drawCard(s, star.base(1), 0, 1);
    this.drawCard(s, star.base(2), 0, 2);

    this.drawCard(s, star.ship(0), 0, 3);
    this.drawCard(s, star.ship(1), 1, 3);
    this.drawCard(s, star.ship(2), 2, 3);
    this.drawCard(s, star.ship(3), 3, 3);

    this.drawCard(s, star.colony(0), 8, 0);
    this.drawCard(s, star.colony(1), 8, 1);
    this.drawCard(s, star.colony(2), 8, 2);

    this.drawCard(s, star.hero(0), 6, 4);
    this.drawCard(s, star.hero(1), 6, 5);
  }

  drawCard(star, card, x, y) {
    if (! card) {
      return;
    }

    let t = document.querySelector('#card-template').content;
    let n = document.importNode(t, true);
    let e = n.querySelector('.card');
    star.appendChild(n);
    e.style.left  = (110 + x*this.m) + 'px';
    e.style.top   = (480 + y*this.m) + 'px';
    let type = card.spec.type;
    e.classList.add(type);
    e.classList.add(card.spec.race);

    let i = e.querySelector('.image .type.lni');
    i.classList.add('lni-'+this.type2image(type));

    this.setCardPart(e, 'Level',        card.spec.level, card.spec.klass);
    this.setCardPart(e, 'Defense',      null);
    this.setCardPart(e, 'Attack',       card.spec.attack);
    this.setCardPart(e, 'Colonization', card.spec.colonization);
    this.setCardPart(e, 'Science',      card.spec.science);
    this.setCardPart(e, 'Production',   card.spec.production);
    this.setCardPart(e, 'Utilization',  null, card.spec.utilizationValue, card.spec.utilizationType);
  }

  type2image(type) {
    return TypeImages[type] ?? 'question-circle';
  }

  race2image(race) {
    return raceImages[race] ?? 'question-circle';
  }

  setCardPart(e, part, value, type = null) {
    if (value) {
      e.querySelector('.'+part+' .value').innerHTML = value;
      if (type) {
        e.querySelector('.' + part).classList.add(type);
      }
    } else {
      e.querySelector('.'+part).innerHTML = '';
    }
  }
}

const TypeImages = Object.freeze({
  'Hero':     'user',
  'Ship':     'rocket',
  'Base':     'bricks',
  'Colony':   'world',
})

const raceImages = Object.freeze({
  'Plasma':   'emoji-smile',
  'Giant':    'bricks',
  'Ai':       'rook',
  'human':    'world',
})

export default DivDrawer;
