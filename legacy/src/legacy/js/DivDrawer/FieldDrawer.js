import Drawer from './Drawer.js';
import aDrawer from './aDrawer.js';

class FieldDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Field"></div>';
  }

  draw(parent, field, params) {
    let e = this.drawNode(parent, params);
    this.drawStars(e, field);
    return e;
  }

  drawStars(parent, field) {
    this.drawer.draw(parent, field.star(0, 0));
    this.drawer.draw(parent, field.star(0, 1));
    this.drawer.draw(parent, field.star(1, 0));
    this.drawer.draw(parent, field.star(1, 1));
    this.drawer.draw(parent, field.star(1, 2));
    this.drawer.draw(parent, field.star(2, 0));
    this.drawer.draw(parent, field.star(2, 1));
  }
}

export default FieldDrawer;
