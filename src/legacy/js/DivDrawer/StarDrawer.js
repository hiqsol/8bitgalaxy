import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';
import Direction from './Direction.js';

class StarDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Star">
        <div class="hexagon">
          <span><div class="inner lni lni-sun"></div></span>
        </div>
      </div>
    `;
  }

  draw(parent, star, params) {
    params = Params.assert(params);
    let indent = star.y % 2 ? 0 : 7.75;
    params.x = (star.x*15.5 + indent);
    params.y = (star.y*13.4 + 1);
    let e = this.drawNode(parent, params);
    this.drawer.draw(e, star.ships,   new Params(8,  2, Direction.TopToBottom));
    this.drawer.draw(e, star.heroes,  new Params(9,  8, Direction.TopToBottom));
    this.drawer.draw(e, star.estates, new Params(0,  4, Direction.LeftToRight));
    this.drawer.draw(e, star.space,   new Params(2, 11, Direction.LeftToRight));
    return e;
  }
}

export default StarDrawer;
