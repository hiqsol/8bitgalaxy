import Drawer from './Drawer.js';

class GameDrawer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
  }

  draw(parent, game) {
    let e = this._drawer.importNode(parent, this.fragment, '.Game');
    this._drawer.draw(e, game.board);
    this._drawer.draw(e, game.scoreboard);

    this.addPageGrabber();
  }

  addPageGrabber() {
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

  get fragment() { return this._drawer.getFragment(HTML); }
}

const HTML = `
    <div class="Game" id="Game"></div>
`;

export default GameDrawer;
