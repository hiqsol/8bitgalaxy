import Drawer from './Drawer.js';

class HomeDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, home) {
    let e = this.importNode(parent, '.Home');
    e.classList.add(home.direction.name);
    this._drawer.draw(e, home.discard);
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
