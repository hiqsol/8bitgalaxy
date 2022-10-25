import Assert from "../Model/Assert.js";
import Template from './Template.js';
import RowDrawer from './RowDrawer.js';
import CardDrawer from './CardDrawer.js';
import GameDrawer from './GameDrawer.js';
import HomeDrawer from './HomeDrawer.js';
import PileDrawer from './PileDrawer.js';
import StarDrawer from './StarDrawer.js';
import SpecDrawer from './SpecDrawer.js';
import BoardDrawer from './BoardDrawer.js';
import SpecsDrawer from './SpecsDrawer.js';
import FieldDrawer from './FieldDrawer.js';

class Drawer {
  constructor() {
    this._m       = 50;
    this._tpl     = new Template();
    this._drawers = {};
  }

  get m()   { return this._m; }
  get tpl() { return this._tpl; }

  draw(parent, obj, y, x) {
    if (parent === null) {
      parent = document.querySelector('body');
    }
    if (typeof obj !== 'object') {
      Assert.error('not an object', obj);
    }
    let cname = obj.constructor.name;
    return this.getDrawer(cname).draw(parent, obj, y, x);
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
      Assert.error('no drawer for ' + name);
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
    Assert.error('not a Drawer', sample);
  }
}

const Drawers = Object.freeze({
  Game:     GameDrawer,
  Board:    BoardDrawer,
  Home:     HomeDrawer,

  Field:    FieldDrawer,
  Star:     StarDrawer,

  Row:      RowDrawer,
  Pile:     PileDrawer,

  Card:     CardDrawer,
  Specs:    SpecsDrawer,
  Spec:     SpecDrawer,
})

export default Drawer;
