import Drawer from './Drawer.js';
import aDrawer from './aDrawer.js';

class SpecsDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Specs"></div>';
  }

  draw(parent, specs, params) {
    let e = this.drawNode(parent, params);
    e.classList.add('isAlternative' in params ? 'Alternative' : 'Normal');
    this.drawSpecs(e, specs);
    return e;
  }

  drawSpecs(e, specs) {
    for (const [prop, spec] of Object.entries(specs.getSpecs())) {
      this.drawer.draw(e, spec);
    }
  }
}

export default SpecsDrawer;
