import Drawer from './Drawer.js';
import Params from './Params.js';

class aDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
    this._HTML = undefined;
  }

  get drawer()      { return this._drawer; }
  get history()     { return this._drawer.history; }
  get performer()   { return this._drawer.performer; }
  get tpl()         { return this._drawer.tpl; }
  get m()           { return this._drawer.m; }

  obj(id)           { return this.drawer.obj(id); }
  elem(id)          { return this.drawer.elem(id); }
  getDrawer(obj)    { return this.drawer.getDrawer(obj); }

  drawNode(parent, params, html = null) {
    let e = this.importNode(parent, html);
    if (params) {
      params = Params.assert(params);
      if (params.x !== null) {
        e.style.left    = (0 + params.x*this.m) + 'px';
      }
      if (params.y !== null) {
        e.style.top     = (0 + params.y*this.m) + 'px';
      }
      if (params.r !== null) {
        e.style.right   = (0 + params.r*this.m) + 'px';
      }
      if (params.b !== null) {
        e.style.bottom  = (0 + params.b*this.m) + 'px';
      }
      if (params.w !== null) {
        e.style.width   = (0 + params.w*this.m) + 'px';
      }
      if (params.h !== null) {
        e.style.height  = (0 + params.h*this.m) + 'px';
      }
      if (params.id) {
        e.id = params.id;
      }
      if (params.direction) {
        e.classList.add(params.direction.name);
      }
      if (params.classList) {
        e.classList.add(...params.classList);
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

  getDragger(obj) { return this.drawer.getDragger(obj); }
  apply(effect)   { return this.performer.apply(effect); }
}

export default aDrawer;
