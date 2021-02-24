class StarDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, star) {
    let e = this._drawer.importNode(parent, this.fragment, '.Star');
    let indent = this.m * (star.y % 2 ? 1 : 8.4);
    e.style.left  = (star.x*this.m*14.6 + indent) + 'px';
    e.style.top   = (star.y*this.m*12.6 + this.m) + 'px';
    this.drawCards(e, star);
  }

  drawCards(parent, star) {
    this._drawer.drawCard(parent, star.base(0), 0, 0);
    this._drawer.drawCard(parent, star.base(1), 1, 0);
    this._drawer.drawCard(parent, star.base(2), 2, 0);

    this._drawer.drawCard(parent, star.ship(0), 3, 0);
    this._drawer.drawCard(parent, star.ship(1), 3, 1);
    this._drawer.drawCard(parent, star.ship(2), 3, 2);
    this._drawer.drawCard(parent, star.ship(3), 3, 3);

    this._drawer.drawCard(parent, star.colony(0), 0, 8);
    this._drawer.drawCard(parent, star.colony(1), 1, 8);
    this._drawer.drawCard(parent, star.colony(2), 2, 8);

    this._drawer.drawCard(parent, star.hero(0), 4, 6);
    this._drawer.drawCard(parent, star.hero(1), 5, 6);
    this._drawer.drawCard(parent, star.hero(2), 6, 6);
    this._drawer.drawCard(parent, star.hero(3), 7, 6);
  }

  get m() { return this._drawer.m; }
  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
  <div class="Star">
    <div class="hexagon">
      <span><div class="inner lni lni-sun"></div></span>
    </div>
  </div>
`;

export default StarDrawer;
