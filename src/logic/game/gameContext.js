import React from "react";

const GameContext = React.createContext();
export default GameContext;
























// const { Provider, Consumer } = React.createContext();
// import stateFromString from "../../components/ui/GameViewFull";

// console.log(stateFromString)



// class GameContextProvider extends Component {
//   // state = {
//   //   game: {}
//   // };

//   updateGame = (updateGame) => {
//     this.setState(prevState => {
//       return {
//         game: prevState.game = updateGame
//       };
//     });
//   };

//   render() {
//     return (
//       <Provider
//         value={{ game: this.state.game, updateGame: this.updateGame }}
//       >
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

// export { GameContextProvider, Consumer as GameContextConsumer };
