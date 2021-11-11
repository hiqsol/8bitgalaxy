import "./styles/8bitfont.css";
import React from "react";
import { Switch , Route, useHistory } from 'react-router';
import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { Debug } from 'boardgame.io/debug';
import Lobby from './components/ui/Lobby.js';
import HomePage from './components/ui/HomePage.js';
import JoinPage from './components/ui/JoinPage.js';
import RematchLobby from './components/ui/RematchLobby.js';
import { Game } from './logic/game/gameLogic.js';
import GameViewFull from "./components/ui/GameViewFull";


function App() {
  const history = useHistory();

  const GameClient = Client({
    game: Game,
    board: GameViewFull,
    multiplayer: Local(),
    debug: { impl: Debug },
  });
  
  const renderGameClient = () => {
    return <GameClient playerID="0" demo="true"></GameClient>;
  };
  return (
    <Switch>
      <Route
        path="/home"
        exact
        render={(props) => <HomePage {...props} history={history} />}
      />
      <Route
        path="/join"
        exact
        render={(props) => <JoinPage {...props} history={history} />}
      />
      <Route path="/demo" exact render={() => renderGameClient()} />
      <Route
        path="/rematch"
        render={(props) => <RematchLobby {...props} key={props.location.key} />}
      />
      <Route path="/lobby/:id" component={Lobby} />
      <Route
        path="/public_lobby/:id"
        render={(props) => <Lobby {...props} isPublic={true} />}
      />
      <Route
        path="*"
        render={(props) => <HomePage {...props} history={history} />}
      />
    </Switch>
  );
}

export default App;

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
