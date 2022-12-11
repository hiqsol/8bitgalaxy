import Drawer from './Drawer.js';
import aDrawer from './aDrawer.js';

class GameDragger {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  addDragEvents(e, game) {
    if (!this.stopDragging) {
      this.addGameDragger();
      this.addGameKeys(game);
    }
  }

  addGameKeys(game) {
    const ele = document.documentElement;
    ele.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'z') {
        game.undo();
      }
    });
  }

  addGameDragger() {
    const ele = document.documentElement;

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        ele.scrollTop = pos.top - (e.clientY - pos.y);
        ele.scrollLeft = pos.left - (e.clientX - pos.x);
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'auto';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
    this.stopDragging = mouseUpHandler;

    ele.addEventListener('mousedown', mouseDownHandler);
  }
}

export default GameDragger;
