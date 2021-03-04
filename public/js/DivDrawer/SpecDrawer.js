import Drawer from './Drawer.js';

class SpecDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, spec, y, x) {
    let e = this._drawer.importNode(parent, this.fragment, '.Spec');
    this.drawValue(e, spec.name, spec.Value, spec.Klass.name);
    this.drawIcon(e, spec.name);
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

  drawIcon(parent, name) {
    let icon = Icons[name] ?? null;
    if (!icon) {
      return;
    }
    let f = this._drawer.getFragment(ICON);
    let e = this._drawer.importNode(parent, f, '.lni');
    e.classList.add('lni-'+icon);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
  <div class="Spec"><div class="Value"></div></div>
`;

const ICON = `
  <div class="lni"></div>
`;

const Icons = Object.freeze({
  Utilization:    'spiner-solid',
  Defense:        'shield',
})

//<div class="Part Utilization"><div class="lni lni-archive"></div><div class="value">U</div></div>
//<div class="Part Defense"><div class="lni lni-shield"></div><div class="value">D</div></div>
//<div class="Part Attack"><div class="lni lni-pointer"></div><div class="value">A</div></div>
//<div class="Part Colonization"><div class="lni lni-basketball"></div><div class="value">C</div></div>
//<div class="Part Science"><div class="lni lni-star"></div><div class="value">S</div></div>
//<div class="Part Production"><div class="lni lni-package"></div><div class="value">P</div></div>

export default SpecDrawer;
