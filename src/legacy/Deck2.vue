<template>

</template>

<script setup>

import Demo from "./js/Demo.js";
import Card from "./js/Model/Card.js";
import Pile from "./js/Model/Pile.js";
import Deck from "./js/Model/Decks/Deck.js";
import Direction from "./js/DivDrawer/Direction.js";

let game = (new Demo()).game;
let deck = new Deck("Human");
console.log(deck.size);
console.log(Object.keys(deck.lower).length);
console.log(deck.lower);
let vert = new Pile("", Direction.TopToBottom);
let upsd = new Pile("", Direction.BottomToTop);

let v = game.draw(null, vert, 1, 1);
let u = game.draw(null, upsd, 1, 1);

let y = {
  "1.0": (1.0 - 1) * 8,
  "1.5": (1.5 - 1) * 8,
  "2.0": (2.0 - 1) * 8,
  "2.5": (2.5 - 1) * 8,
  "3.0": (3.0 - 1) * 8,
  "3.5": (3.5 - 1) * 8,
  "4.0": (4.0 - 1) * 8,
  "4.5": (4.5 - 1) * 8,
  "5.0": (5.0 - 1) * 8,
  "5.5": (5.5 - 1) * 8,
  "6.0": (6.0 - 1) * 8,
  "6.5": (6.5 - 1) * 8,
  "7.0": (7.0 - 1) * 8,
  "7.5": (7.5 - 1) * 8,
  "8.0": (8.0 - 1) * 8,
  "8.5": (8.5 - 1) * 8,
};
let x = {
  "1.1": ((1 - 1) * 4 + 1 - 1) * 6,
  "1.2": ((1 - 1) * 4 + 2 - 1) * 6,
  "1.3": ((1 - 1) * 4 + 3 - 1) * 6,
  "1.4": ((1 - 1) * 4 + 4 - 1) * 6,
  "2.1": ((2 - 1) * 4 + 1 - 1) * 6,
  "2.2": ((2 - 1) * 4 + 2 - 1) * 6,
  "2.3": ((2 - 1) * 4 + 3 - 1) * 6,
  "2.4": ((2 - 1) * 4 + 4 - 1) * 6,
  "3.1": ((3 - 1) * 4 + 1 - 1) * 6,
  "3.2": ((3 - 1) * 4 + 2 - 1) * 6,
  "3.3": ((3 - 1) * 4 + 3 - 1) * 6,
  "3.4": ((3 - 1) * 4 + 4 - 1) * 6,
  "4.1": ((4 - 1) * 4 + 1 - 1) * 6,
  "4.2": ((4 - 1) * 4 + 2 - 1) * 6,
  "4.3": ((4 - 1) * 4 + 3 - 1) * 6,
  "4.4": ((4 - 1) * 4 + 4 - 1) * 6,
  "5.1": ((5 - 1) * 4 + 1 - 1) * 6,
};

game.draw(v, Card.assert("AI-S2a"), y["2.5"], x["1.1"]);
game.draw(v, Card.assert("AI-S2c"), y["2.5"], x["1.2"]);
game.draw(v, Card.assert("AI-S2p"), y["2.5"], x["1.3"]);
game.draw(v, Card.assert("AI-S2s"), y["2.5"], x["1.4"]);

game.draw(v, Card.assert("AI-S4a"), y["4.5"], x["1.1"]);
game.draw(v, Card.assert("AI-S4c"), y["4.5"], x["1.2"]);
game.draw(v, Card.assert("AI-S4p"), y["4.5"], x["1.3"]);
game.draw(v, Card.assert("AI-S4s"), y["4.5"], x["1.4"]);

game.draw(v, Card.assert("AI-S6a"), y["6.5"], x["1.1"]);
game.draw(v, Card.assert("AI-S6c"), y["6.5"], x["1.2"]);
game.draw(v, Card.assert("AI-S6p"), y["6.5"], x["1.3"]);
game.draw(v, Card.assert("AI-S6s"), y["6.5"], x["1.4"]);


game.draw(u, Card.assert("AI-C2a"), y["2.5"], x["2.1"]);
game.draw(u, Card.assert("AI-C2c"), y["2.5"], x["2.2"]);
game.draw(u, Card.assert("AI-C2p"), y["2.5"], x["2.3"]);
game.draw(u, Card.assert("AI-C2s"), y["2.5"], x["2.4"]);

game.draw(u, Card.assert("AI-C4a"), y["4.5"], x["2.1"]);
game.draw(u, Card.assert("AI-C4c"), y["4.5"], x["2.2"]);
game.draw(u, Card.assert("AI-C4p"), y["4.5"], x["2.3"]);
game.draw(u, Card.assert("AI-C4s"), y["4.5"], x["2.4"]);

game.draw(u, Card.assert("AI-C6a"), y["6.5"], x["2.1"]);
game.draw(u, Card.assert("AI-C6c"), y["6.5"], x["2.2"]);
game.draw(u, Card.assert("AI-C6p"), y["6.5"], x["2.3"]);
game.draw(u, Card.assert("AI-C6s"), y["6.5"], x["2.4"]);

for (let i = 1; i < 9; i++) {
  let s = i.toString();
  game.draw(v, new Pile(s), y[s + ".0"], x["3.1"]);
}

</script>

<style scoped>

</style>
