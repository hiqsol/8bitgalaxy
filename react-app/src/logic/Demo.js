import Game from "./Game.js";

class Demo {
  constructor(options = {}) {
    this._game = new Game(options);
    this.init();
  }

  get game() { return this._game; }

  init() {
    this.initHome1();
    this.initField();
  }

  initHome1() {
    let h = this.game.board.home(1);
    h.discard.put('Human-Hero-1s');
    h.discard.put('Human-Ship-2a');
    h.discard.put('Human-Base-7a');
    h.reserve.put('turned Human-Hero-1s');
    h.reserve.put('turned Human-Ship-2a');
    h.reserve.put('turned Human-Colony-4p');
    h.reserve.put('turned Human-Base-7a');
    h.hand.put('turned Human-Hero-1c');
    h.techs.put('Human-Tech-4p');
    this.initFactory(h);
    this.initResearch(h);
  }

  initFactory(home) {
    let f = home.factory;
    f.pile(0).put('Human-Colony-4a');
    f.pile(0).put('Human-Colony-4c');
    f.pile(0).put('Human-Colony-4s');
    f.pile(0).put('Human-Colony-4p');
    f.pile(1).put('Human-Ship-4a');
    f.pile(1).put('Human-Ship-4c');
    f.pile(1).put('Human-Ship-4s');
    f.pile(2).put('Human-Base-3s');
    f.pile(2).put('Human-Base-3a');
    f.pile(2).put('Human-Base-3c');
    f.pile(3).put('Human-Hero-4s');
    f.pile(3).put('Human-Hero-4c');
    f.pile(3).put('Human-Hero-4a');
  }

  initResearch(home) {
    let r = home.research;
    r.pile(0).put('turned Human-Colony-4c');
    r.pile(0).put('turned Human-Colony-4s');
    r.pile(0).put('turned Human-Colony-4p');
    r.pile(0).put('Human-Tech-4p');
    r.pile(1).put('Human-Colony-3a');
    r.pile(2).put('Human-Ship-4c');
    r.pile(3).put('Human-Base-6c');
    r.pile(4).put('Human-Hero-4p');
  }

  initField() {
    let b = this.game.board;
    b.star(0, 0)
      .put('AI-Hero-1s',      1)
      .put('turned AI-Base-7a',      2)
      .put('AI-Ship-2a',      3)
      .put('AI-Colony-4p',    0)
    ;
    b.star(0, 1)
      .put('AI-Base-6C',      2)
      .put('AI-Colony-4P',    0)
    ;
    b.star(1, 0)
      .put('AI-Ship-2A',      0)
      .put('AI-Hero-1A',      0)
      .put('AI-Hero-2A',      1)
    ;
    b.star(1, 2)
      .put('Human-Base-6C',   2)
      .put('Human-Ship-2A',   0)
      .put('Human-Colony-4P', 0)
      .put('Human-Hero-2A',   1)
    ;
    b.star(2, 0)
      .put('Human-Base-7C',   0)
      .put('Human-Base-6C',   1)
      .put('Human-Base-5S',   2)
      .put('Human-Ship-1C',   0)
      .put('Human-Ship-2A',   1)
      .put('Human-Ship-3S',   2)
      .put('Human-Ship-4S',   3)
      .put('Human-Colony-4P', 0)
      .put('Human-Colony-3S', 1)
      .put('Human-Colony-6P', 2)
      .put('Human-Hero-2A',   0)
      .put('Human-Hero-1s',   1)
    ;
    b.star(2, 1)
      .put('Human-Base-6c',   2)
      .put('Human-Colony-4p', 0)
    ;
  }
}

export default Demo;
