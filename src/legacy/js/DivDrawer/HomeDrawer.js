import Drawer from './Drawer.js';
import Params from './Params.js';
import Direction from './Direction.js';

class HomeDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, home, params) {
    let e = this.importNode(parent, '.Home');
    let m = this._drawer.m;
    e.style.left  = (0 + params.x*m) + 'px';
    e.style.top   = (0 + params.y*m) + 'px';
    let counterdir = params.direction.counterpart;
    let xStep = counterdir.xStep;
    let yStep = params.direction.yStep;
    let xIndent = params.direction.isTopToBottom ? 0 : +2;
    let yIndent = params.direction.isTopToBottom ? 0 : -2;
    let progressIndent = params.direction.isTopToBottom ? 30 : -46;
    e.setAttribute('race', home.player.race);
    this._drawer.draw(e, home.progress, new Params(  progressIndent, yIndent+yStep*0, Direction.LeftToRight));
    this._drawer.draw(e, home.hand,     new Params(xIndent+xStep*22, yIndent+yStep*0, params.direction));
    this._drawer.draw(e, home.discard,  new Params(xIndent+xStep*16, yIndent+yStep*8, params.direction));
    this._drawer.draw(e, home.reserve,  new Params(xIndent+xStep*16, yIndent+yStep*0, params.direction));
    this._drawer.draw(e, home.factory,  new Params(        xStep*8,          yStep*0, params.direction));
    this._drawer.draw(e, home.research, new Params(        xStep*0,          yStep*0, params.direction));
  }

  importNode(parent, selector) {
    return this._drawer.importNode(parent, this.fragment, selector);
  }

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Home"></div>
`;

export default HomeDrawer;
