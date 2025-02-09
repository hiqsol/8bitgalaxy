import Assert from '../Model/Assert.js';
import Drawer from './Drawer.js';

class Performer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  get drawer()      { return this._drawer; }
  get history()     { return this._drawer.history; }

  obj(elem)         { return this.drawer.obj(elem); }
  elem(obj)         { return this.drawer.elem(obj); }
  getDrawer(obj)    { return this.drawer.getDrawer(obj); }
  getDragger(obj)   { return this.drawer.getDragger(obj); }

  apply(effect) {
    let ok = this.perform(effect);
    if (ok) this.history.add(effect);
  }

  perform(effect) {
    if (effect === null) return null;
    let cname = effect.constructor.name;
    if (typeof effect.perform !== 'function') {
      Assert.error('wrong Effect `' +cname+ '` to perform at Performer', effect);
    }
    return effect.perform(this);
  }
}

export default Performer;
