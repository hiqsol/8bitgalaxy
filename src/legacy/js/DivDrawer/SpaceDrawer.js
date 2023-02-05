import Params from './Params.js';
import Drawer from './Drawer.js';
import aDrawer from './aDrawer.js';

class SpaceDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Space">
        <div class="pentagon">
          <span></span>
        </div>
      </div>
    `;
  }

  draw(parent, space, params) {
    params = Params.assert(params);
    if (space.course == 1) {
      params.x = 8.51;
      params.y = -1.95;
      params.rotate = -60;
    } else if (space.course == 3) {
      params.x = 14.19;
      params.y = 3.72;
      params.rotate = 0;
    } else if (space.course == 5) {
      params.x = 12.13;
      params.y = 11.45;
      params.rotate = 60;
    } else if (space.course == 7) {
      params.x = 4.36;
      params.y = 13.53;
      params.rotate = 120;
    } else if (space.course == 9) {
      params.x = -1.31;
      params.y = 7.85;
      params.rotate = 180;
    } else if (space.course == 11) {
      params.x = 0.77;
      params.y = 0.13;
      params.rotate = -120;
    }

    return this.drawNode(parent, params);
  }
}

export default SpaceDrawer;
