import aDrawer from './aDrawer.js';
import IncCounter from '../Model/History/IncCounter.js';

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
    params.id = counter.id;
    let e = this.drawNode(parent, params);
    this.drawValue(e, counter);
    e.querySelector(".Minus").onclick = () => {
      this.apply(new IncCounter(counter, -1));
    }
    e.querySelector(".Plus").onclick = () => {
      this.apply(new IncCounter(counter, 1));
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
