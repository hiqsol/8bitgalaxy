class StarDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, star) {
    let e = this._drawer.importNode(parent, this.fragment, '.Star');
    let m = this._drawer.m;
    let indent = star.y % 2 ? 0 : 7.75*m;
    e.style.left  = (star.x*m*15.5 + indent) + 'px';
    e.style.top   = (star.y*m*13.4 + m) + 'px';
    //Inner.create(this._drawer, e, true).drawCards(star);
    Inner.create(this._drawer, e, false).drawCards(star);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

class Inner {
  constructor(drawer, parent, absent) {
    this.drawer = drawer;
    this.parent = parent;
    this.absent = absent;
  }

  static create(drawer, parent, absent) {
    return new Inner(drawer, parent, absent);
  }

  drawCards(star) {
    this.drawCard(star.estate(0), 3, 0);
    this.drawCard(star.estate(1), 4, 0);
    this.drawCard(star.estate(2), 5, 0);
    this.drawCard(star.estate(3), 6, 0);
    this.drawCard(star.estate(4), 7, 0);
    this.drawCard(star.estate(5), 8, 0);
    this.drawCard(star.estate(6), 9, 0);

    this.drawCard(star.ship(0), 2, 8);
    this.drawCard(star.ship(1), 3, 8);
    this.drawCard(star.ship(2), 4, 8);
    this.drawCard(star.ship(3), 5, 8);
    this.drawCard(star.ship(4), 6, 8);

    this.drawCard(star.hero(0), 8, 9);
    this.drawCard(star.hero(1), 9, 9);
  }

  drawCard(card, y, x) {
    if (this.absent === card.isAbsent) {
      this.drawer.draw(this.parent, card, y, x);
    }
  }
}

const HTML = `
  <div class="Star">
    <div class="hexagon">
      <span><div class="inner lni lni-sun"></div></span>
    </div>
  </div>
`;

export default StarDrawer;
