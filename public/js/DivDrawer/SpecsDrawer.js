import Drawer from './Drawer.js';

class SpecsDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, specs, isAlternative, x) {
    let e = this._drawer.importNode(parent, this.fragment, '.Specs');
    e.classList.add(isAlternative ? 'Alternative' : 'Normal');
    this.drawParts(e, specs);
    return e;
  }

  drawParts(e, specs) {
    this.drawPart(e, 'Level',        specs.Level, specs.Klass);
    this.drawPart(e, 'Defense',      null);
    this.drawPart(e, 'Attack',       specs.Attack);
    this.drawPart(e, 'Colonization', specs.Colonization);
    this.drawPart(e, 'Science',      specs.Science);
    this.drawPart(e, 'Production',   specs.Production);
    this.drawPart(e, 'Utilization',  null, specs.UtilizationValue, specs.UtilizationKlass);
  }

  drawPart(parent, part, value, type = null) {
    if (value) {
      this.setInnerHtml(parent, '.'+part+' .value', value);
      if (type) {
        parent.querySelector('.' + part).classList.add(type);
      }
    } else {
      this.setInnerHtml(parent, '.'+part, '');
    }
  }

  setInnerHtml(parent, selector, value) {
    let e = parent.querySelector(selector);
    if (e) {
      e.innerHTML = value;
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
  <div class="Specs">
    <div class="Part Utilization"><div class="lni lni-archive"></div><div class="value">U</div></div>
    <div class="Part Defense"><div class="lni lni-shield"></div><div class="value">D</div></div>
    <div class="Part Attack"><div class="lni lni-pointer"></div><div class="value">A</div></div>
    <div class="Part Colonization"><div class="lni lni-basketball"></div><div class="value">C</div></div>
    <div class="Part Science"><div class="lni lni-star"></div><div class="value">S</div></div>
    <div class="Part Production"><div class="lni lni-package"></div><div class="value">P</div></div>
    <div class="Level Klass"><div class="value">L</div></div>
  </div>
`;

export default SpecsDrawer;
