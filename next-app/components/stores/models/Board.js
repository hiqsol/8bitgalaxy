import {types} from "mobx-state-tree";

const Board = types.model({
  field: "",
  players: [],
});

export default Board;