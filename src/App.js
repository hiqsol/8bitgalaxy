import "./styles/8bitfont.css";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {observer} from "mobx-react-lite";

import Demo from "./Demo";
import GameView from "./components/ui/GameView";

const App = () => {
  const game = (new Demo()).game;

  return (
    <div className="App">
      <DndProvider debugMode={true} backend={HTML5Backend}>
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
