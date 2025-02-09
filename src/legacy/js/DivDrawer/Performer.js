import Assert from '../Model/Assert.js';
import Drawer from './Drawer.js';

class Performer {
  constructor(drawer) {
    this._drawer = Drawer.assert(drawer);
    this._doers = {
      'BulkEffect':     (ef) => this.doBulkEffect(ef),
      'DragCard':       (ef) => this.doDragCard(ef),
      'TurnCard':       (ef) => this.doTurnCard(ef),
      'AlterCard':      (ef) => this.doAlterCard(ef),
      'TurnSpace':      (ef) => this.doTurnSpace(ef),
      'AlterSpace':     (ef) => this.doAlterSpace(ef),
      'IncCounter':     (ef) => this.doIncCounter(ef),
    };
  }

  get drawer()      { return this._drawer; }
  get history()     { return this._drawer.history; }

  obj(elem)         { return this.drawer.obj(elem); }
  elem(obj)         { return this.drawer.elem(obj); }
  getDrawer(obj)    { return this.drawer.getDrawer(obj); }
  getDragger(obj)   { return this.drawer.getDragger(obj); }

  doBulkEffect(effect) {
    for (const ef of effect.effects) {
      this.perform(ef);
    }
    return true;
  }

  doIncCounter(effect) {
    let value = effect.value;
    let counter = effect.counter;
    counter.inc(value);
    this.getDrawer(counter).drawValue(this.elem(counter), counter);
    return true;
  }

  doTurnCard(effect) {
    let value = effect.value;
    let card = effect.card;
    let cl = this.elem(card).classList;
    if (value === null) {
      value = !cl.contains('Turned');
    }
    if (value) {
      cl.add('Turned');
    } else {
      cl.remove('Turned');
    }
    card.setTurned(value);
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

  doDragCard(ef) {
    this.elem(ef.dst).appendChild(this.elem(ef.card));
    this.obj(ef.src).pop(ef.card);
    this.obj(ef.dst).put(ef.card);
    this.getDragger('Slot').resetDraggability(ef.src);
    this.getDragger('Slot').resetDraggability(ef.dst);
    return true;
  }

  doTurnSpace(effect) {
    let value = effect.value;
    let space = effect.space;
    let cl = this.elem(space).classList;
    if (value === null) {
      value = !cl.contains('Turned');
    }
    if (value) {
      cl.add('Turned');
    } else {
      cl.remove('Turned');
    }
    space.turn(value);
    return true;
  }

  doAlterSpace(effect) {
    let value = effect.value;
    let space = effect.space;
    let elem = this.elem(space);
    let cl = elem.classList;
    cl.remove('Type'+space.type);
    space.alter(value);
    cl.add('Type'+space.type);
    elem.querySelector('.Type').innerHTML = space.type;
    return true;
  }

  apply(effect) {
    let ok = this.perform(effect);
    if (ok) this.history.add(effect);
  }

  perform(effect) {
    if (effect === null) return null;
    let cname = effect.constructor.name;
    if (this._doers[cname] === undefined) {
      Assert.error('wrong Effect `' +cname+ '` to perform at Performer', effect);
    }
    let doer = this._doers[cname];
    return doer(effect);
  }
}

export default Performer;
