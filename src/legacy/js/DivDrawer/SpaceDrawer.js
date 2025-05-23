import Params from './Params.js';
import aDrawer from './aDrawer.js';
import Assert from '../Model/Assert.js';
import TurnSpace from '../Model/History/TurnSpace.js';
import AlterSpace from '../Model/History/AlterSpace.js';

class SpaceDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Space">
        <div class="pentagon">
          <span></span>
          <div class="Type"></div>
        </div>
      </div>
    `;
  }

  draw(parent, space, params) {
    params = Params.assert(params);
    params.id = space.id;
    const bp = this.getBearingParams(space.bearing);
    params.x = bp.x;
    params.y = bp.y;
    params.rotate = bp.rotate;
    let e = this.drawNode(parent, params);
    e.ondblclick = (event) => {
      this.apply(new TurnSpace(space));
    }
    e.onclick = (event) => {
      if (event.ctrlKey) {
        this.apply(new AlterSpace(space, this.random(5)));
      }
    }
    e.querySelector('.Type').innerHTML = space.type;
    e.classList.add('oclock'+space.bearing.oclock);
    e.classList.add('Type'+space.type);
    if (space.oclock % 2 == 0) {
      e.classList.add('even');
    }
    if (space.isTurned) {
      e.classList.add('Turned');
    }

    return e;
  }

  random(range) {
    return 1 + Math.floor(Math.random() * range);
  }

  getBearingParams(bearing) {
    const oclock = bearing ? bearing.oclock : null;
    if (bearing.isEven) {
      let params = this.getBearingParams(bearing.reversed);
      const xStep = 15.5;
      const yStep = 13.4;
      params.x += xStep*bearing.xStep;
      params.y += yStep*bearing.yStep;
      return params;
    }

    if (oclock == 1) {
      return new Params(8.51, -1.95).setRotate(-60);
    } else if (oclock == 3) {
      return (new Params(14.19, 3.72)).setRotate(0);
    } else if (oclock == 5) {
      return new Params(12.13, 11.45).setRotate(60);
    } else if (oclock == 7) {
      return new Params(4.36, 13.53).setRotate(120);
    } else if (oclock == 9) {
      return new Params(-1.31, 7.85).setRotate(180);
    } else if (oclock == 11) {
      return new Params(0.77, 0.13).setRotate(-120);
    }
    Assert.error('unknown bearing', bearing);
  }
}

export default SpaceDrawer;
