import Params from './Params.js';
import aDrawer from './aDrawer.js';

class DivDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `<div></div>`;
  }

  draw(parent, div, params) {
    let e = this.drawNode(parent, params);
    e.classList.add(div.clas);
    if (div.text) e.innerHTML = div.text;
    return e;
  }
}

class Div {
  constructor(clas, text = null) {
    this._clas = clas;
    this._text = text;
  }

  get clas() { return this._clas; }
  get text() { return this._text; }
}

export {Div, DivDrawer};
