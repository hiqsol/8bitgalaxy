<template>

</template>

<script setup>
import Demo from "./js/Demo.js";
import Card from "./js/Model/Card.js";
import Pile from "./js/Model/Pile.js";
import Params from "./js/DivDrawer/Params.js";
import Direction from "./js/DivDrawer/Direction.js";

let game = (new Demo()).game;
let vert = new Pile("");

let v = game.draw(null, vert, new Params(1, 1, Direction.TopToBottom));

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

game.draw(v, Card.assert("Human-S1a"), y["1.0"], x["1.1"]);
game.draw(v, Card.assert("Human-S1c"), y["1.0"], x["1.2"]);
game.draw(v, Card.assert("Human-S1p"), y["1.0"], x["1.3"]);
game.draw(v, Card.assert("Human-S1s"), y["1.0"], x["1.4"]);

game.draw(v, Card.assert("Human-S3a"), y["2.0"], x["1.1"]);
game.draw(v, Card.assert("Human-S3c"), y["2.0"], x["1.2"]);
game.draw(v, Card.assert("Human-S3p"), y["2.0"], x["1.3"]);
game.draw(v, Card.assert("Human-S3s"), y["2.0"], x["1.4"]);

game.draw(v, Card.assert("Human-S5a"), y["3.0"], x["1.1"]);
game.draw(v, Card.assert("Human-S5c"), y["3.0"], x["1.2"]);
game.draw(v, Card.assert("Human-S5p"), y["3.0"], x["1.3"]);
game.draw(v, Card.assert("Human-S5s"), y["3.0"], x["1.4"]);

game.draw(v, Card.assert("Human-S7a"), y["4.0"], x["1.1"]);
game.draw(v, Card.assert("Human-S7c"), y["4.0"], x["1.2"]);
game.draw(v, Card.assert("Human-S7p"), y["4.0"], x["1.3"]);
game.draw(v, Card.assert("Human-S7s"), y["4.0"], x["1.4"]);


game.draw(v, Card.assert("Human-H1a"), y["1.0"], x["2.1"]);
game.draw(v, Card.assert("Human-H1c"), y["1.0"], x["2.2"]);
game.draw(v, Card.assert("Human-H1p"), y["1.0"], x["2.3"]);
game.draw(v, Card.assert("Human-H1s"), y["1.0"], x["2.4"]);

game.draw(v, Card.assert("Human-H3a"), y["2.0"], x["2.1"]);
game.draw(v, Card.assert("Human-H3c"), y["2.0"], x["2.2"]);
game.draw(v, Card.assert("Human-H3p"), y["2.0"], x["2.3"]);
game.draw(v, Card.assert("Human-H3s"), y["2.0"], x["2.4"]);

game.draw(v, Card.assert("Human-H5a"), y["3.0"], x["2.1"]);
game.draw(v, Card.assert("Human-H5c"), y["3.0"], x["2.2"]);
game.draw(v, Card.assert("Human-H5p"), y["3.0"], x["2.3"]);
game.draw(v, Card.assert("Human-H5s"), y["3.0"], x["2.4"]);

game.draw(v, Card.assert("Human-H7a"), y["4.0"], x["2.1"]);
game.draw(v, Card.assert("Human-H7c"), y["4.0"], x["2.2"]);
game.draw(v, Card.assert("Human-H7p"), y["4.0"], x["2.3"]);
game.draw(v, Card.assert("Human-H7s"), y["4.0"], x["2.4"]);


game.draw(v, Card.assert("Human-B2a"), y["1.0"], x["3.1"]);
game.draw(v, Card.assert("Human-B2c"), y["1.0"], x["3.2"]);
game.draw(v, Card.assert("Human-B2p"), y["1.0"], x["3.3"]);
game.draw(v, Card.assert("Human-B2s"), y["1.0"], x["3.4"]);

game.draw(v, Card.assert("Human-B4a"), y["2.0"], x["3.1"]);
game.draw(v, Card.assert("Human-B4c"), y["2.0"], x["3.2"]);
game.draw(v, Card.assert("Human-B4p"), y["2.0"], x["3.3"]);
game.draw(v, Card.assert("Human-B4s"), y["2.0"], x["3.4"]);

game.draw(v, Card.assert("Human-B6a"), y["3.0"], x["3.1"]);
game.draw(v, Card.assert("Human-B6c"), y["3.0"], x["3.2"]);
game.draw(v, Card.assert("Human-B6p"), y["3.0"], x["3.3"]);
game.draw(v, Card.assert("Human-B6s"), y["3.0"], x["3.4"]);

game.draw(v, Card.assert("Human-B8a"), y["4.0"], x["3.1"]);
game.draw(v, Card.assert("Human-B8c"), y["4.0"], x["3.2"]);
game.draw(v, Card.assert("Human-B8p"), y["4.0"], x["3.3"]);
game.draw(v, Card.assert("Human-B8s"), y["4.0"], x["3.4"]);


game.draw(v, Card.assert("Human-C3a"), y["2.0"], x["4.1"]);
game.draw(v, Card.assert("Human-C3c"), y["2.0"], x["4.2"]);
game.draw(v, Card.assert("Human-C3p"), y["2.0"], x["4.3"]);
game.draw(v, Card.assert("Human-C3s"), y["2.0"], x["4.4"]);

game.draw(v, Card.assert("Human-C5a"), y["3.0"], x["4.1"]);
game.draw(v, Card.assert("Human-C5c"), y["3.0"], x["4.2"]);
game.draw(v, Card.assert("Human-C5p"), y["3.0"], x["4.3"]);
game.draw(v, Card.assert("Human-C5s"), y["3.0"], x["4.4"]);

game.draw(v, Card.assert("Human-C7a"), y["4.0"], x["4.1"]);
game.draw(v, Card.assert("Human-C7c"), y["4.0"], x["4.2"]);
game.draw(v, Card.assert("Human-C7p"), y["4.0"], x["4.3"]);
game.draw(v, Card.assert("Human-C7s"), y["4.0"], x["4.4"]);


for (let i = 1; i < 9; i++) {
  let s = i.toString();
  game.draw(v, new Pile(s), y[s + ".0"], x["5.1"]);
}
</script>

<style scoped>

</style>
