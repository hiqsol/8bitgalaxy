import StateConverter from "../../src/Model/StateConverter";
import Game from "../../src/Game";
import Demo from "../../src/Demo";


const game = new Game();
const demo = new Demo().game;
const stateConverter = new StateConverter();

const toStringGame = stateConverter.toState(game);
const toStringDemo = stateConverter.toState(demo);

const stateFromStringGame = stateConverter.createGame(JSON.parse(toStringGame));
const stateFromStringDemo = stateConverter.createGame(JSON.parse(toStringDemo));

describe("Obj should be equal", function () {
  it("Game should be equal stateFromStringGame", function () {
    expect(game).to.eql(stateFromStringGame);
  });
  it("Demo Options should be equal StateFromStringDemo Options", function () {
    const demoOptions = demo._options;
    const stateFromStringDemoOptions = stateFromStringDemo._options;
    expect(demoOptions).to.eql(stateFromStringDemoOptions);
  });
  it("DemoBoardPlayers should be equal StateFromStringDemoBoardPlayers", function () {
    const demoBoardPlayersDirect = demo._board._players[0]._direction;
    const stateBoardPlayersDirect =
      stateFromStringDemo._board._players[0]._direction;
    const demoBoardPlayersHome = demo._board._players[0]._home._player._name;
    const stateBoardPlayersHome =
      stateFromStringDemo._board._players[0]._home._player._name;
    expect(demoBoardPlayersDirect).to.eql(stateBoardPlayersDirect);
    expect(demoBoardPlayersHome).to.eql(stateBoardPlayersHome);
  });
  it("Demo Players & Cards should be equal StateFromStringDemo Players & Cards", function () {
    let demoRes = [];
    let stateRes = [];

    demo._board._players.forEach((player, index) => {
      let res = {
        _direction: player._direction,
        _home: {
          _discard: player._home._discard,
          _estate: player._home._estate,
          _factory: player._home._factory,
          _research: player._home._research,
        },
        _name: player._name,
        _race: player._race,
        _x: player._x,
        _y: player._y,
      };
      demoRes.push(res);
    });

    stateFromStringDemo._board._players.forEach((player, index) => {
      let res = {
        _direction: player._direction,
        _home: {
          _discard: player._home._discard,
          _estate: player._home._estate,
          _factory: player._home._factory,
          _research: player._home._research,
        },
        _name: player._name,
        _race: player._race,
        _x: player._x,
        _y: player._y,
      };
      stateRes.push(res);
    });
    expect(demoRes).to.eql(stateRes);
  });
  it("Demo Stars cards should be equal StateFromStringDemo Stars cards", function () {
    let demoRes = [];
    let stateRes = [];

    demo._board._field.stars.forEach((star) => {
      star.forEach((s) => {
        s.bases.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return demoRes.push(res);
          }
        });
        s.colonies.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return demoRes.push(res);
          }
        });
        s.heroes.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return demoRes.push(res);
          }
        });
        s.ships.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return demoRes.push(res);
          }
        });
      });
    });

    stateFromStringDemo._board._field.stars.forEach((star) => {
      star.forEach((s) => {
        s.bases.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return stateRes.push(res);
          }
        });
        s.colonies.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return stateRes.push(res);
          }
        });
        s.heroes.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return stateRes.push(res);
          }
        });
        s.ships.forEach((slot, index) => {
          if (slot) {
            let res = {
              _acard: slot._acard,
              _state: slot._state,
            };
            return stateRes.push(res);
          }
        });
      });
    });
    expect(demoRes).to.eql(stateRes);
  });
});
