import Drawer from './Drawer.js';

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
    document.addEventListener('keydown', (e) => {
      let board = document.getElementById('Board');
      let zoom = parseFloat(board.style.zoom);
      if (!zoom) zoom = 0.3;
      let save = zoom;

      if (e.ctrlKey && e.key === 'z') {
        game.undo();
      } else if (e.key === '+' || e.key === '=') {
        zoom += 0.03;
      } else if (e.key === '-') {
        zoom -= 0.03;
      }
      if (zoom != save) {
        board.style.zoom = zoom;
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
