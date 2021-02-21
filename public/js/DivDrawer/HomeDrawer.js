import Template from './Template.js';

class HomeDrawer {
  constructor(drawer) {
    this._drawer = drawer;
  }

  draw(parent, home) {
    let n = document.importNode(this._drawer.tpl.home, true);
    let s = n.querySelector('.Discard');

    parent.appendChild(n);
    this.drawPile(s, home.discard);
  }

  drawPile(parent, pile) {
    let n = document.importNode(this._drawer.tpl.pile, true);
    let e = n.querySelector('.pile');
    parent.appendChild(n);
    let c = this.drawCard(e, pile.top);
    c.style.transform = "rotate(-90deg)";
  }
}

export default HomeDrawer;
