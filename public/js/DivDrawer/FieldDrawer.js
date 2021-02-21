import Template from './Template.js';

class FieldDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, field) {
    this._drawer.draw(parent, field.star(0, 0));
    this._drawer.draw(parent, field.star(0, 1));
    this._drawer.draw(parent, field.star(1, 0));
    this._drawer.draw(parent, field.star(1, 1));
    this._drawer.draw(parent, field.star(1, 2));
    this._drawer.draw(parent, field.star(2, 0));
    this._drawer.draw(parent, field.star(2, 1));
  }
}

export default FieldDrawer;
