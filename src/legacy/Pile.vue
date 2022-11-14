<template>

</template>

<script setup>
import Demo from "./js/Demo.js";
import Deck from "./js/Model/Deck.js";
import Pile from "./js/Model/Pile.js";
import Direction from "./js/Model/Direction.js";

let game = (new Demo()).game;
let deck = new Deck("Human");

let ships = new Pile("Ships", Direction.TopToBottom);
let heroes = new Pile("Heroes", Direction.TopToBottom);
let bases = new Pile("Bases", Direction.LeftToRight);
let colonies = new Pile("Colonies", Direction.LeftToRight);

ships.put(deck.ships);
ships.unfold();
heroes.put(deck.heroes);
heroes.unfold();
bases.put(deck.bases);
bases.unfold();
colonies.put(deck.colonies);
colonies.unfold();

game.draw(null, ships, 1, 1);
game.draw(null, heroes, 1, 23);
game.draw(null, bases, 18, 1);
game.draw(null, colonies, 18, 23);

ships.setDirection(Direction.LeftToRight).shuffle();
heroes.setDirection(Direction.LeftToRight).shuffle();
bases.setDirection(Direction.TopToBottom).shuffle();
colonies.setDirection(Direction.TopToBottom).shuffle();

game.draw(null, ships, 1, 50 + 1);
game.draw(null, heroes, 1, 50 + 23);
game.draw(null, bases, 18, 50 + 1);
game.draw(null, colonies, 18, 50 + 23);
</script>

<style scoped>

</style>
