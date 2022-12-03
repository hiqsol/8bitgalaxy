import Drawer from './Drawer.js';
import Params from './Params.js';
import Direction from './Direction.js';

class StarDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, star) {
    let e = this._drawer.importNode(parent, this.fragment, '.Star');
    let m = this._drawer.m;
    let indent = star.y % 2 ? 0 : 7.75*m;
    e.style.left  = (star.x*m*15.5 + indent) + 'px';
    e.style.top   = (star.y*m*13.4 + m) + 'px';
    this._drawer.draw(e, star.space,   new Params(2, 11, Direction.LeftToRight));
    this._drawer.draw(e, star.ships,   new Params(8,  2, Direction.TopToBottom));
    this._drawer.draw(e, star.heroes,  new Params(9,  8, Direction.TopToBottom));
    this._drawer.draw(e, star.estates, new Params(0,  4, Direction.LeftToRight));
    return e;
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
