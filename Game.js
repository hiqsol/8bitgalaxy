import Board from "./Board.js";
import DivDrawer from "./DivDrawer.js";

class Game {
  start(div) {
    var b = new Board();
    b.star(0,0)
      .add('AI-Hero-1s',      1)
      .add('AI-Base-7a',      2)
      .add('AI-Ship-2a',      0)
      .add('AI-Colony-4p',    0)
    ;
    b.star(1, 0)
      .add('AI-Base-6C',      2)
      .add('AI-Colony-4P',    0)
    ;
    b.star(0, 1)
      .add('AI-Ship-2A',      0)
      .add('AI-Hero-1A',      0)
      .add('AI-Hero-2A',      1)
    ;
    b.star(2, 1)
      .add('Human-Base-6C',   2)
      .add('Human-Ship-2A',   0)
      .add('Human-Colony-4P', 0)
      .add('Human-Hero-2A',   1)
    ;
    b.star(0, 2)
      .add('Human-Base-6c',   2)
      .add('Human-Colony-4p', 0)
    ;
    b.star(1, 2)
      .add('Human-Base-7C',   0)
      .add('Human-Base-6C',   1)
      .add('Human-Base-5S',   2)
      .add('Human-Ship-1C',   0)
      .add('Human-Ship-2A',   1)
      .add('Human-Ship-3S',   2)
      .add('Human-Ship-4S',   3)
      .add('Human-Colony-4P', 0)
      .add('Human-Colony-3S', 1)
      .add('Human-Colony-6P', 2)
      .add('Human-Hero-2A',   0)
      .add('Human-Hero-1s',   1)
    ;

    var d = new DivDrawer(div);
    d.draw(b);
  }
}

export default Game;
