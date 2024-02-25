import Index from "./legacy/Index.vue";
import Card from "./legacy/Card.vue";
import Cards from "./legacy/Cards.vue";
import Start from "./legacy/Start.vue";
import Home from "./legacy/Home.vue";
import Home2 from "./legacy/Home2.vue";
import Full from "./legacy/Full.vue";
import ADeck from "./legacy/ADeck.vue";
import Stars from "./legacy/Stars.vue";
import Pile from "./legacy/Pile.vue";
import Gen from "./legacy/Gen.vue";
import Field from "./legacy/Field.vue";
import Board from "./legacy/Board.vue";
import Deck from "./legacy/Deck.vue";
import Deck2 from "./legacy/Deck2.vue";
import Human from "./legacy/Human.vue";

export default [
  {path: "/", component: Index},
  {path: "/card", component: Card},
  {path: "/cards", component: Cards},
  {path: "/start", component: Start},
  {path: "/home", component: Home},
  {path: "/home2", component: Home2},
  {path: "/full", component: Full},
  {path: "/adeck", component: ADeck},
  {path: "/stars", component: Stars},
  {path: "/pile", component: Pile},
  {path: "/gen", component: Gen},
  {path: "/field", component: Field},
  {path: "/board", component: Board},
  {path: "/deck", component: Deck},
  {path: "/deck2", component: Deck2},
  {path: "/human", component: Human},
];
