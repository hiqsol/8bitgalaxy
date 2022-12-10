import Drawer from './Drawer.js';
import Params from './Params.js';

class aDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
    this._HTML = undefined;
  }

  get drawer()  { return this._drawer; }
  get history() { return this._drawer.history; }
  get tpl()     { return this._drawer.tpl; }
  get m()       { return this._drawer.m; }

  drawNode(parent, params) {
    let e = this.importNode(parent);
    if (params) {
      params = Params.assert(params);
      e.style.left  = (0 + params.x*this.m) + 'px';
      e.style.top   = (0 + params.y*this.m) + 'px';
      if (params.id) {
        e.id = params.id;
      }
      if (params.direction) {
        e.classList.add(params.direction.name);
      }
    }
    return e;
  }

  importNode(parent, html = null) {
    if (html === null) {
      html = this._HTML;
    }
    let fragment = this.tpl.getFragment(html);
    let n = document.importNode(fragment, true);
    let e = n.firstElementChild;
    parent.appendChild(e);
    return e;
  }
}

export default aDrawer;
