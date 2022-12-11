import Drawer from './Drawer.js';
import aDrawer from './aDrawer.js';

class GameDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = '<div class="Game" id="Game"></div>';
  }

  draw(parent, game, params) {
    let e = this.drawNode(parent, params);
    this.drawer.draw(e, game.board);
    this.drawer.draw(e, game.scoreboard);
    this.drawer.addDragEvents(e, game);
  }
}

export default GameDrawer;
