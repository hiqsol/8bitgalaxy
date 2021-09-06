import "./styles/8bitfont.css";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {observer} from "mobx-react-lite";

// import Game from "./sotres/Game";
import Game from "./Game";
import Demo from "./Demo";
import Card from "./Model/Card";
import GameView from "./components/ui/GameView";
import CardView from "./components/ui/CardView";

const App = () => {
  // const game = Game.create();
  // const b = game.board;
  // const h = b.home(1);
  // // init home 1
  // h.discard.put("Human-Hero-1s");
  // h.discard.put("Human-Hero-1s");
  // h.discard.put("Human-Ship-2a");
  // h.discard.put("Human-Base-7a");
  // h.reserve().put("turned Human-Ship-2a");
  // h.reserve().put("turned Human-Colony-4p");
  // h.reserve().put("turned Human-Base-7a");
  // h.hand().put("turned Human-Hero-1c");
  // h.techs().put("Human-Tech-4p");
  //
  // const f = h.factory;
  // f.pile(0).put("Human-Colony-4a");
  // f.pile(0).put("Human-Colony-4c");
  // f.pile(0).put("Human-Colony-4s");
  // f.pile(0).put("Human-Colony-4p");
  // f.pile(1).put("Human-Ship-4a");
  // f.pile(1).put("Human-Ship-4c");
  // f.pile(1).put("Human-Ship-4s");
  // f.pile(2).put("Human-Base-3s");
  // f.pile(2).put("Human-Base-3a");
  // f.pile(2).put("Human-Base-3c");
  // f.pile(3).put("Human-Hero-4s");
  // f.pile(3).put("Human-Hero-4c");
  // f.pile(3).put("Human-Hero-4a");
  //
  // const r = h.research;
  // r.pile(0).put("turned Human-Colony-4c");
  // r.pile(0).put("turned Human-Colony-4s");
  // r.pile(0).put("turned Human-Colony-4p");
  // r.pile(0).put("Human-Tech-4p");
  // r.pile(1).put("Human-Colony-3a");
  // r.pile(2).put("Human-Ship-4c");
  // r.pile(3).put("Human-Base-6c");
  // r.pile(4).put("Human-Hero-4p");
  //
  // // init field
  //
  // // b.star(0, 0).put("AI-Colony-4p", 0).put("AI-Hero-1s", 1).put("turned AI-Base-7a", 2).put("AI-Ship-2a", 3);
  //
  // b.star(0, 0).put("AI-Colony-4p", 0).put("AI-Hero-1s", 1).put("turned AI-Base-7a", 2).put("AI-Ship-2a", 3);
  // b.star(0, 1).put("AI-Base-6C", 2).put("AI-Colony-4P", 0);
  // b.star(1, 0)
  //   .put("AI-Ship-2A", 0)
  //   .put("AI-Hero-1A", 0)
  //   .put("AI-Hero-2A", 1)
  // ;
  // b.star(1, 2)
  //   .put("Human-Base-6C", 2)
  //   .put("Human-Ship-2A", 0)
  //   .put("Human-Colony-4P", 0)
  //   .put("Human-Hero-2A", 1)
  // ;
  // b.star(2, 0)
  //   .put("Human-Base-7C", 0)
  //   .put("Human-Base-6C", 1)
  //   .put("Human-Base-5S", 2)
  //   .put("Human-Ship-1C", 0)
  //   .put("Human-Ship-2A", 1)
  //   .put("Human-Ship-3S", 2)
  //   .put("Human-Ship-4S", 3)
  //   .put("Human-Colony-4P", 0)
  //   .put("Human-Colony-3S", 1)
  //   .put("Human-Colony-6P", 2)
  //   .put("Human-Hero-2A", 0)
  //   // .put("Human-Hero-1s", 1)
  // ;
  // b.star(2, 1)
  //   .put("Human-Base-6c", 2)
  //   .put("Human-Colony-4p", 0)
  // ;
  // const card = Card.create().assert("Human-Hero-1s");
  const game = (new Demo()).game;
  // const card = Card.assert('Human-Ship-2c')

  return (
    <div className="App">
      <DndProvider debugMode={true} backend={HTML5Backend}>
        {/*<CardView card={card} x={1} y={1}/>*/}
        <GameView game={game}/>
      </DndProvider>
    </div>
  );
};

export default observer(App);

// import PileView from "./components/ui/PileView";
// import CardView from "./components/ui/CardView";
// import Pile from "./sotres/Pile";
// import Card from "./sotres/Card";

// const pile1 = Pile.create().assert("Discard");
// pile1.put("Human-Ship-2c");
// pile1.put("Human-Base-3s");
// pile1.put("Human-Colony-4p");
// pile1.put("Human-Tech-5c");

// const pile2 = Pile.create().assert("Discard", "LeftToRight");
// pile2.put("Human-Ship-2c");
// pile2.put("Human-Base-3s");
// pile2.put("Human-Colony-4p");
// pile2.put("Human-Tech-5c");

// const pile3 = Pile.create().assert("Discard LeftToRight");
// const card = Card.create({card: "Human-Tech-5c"});
// const card = Card.create().assert("Human-Tech-5c");


//
// <PileView store={pile1} y={1} x={1}/>
// <PileView store={pile2} y={1} x={10}/>
// <PileView pile={pile3} y={6} x={10}>
//   <CardView card={Card.create().assert("Human-Tech-5c")} y={1} x={1}/>
// </PileView>
//
// {game.draw(v, Card.assert("Human-Ship-2c"), 0, 8)}
// {game.draw(v, Card.assert("Human-Base-3s"), 0, 8 * 2)}
// {game.draw(v, Card.assert("Human-Colony-4p"), 0, 8 * 3)}
// {game.draw(v, Card.assert("Human-Tech-5c"), 0, 8 * 4)}
//
// {game.draw(h, Card.assert("Human-Ship-2c"), 0, 8)}
// {game.draw(h, Card.assert("Human-Base-3s"), 0, 8 * 2)}
// {game.draw(h, Card.assert("Human-Colony-4p"), 0, 8 * 3)}
// {game.draw(h, Card.assert("Human-Tech-5c"), 0, 8 * 4)}
