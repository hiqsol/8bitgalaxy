import Board from "./Board.js";
import DivDrawer from "./DivDrawer.js";

class Game {
  start(div) {
    var b = new Board();
    b.star(0,0)
      .add('Base6C',    2)
      .add('Ship2A',    0)
      .add('Colony4P',  0)
      .add('Hero2A',    1);
    b.star(1, 0)
      .add('Base6C',   2)
      .add('Colony4P', 0);
    b.star(0, 1)
      .add('Ship2A',   0)
      .add('Hero2A',   0)
      .add('Hero2A',   1);
    b.star(2, 1)
      .add('Base6C',   2)
      .add('Ship2A',   0)
      .add('Colony4P', 0)
      .add('Hero2A',   1);
    b.star(0, 2)
      .add('Base6C',   2)
      .add('Colony4P', 0);
    b.star(1, 2)
      .add('Base7C',   0)
      .add('Base6C',   1)
      .add('Base5S',   2)
      .add('Ship1C',   0)
      .add('Ship2A',   1)
      .add('Ship3S',   2)
      .add('Ship4S',   3)
      .add('Colony4P', 0)
      .add('Colony3S', 1)
      .add('Colony6P', 2)
      .add('Hero2A',   0)
      .add('Hero2A',   1);

    var d = new DivDrawer(div);
    d.draw(b);
  }
}

export default Game;
