import Drawer from './Drawer.js';

class FieldDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, field, params) {
    let e = this._drawer.importNode(parent, this.fragment, '.Field');
    let m = this._drawer.m;
    e.style.left  = (0 + params.x*m) + 'px';
    e.style.top   = (0 + params.y*m) + 'px';
    this.drawStars(e, field);
  }

  drawStars(parent, field) {
    this._drawer.draw(parent, field.star(0, 0));
    this._drawer.draw(parent, field.star(0, 1));
    this._drawer.draw(parent, field.star(1, 0));
    this._drawer.draw(parent, field.star(1, 1));
    this._drawer.draw(parent, field.star(1, 2));
    this._drawer.draw(parent, field.star(2, 0));
    this._drawer.draw(parent, field.star(2, 1));
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Field"></div>
`;

export default FieldDrawer;
