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
    this.drawSlots(e, star);
    return e;
  }

  drawSlots(parent, star) {
    let slots = star.slots();
    for (const i in slots) {
      this._drawer.draw(parent, slots[i]);
    }
  }

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
