import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';
import Direction from './Direction.js';

class ShowDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `<div id="Show"></div>`;
  }

  draw(parent, board, params) {
    return this.drawNode(parent, params);
  }

  show(card) {
    let show = this.elem('Show');
    show.innerHTML = '';
    if (!card.classList.contains("Selected")) {
      let copy = card.cloneNode(true);
      copy.id = 'ShowCopy.' + card.id;
      copy.style.left = null;
      copy.style.top = null;
      copy.style.bottom = '0px';
      copy.classList.remove('Turned');
      show.appendChild(copy);
    }
  }
}

export default ShowDrawer;
