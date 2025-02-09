import Params from './Params.js';
import aDrawer from './aDrawer.js';
import Direction from './Direction.js';

class StarDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Star">
        <div class="Id"></div>
      </div>
    `;
  }

  draw(parent, star, params) {
    params = Params.assert(params);
    let indent = star.y % 2 ? 0 : 7.75;
    params.x = (star.x*15.5 + indent);
    params.y = (star.y*13.4 + 1);
    let e = this.drawNode(parent, params);
    e.querySelector('.Id').innerHTML = star.id.substring(1);
    this.drawSpaces(e, star);
    this.drawer.draw(e, star.counter,     new Params(5.3,  0.9, Direction.TopToBottom));
    this.drawer.draw(e, star.actors,      new Params(0.2,  3.2, Direction.TopToBottom));
    this.drawer.draw(e, star.structures,  new Params(5.8,  3.2, Direction.LeftToRight));
    this.drawer.draw(e, star.ipm,         new Params(3.4,  9.4, Direction.LeftToRight));
    return e;
  }

  drawSpaces(parent, star) {
    for (let space of star.spaces) {
      this.drawer.draw(parent, space);
    }
  }
}

export default StarDrawer;
