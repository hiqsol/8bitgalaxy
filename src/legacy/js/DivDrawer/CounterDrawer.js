import aDrawer from './aDrawer.js';

class CounterDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Counter">
        <div class="Plus">+</div>
        <div class="Count"></div>
        <div class="Minus">-</div>
      </div>
    `;
  }

  draw(parent, counter, params) {
    let e = this.drawNode(parent, params);
    e.querySelector(".Count").innerHTML = counter.count;
    e.querySelector(".Plus").onclick = () => {
      counter.inc(1);
      e.querySelector(".Count").innerHTML = counter.count;
    }
    e.querySelector(".Minus").onclick = () => {
      counter.dec(1);
      e.querySelector(".Count").innerHTML = counter.count;
    }
    return e;
  }
}

export default CounterDrawer;
