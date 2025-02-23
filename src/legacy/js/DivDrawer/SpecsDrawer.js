import aDrawer from './aDrawer.js';

class SpecsDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Specs"></div>';
  }

  draw(parent, specs, params) {
    let e = this.drawNode(parent, params);
    this.drawSpecs(e, specs);
    return e;
  }

  drawSpecs(e, specs) {
    for (const [_, spec] of Object.entries(specs.getSpecs())) {
      this.drawer.draw(e, spec);
    }
  }
}

export default SpecsDrawer;
