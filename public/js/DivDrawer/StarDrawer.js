class StarDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, star) {
    let e = this._drawer.importNode(parent, this.fragment, '.Star');
    let indent = this.m * (star.y % 2 ? 1 : 8.4);
    e.style.left  = (star.x*this.m*14.6 + indent) + 'px';
    e.style.top   = (star.y*this.m*12.6 + this.m) + 'px';
    //Inner.create(this._drawer, e, true).drawCards(star);
    Inner.create(this._drawer, e, false).drawCards(star);
  }

  get m() { return this._drawer.m; }
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
    this.drawCard(star.base(0), 0, 0);
    this.drawCard(star.base(1), 1, 0);
    this.drawCard(star.base(2), 2, 0);

    this.drawCard(star.ship(0), 3, 0);
    this.drawCard(star.ship(1), 3, 1);
    this.drawCard(star.ship(2), 3, 2);
    this.drawCard(star.ship(3), 3, 3);

    this.drawCard(star.colony(0), 0, 8);
    this.drawCard(star.colony(1), 1, 8);
    this.drawCard(star.colony(2), 2, 8);

    this.drawCard(star.hero(0), 4, 7);
    this.drawCard(star.hero(1), 5, 7);
    this.drawCard(star.hero(2), 6, 7);
    this.drawCard(star.hero(3), 7, 7);
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
