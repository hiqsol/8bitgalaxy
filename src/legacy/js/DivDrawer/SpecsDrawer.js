import Drawer from './Drawer.js';

class SpecsDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, specs, params) {
    let e = this._drawer.importNode(parent, this.fragment, '.Specs');
    e.classList.add(params.x ? 'Alternative' : 'Normal');
    this.drawParts(e, specs);
    return e;
  }

  drawParts(e, specs) {
    for (const [prop, spec] of Object.entries(specs.getSpecs())) {
      this._drawer.draw(e, spec);
    }
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
  <div class="Specs"></div>
`;

export default SpecsDrawer;
