import Template from './Template.js';
import CardDrawer from './CardDrawer.js';
import GameDrawer from './GameDrawer.js';
import HomeDrawer from './HomeDrawer.js';
import PileDrawer from './PileDrawer.js';
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
    console.log(obj);
    console.log(cname);
    return this.getDrawer(cname).draw(parent, obj);
  }

  drawCard(parent, card, y, x) {
    return this.getDrawer('Card').draw(parent, card, y, x);
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

  importNode(parent, fragment, selector) {
    let n = document.importNode(fragment, true);
    let e = n.querySelector(selector);
    parent.appendChild(n);
    return e;
  }

  getFragment(name, html) {
    return this.tpl.getFragment(name, html);
  }

  static assert(sample) {
    if (sample instanceof(Drawer)) {
      return sample;
    }
    throw new Error('not a Drawer:' + typeof(sample));
  }
}

const Drawers = Object.freeze({
  Card:     CardDrawer,
  Game:     GameDrawer,
  Home:     HomeDrawer,
  Pile:     PileDrawer,
  Star:     StarDrawer,
  Board:    BoardDrawer,
  Field:    FieldDrawer,
})

export default Drawer;
