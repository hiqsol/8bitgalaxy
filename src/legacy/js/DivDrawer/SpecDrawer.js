import Drawer from './Drawer.js';
import aDrawer from "./aDrawer.js";

class SpecDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Spec">
        <div class="Value"></div>
      </div>
    `;
  }

  draw(parent, spec, params) {
    let e = this.drawNode(parent, params);
    this.drawValue(e, spec.name, spec.value, spec.klass.name);
    return e;
  }

  drawValue(parent, name, value, klass = null) {
    parent.classList.add(name);
    parent.querySelector('.Value').classList.add(klass);
    if (value) {
      this.setInnerHtml(parent, '.Value', value);
    } else {
      this.setInnerHtml(parent, '');
    }
  }

  setInnerHtml(parent, selector, value) {
    let e = parent.querySelector(selector);
    if (e) {
      e.innerHTML = value;
    }
  }
}

export default SpecDrawer;
