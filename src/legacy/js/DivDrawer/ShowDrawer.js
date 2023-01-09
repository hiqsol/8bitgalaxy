import {Div} from './DivDrawer.js';
import Drawer from './Drawer.js';
import Params from './Params.js';
import aDrawer from './aDrawer.js';

class ShowDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `<div class="Show" id="Show"></div>`;
  }

  draw(parent, board, params) {
    return this.drawNode(parent, params);
  }

  show(card) {
    let show = this.elem('Show');
    show.innerHTML = '';
    if (card.classList.contains("Selected")) {
      return;
    }
    let copy = card.cloneNode(true);
    copy.id = 'ShowCopy.' + card.id;
    copy.draggable = false;
    copy.style.top = null;
    copy.style.left = '0px';
    copy.style.bottom = '0px';
    copy.classList.remove('Turned');
    show.appendChild(copy);

    this.drawNote(
      copy.querySelector(".Normal .Spec.Level .Value"),
      'Level', 3
    );

    this.drawNote(
      copy.querySelector(".Image .Klass"),
      'Type', 3, new Params(1.5, 1)
    );

    this.drawNote(
      copy.querySelector(".Normal .Spec.Power .Value"),
      'Power', 1
    );

    this.drawNote(
      copy.querySelector(".Normal .Spec.Cooperation .Value"),
      'More', 0.1
    );
  }

  drawNote(parent, text, d, params = new Params().rt(0, 0)) {
    if (!parent) return;
    let y = -1*d;
    let h = Math.abs(d);
    let e = this.drawer.draw(parent, new Div('Note'), params);
    this.drawer.draw(e, new Div('Line'), new Params((d-2)/4, y).wh(3, h));
    this.drawer.draw(e, new Div('Text', text), new Params((h+2)/4, y-1));
    return e;
  }
}

export default ShowDrawer;