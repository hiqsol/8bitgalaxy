import Card from "../Model/Card.js";
import Type from "../Model/Type.js";
import Assert from "../Model/Assert.js";
import DragCard from "../Model/History/DragCard.js";
import Drawer from "./Drawer.js";
import aDragger from "./aDragger.js";

class SlotDragger extends aDragger {
  constructor(drawer) {
    super(drawer);
    this._drawer = Drawer.assert(drawer);
  }

  addDragEvents(e, holder) {
    e.addEventListener("dragstart", (event) => {
      const id = event.dataTransfer.getData("text");
      const card = document.getElementById(id);
      this.startDragging(card, holder, e);
      this._drawer.getDragger('Game').stopDragging();
    });
    e.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (this.isDroppable(event)) {
        event.currentTarget.classList.add('hover');
      }
    });
    e.addEventListener("dragleave", (event) => {
      event.currentTarget.classList.remove('hover');
    });
    e.addEventListener("drop", (event) => {
      event.currentTarget.classList.remove('hover');
      const elem = this.isDroppable(event);
      if (!elem) {
        return false;
      }
      event.preventDefault();
      let card = Card.assert(elem);
      this.apply(new DragCard(card, this.getLosingHolder(), holder));
    });
  }

  isDroppable(event) {
    const cl = event.currentTarget.classList;
    const id = event.dataTransfer.getData("text");
    const elem = this.getDraggingCard(id);
    const type = Type.assert(elem);
    if (!cl.contains('droppable')) return null;
    if (cl.contains('Slot')) {
      if (elem.classList.contains('Turned')) {
        if (cl.contains('for-Hero') && !cl.contains('for-Ship')) {
          return null;
        } else {
          return elem;
        }
      }
      if (!cl.contains('for-' + type.name)) {
        return null;
      }
      if (event.currentTarget.childElementCount) {
        return null;
      }
    }
    return elem;
  }

  startDragging(card, holder, element) {
    this._draggingCard = card;
    this._losingHolder = holder;
    this._losingElement = element;
  }

  getDraggingCard(id) {
    if (id) {
      return document.getElementById(id);
    } else {
      return this._draggingCard;
    }
  }

  getLosingHolder() {
    return this._losingHolder;
  }

  getLosingElement() {
    return this._losingElement;
  }

  resetDraggability(elem) {
    if (!elem) return;
    elem.querySelectorAll('.Card').forEach(
      (card, idx, array) => {
        card.draggable = (idx === array.length -1);
      }
    );
  }

  assert(sample) {
    if (sample instanceof (SlotDragger)) {
      return sample;
    }
    Assert.error("not a SlotDragger", sample);
  }
}

export default SlotDragger;
