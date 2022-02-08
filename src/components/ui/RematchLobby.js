import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocketIO } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/react';
import { LobbyAPI } from '../../logic/game/api.js';
import { Game } from '../../logic/game/gameLogic.js';
import GameViewFull from './GameViewFull';
import TemplatePage from './TemplatePage.js';
import { GAME_SERVER_URL, APP_PRODUCTION } from '../../config.js';
import '../../styles/lobby.css';


const api = new LobbyAPI();

const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : GAME_SERVER_URL;

const GameClient = Client({
  game: Game,
  board: GameViewFull,
  debug: false,
  multiplayer: SocketIO({
    server: server,
  }),
});

class RematchLobby extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log('Creating rematch lobby');
    this.state.id = null;
    this.state.joined = [];
    this.state.myID = null;
    this.state.userAuthToken = null;
  }

  componentDidMount() {
    this.playAgain();
    this.interval = setInterval(this.checkRoomState, 1000);
    window.addEventListener('beforeunload', this.cleanup.bind(this));
  }

  cleanup() {
    console.log('Cleaning up');
    api.leaveRoom(this.state.id, this.state.myID, this.state.userAuthToken);
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.cleanup.bind(this));
  }

  playAgain = () => {
    api.playAgain(...this.props.location.playAgainPayload).then((value) => {
      this.setState({ id: value }, () => {
        this.checkRoomStateAndJoin();
      });
    });
  };

  joinRoom = (player_no) => {
    const username = 'Player ' + player_no;
    if (this.state.id) {
      api.joinRoom(this.state.id, username, player_no).then(
        (authToken) => {
          this.setState({ myID: player_no, userAuthToken: authToken });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  checkRoomStateAndJoin = () => {
    if (this.state.id) {
      api.whosInRoom(this.state.id).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name);
          this.setState({
            joined: joinedPlayers,
          });
          const myPlayerNum = this.props.location.newPlayerID;
          this.joinRoom(myPlayerNum);
        },
        (error) => {
          this.setState({
            id: null,
          });
        }
      );
    }
  };

  checkRoomState = () => {
    if (this.state.id) {
      api.whosInRoom(this.state.id).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name);
          this.setState({
            joined: joinedPlayers,
          });
        },
        (error) => {
          this.setState({
            id: null,
          });
        }
      );
    }
  };

  gameExistsView = () => {
    return (
      <>
        <div>
          Waiting for opponent to accept the rematch...
        </div>
        <div id="bars1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </>
    );
  };

  gameNotFoundView = () => {
    return (
      <>
        <div>
          Something went wrong while setting-up a rematch.
          <br />
          <Link to="/">
            Go back and create a new lobby.
          </Link>
        </div>
      </>
    );
  };

  getGameClient = () => {
    return (
      <GameClient
        matchID={this.state.id}
        players={this.state.joined}
        playerID={String(this.state.myID)}
        credentials={this.state.userAuthToken}
      ></GameClient>
    );
  };
  
  render() {
    if (this.state.joined.length === 2) {
      return this.getGameClient();
    }
    return (
      <TemplatePage
        content={
          this.state.id ? this.gameExistsView() : this.gameNotFoundView()
        }
      />
    );
  }
}
export default RematchLobby;
