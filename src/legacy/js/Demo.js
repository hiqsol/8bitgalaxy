import Game from "./Game.js";

class Demo {
  constructor(options = {}) {
    this._game = new Game(options);
    this.init();
  }

  get game() {
    return this._game;
  }

  init() {
    this.initHome1();
    this.initField();
  }

  initHome1() {
    let h = this.game.board.home(1);
    h.discard.put("Human-Hero-1s");
    h.discard.put("Human-Ship-2a");
    h.discard.put("Human-Base-7a");
    h.reserve.put("turned Human-Hero-1s");
    h.reserve.put("turned Human-Ship-2a");
    h.reserve.put("turned Human-Colony-4p");
    h.reserve.put("turned Human-Base-7a");
    h.hand.put("turned Human-Hero-1c");
    h.science.put("Human-C4s");
    h.colonization.put("Human-C4c");
    this.initProduction(h);
    this.initResearch(h);
  }

  initProduction(home) {
    let f = home.factory;
    f.pile(0).put("Human-Colony-3s");
    f.pile(0).put("Human-Colony-4a");
    f.pile(0).put("Human-Colony-4c");
    f.pile(0).put("Human-Colony-4p");
    f.pile(0).put("Human-Colony-4s");
    f.pile(1).put("Human-Ship-4a");
    f.pile(1).put("Human-Ship-4c");
    f.pile(1).put("Human-Ship-4s");
    f.pile(1).put("Human-Ship-4s");
    f.pile(2).put("Human-Base-3s");
    f.pile(2).put("Human-Base-3a");
    f.pile(2).put("Human-Base-3c");
    f.pile(3).put("Human-Hero-4s");
    f.pile(3).put("Human-Hero-4c");
  }

  initResearch(home) {
    let r = home.research;
    for (let i = 0; i < 20; i++) {
      r.pile(0).put("turned Human-Base-4c");
      r.pile(0).put("turned Human-Ship-4s");
    }
    r.pile(0).put("Human-Colony-4a");
    r.pile(1).put("Human-Colony-3a");
    r.pile(2).put("Human-Ship-4c");
    r.pile(3).put("Human-Base-6c");
    r.pile(4).put("Human-Hero-4p");
  }

  initField() {
    let b = this.game.board;
    b.star(0, 0)
      .put("AI-Hero-1s", 1)
      .put("turned AI-Base-7a", 2)
      .put("AI-Ship-2a", 3)
      .put("AI-Colony-4p", 0);b.star(0, 1)
      .put("AI-B6C", 2)
      .put("AI-C4P", 0);b.star(1, 0)
      .put("AI-S2A", 0)
      .put("AI-H1A", 0)
      .put("AI-H2A", 1);b.star(1, 2)
      .put("Human-B6c", 0)
      .put("Human-C4p", 4)
      .put("Human-S2a", 0)
      .put("Human-H2a", 1);b.star(2, 0)
      .put("Human-B3c", 0)
      .put("Human-C3p", 1)
      .put("Human-B5s", 2)
      .put("Human-C5s", 3)
      .put("Human-C4a", 4)

      .put("Human-S1c", 0)
      .put("Human-S2a", 1)
      .put("Human-S3p", 2)
      .put("Human-S4s", 3)
      .put("Human-S4a", 4)
      .put("Human-H2a", 0)
      .put("Human-H1s", 1);b.star(2, 1)
      .put("Human-B5c", 0)
      .put("Human-C4p", 2);
  }
}

export default Demo;
