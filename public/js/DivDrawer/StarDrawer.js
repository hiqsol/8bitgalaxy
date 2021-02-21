import Template from './Template.js';

class StarDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, star) {
    let n = document.importNode(this._drawer.tpl.star, true);
    let e = n.querySelector('.star');
    parent.appendChild(n);
    let indent = this.m * (star.y % 2 ? 1 : 8.4);
    e.style.left  = (star.x*this.m*14.6 + indent) + 'px';
    e.style.top   = (star.y*this.m*12.6 + this.m) + 'px';
    let i = n.querySelector('.star .inner');
    this.drawCards(e, star);
  }

  drawCards(parent, star) {
    this.drawCard(parent, star.base(0), 0, 0);
    this.drawCard(parent, star.base(1), 1, 0);
    this.drawCard(parent, star.base(2), 2, 0);

    this.drawCard(parent, star.ship(0), 3, 0);
    this.drawCard(parent, star.ship(1), 3, 1);
    this.drawCard(parent, star.ship(2), 3, 2);
    this.drawCard(parent, star.ship(3), 3, 3);

    this.drawCard(parent, star.colony(0), 0, 8);
    this.drawCard(parent, star.colony(1), 1, 8);
    this.drawCard(parent, star.colony(2), 2, 8);

    this.drawCard(parent, star.hero(0), 4, 6);
    this.drawCard(parent, star.hero(1), 5, 6);
    this.drawCard(parent, star.hero(2), 6, 6);
    this.drawCard(parent, star.hero(3), 7, 6);
  }

  drawCard(parent, card, y, x) {
    return this.cardDrawer.draw(parent, card, y, x);
  }

  get cardDrawer() { return this._drawer.getDrawer('Card'); }
  get m() { return this._drawer.m; }
}

export default StarDrawer;
