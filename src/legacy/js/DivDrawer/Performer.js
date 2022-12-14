import Assert from '../Model/Assert.js';
import Drawer from './Drawer.js';

class Performer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
    this._doers = {
      'BulkEffect': (ef) => this.doBulkEffect(ef),
      'DragCard':   (ef) => this.doDragCard(ef),
      'TurnCard':   (ef) => this.doTurnCard(ef),
      'AlterCard':  (ef) => this.doAlterCard(ef),
    };
  }

  get drawer()      { return this._drawer; }
  get history()     { return this._drawer.history; }

  elem(obj)         { return this.drawer.elem(obj); }
  getDragger(obj)   { return this.drawer.getDragger(obj); }

  doBulkEffect(effect) {
    for (const ef of effect.effects) {
      this.perform(ef);
    }
    return true;
  }

  doTurnCard(effect) {
    let card = effect.card;
    let cl = this.elem(card).classList;
    cl.toggle('Turned');
    card.setTurned(cl.contains('Turned'));
    return true;
  }

  doAlterCard(effect) {
    let card = effect.card;
    let cl = this.elem(card).classList;
    if (!cl.contains('Alterable')) return false;
    cl.toggle('Altered');
    card.setAltered(cl.contains('Altered'));
    return true;
  }

  doDragCard(effect) {
    let card = effect.card;
    let elem = this.elem(card);
    let esrc = this.elem(effect.src);
    let edst = this.elem(effect.dst);
    edst.appendChild(elem);
    effect.src.pop(card);
    effect.dst.put(card);
    this.getDragger('Slot').resetDraggability(esrc);
    this.getDragger('Slot').resetDraggability(edst);
    return true;
  }

  apply(effect) {
    let ok = this.perform(effect);
    if (ok) this.history.add(effect);
  }

  perform(effect) {
    let cname = effect.constructor.name;
    if (this._doers[cname] === undefined) {
      Assert.error('wrong Effect `' +cname+ '` to perform at Performer', effect);
    }
    let doer = this._doers[cname];
    return doer(effect);
  }
}

export default Performer;
