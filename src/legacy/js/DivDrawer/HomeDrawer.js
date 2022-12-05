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
    this._drawer.draw(e, home.progress, new Params(  progressIndent, yIndent+yStep*0, Direction.LeftToRight));
    this._drawer.draw(e, home.hand,     new Params(xIndent+xStep*22, yIndent+yStep*0, Direction.TopToBottom));
    this._drawer.draw(e, home.discard,  new Params(xIndent+xStep*16, yIndent+yStep*8, params.direction));
    this._drawer.draw(e, home.reserve,  new Params(xIndent+xStep*16, yIndent+yStep*0, params.direction));
    this._drawer.draw(e, home.factory,  new Params(        xStep*8,          yStep*0, params.direction));
    this._drawer.draw(e, home.research, new Params(        xStep*0,          yStep*0, params.direction));
  }
}

export default HomeDrawer;
