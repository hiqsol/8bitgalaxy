import Template from './Template.js';
import CardDrawer from './CardDrawer.js';
import HomeDrawer from './HomeDrawer.js';
import StarDrawer from './StarDrawer.js';
import BoardDrawer from './BoardDrawer.js';
import FieldDrawer from './FieldDrawer.js';

class Drawer {
  constructor() {
    this._m       = 50;
    this._tpl     = new Template();
    this._drawers = {};
  }

  get m()   { return this._m; }
  get tpl() { return this._tpl; }

  draw(parent, obj) {
    if (parent === null) {
      parent = document.querySelector('body');
    }
    if (typeof obj !== 'object') {
      throw new Error('not an object: ' + typeof(obj));
    }
    let cname = obj.constructor.name;
    return this.getDrawer(cname).draw(parent, obj);
  }

  getDrawer(name) {
    if (this._drawers[name] === undefined) {
      this._drawers[name] = this.buildDrawer(name);
    }
    return this._drawers[name];
  }

  buildDrawer(name) {
    let drawer = Drawers[name] ?? null;
    if (! drawer) {
      throw new Error('no drawer for: ' + name);
    }
    return new drawer(this);
  }
}

const Drawers = Object.freeze({
  Card:     CardDrawer,
  Home:     HomeDrawer,
  Star:     StarDrawer,
  Board:    BoardDrawer,
  Field:    FieldDrawer,
})

export default Drawer;
