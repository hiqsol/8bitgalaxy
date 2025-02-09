import aDrawer from './aDrawer.js';

class CounterDrawer extends aDrawer {
  constructor(drawer) {
    super(drawer);
    this._HTML = `
      <div class="Counter">
        <b class="Minus">◀</b>
        <b class="Count"></b>
        <b class="Plus">▶</b>
      </div>
    `;
  }

  draw(parent, counter, params) {
    let e = this.drawNode(parent, params);
    e.querySelector(".Count").innerHTML = counter.count;
    e.querySelector(".Plus").onclick = () => {
      counter.inc(1);
      this.drawValue(e, counter);
    }
    e.querySelector(".Minus").onclick = () => {
      counter.dec(1);
      this.drawValue(e, counter);
    }
    return e;
  }

  drawValue(e, counter) {
    e.querySelector(".Count").innerHTML = counter.count;
    if (counter.zero) {
      e.querySelector(".Count").classList.remove('nonzero');
    } else {
      e.querySelector(".Count").classList.add('nonzero');
    }
  }
}

export default CounterDrawer;
