import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';
import Direction from './Direction.js';

class HomeDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Home"></div>';
  }

  draw(parent, home, params) {
    let e = this.drawNode(parent, params);
    let counterdir = params.direction.counterpart;
    let xStep = counterdir.xStep;
    let yStep = params.direction.yStep;
    let xIndent = params.direction.isTopToBottom ? 0 : +2;
    let yIndent = params.direction.isTopToBottom ? 0 : -2;
    let progressIndent = params.direction.isTopToBottom ? 31 : -46;
    e.setAttribute('race', home.player.race);
    if (params.direction.isTopToBottom) {
      this._drawer.draw(e, home.progress, new Params(31*xStep,  0*yStep, Direction.LeftToRight));
      this._drawer.draw(e, home.hand,     new Params(22*xStep,  0*yStep, Direction.TopToBottom));
      this._drawer.draw(e, home.discard,  new Params(16*xStep,  8*yStep, params.direction));
      this._drawer.draw(e, home.reserve,  new Params(16*xStep,  0*yStep, params.direction));
    } else {
      this._drawer.draw(e, home.progress, new Params(47*xStep,  2*yStep, Direction.LeftToRight));
      this._drawer.draw(e, home.hand,     new Params(22*xStep,  4*yStep, Direction.TopToBottom));
      this._drawer.draw(e, home.discard,  new Params(14*xStep, 10*yStep, params.direction));
      this._drawer.draw(e, home.reserve,  new Params(14*xStep,  2*yStep, params.direction));
    }

    this._drawer.draw(e, home.factory,    new Params( 8*xStep,  0*yStep, params.direction));
    this._drawer.draw(e, home.research,   new Params( 0*xStep,  0*yStep, params.direction));
  }
}

export default HomeDrawer;
