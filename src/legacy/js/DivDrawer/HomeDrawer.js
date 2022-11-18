import Drawer from './Drawer.js';

class HomeDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, home, y, x) {
    let e = this.importNode(parent, '.Home');
    let m = this._drawer.m;
    e.style.left  = (0 + x*m) + 'px';
    e.style.top   = (0 + y*m) + 'px';
    e.classList.add(home.direction.name);
    e.setAttribute('race', home.player.race);
    this._drawer.draw(e, home.progress, 22, -8);
    this._drawer.draw(e, home.hand,     22, 18);
    this._drawer.draw(e, home.discard,  14, 24);
    this._drawer.draw(e, home.reserve,  22, 24);
    this._drawer.draw(e, home.factory,  6, 30);
    this._drawer.draw(e, home.research, 0, 38);
  }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Home"></div>
`;

export default HomeDrawer;
