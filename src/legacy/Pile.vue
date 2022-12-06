<template>

</template>

<script setup>
import Game from "./js/Game.js";
import Deck from "./js/Model/Deck.js";
import Pile from "./js/Model/Pile.js";
import Params from "./js/DivDrawer/Params.js";
import Direction from "./js/DivDrawer/Direction.js";

let game = new Game();
let deck = new Deck("Human");

let ships = new Pile("Ships");
let heroes = new Pile("Heroes");
let bases = new Pile("Bases");
let colonies = new Pile("Colonies");

ships.put(deck.ships);
ships.unfold();
heroes.put(deck.heroes);
heroes.unfold();
bases.put(deck.bases);
bases.unfold();
colonies.put(deck.colonies);
colonies.unfold();

game.draw(null, ships,      new Params( 1,  1, Direction.TopToBottom));
game.draw(null, heroes,     new Params(23,  1, Direction.TopToBottom));
game.draw(null, bases,      new Params( 1, 18, Direction.LeftToRight));
game.draw(null, colonies,   new Params(23, 18, Direction.LeftToRight));

game.draw(null, ships,      new Params(50 +  1,  1, Direction.LeftToRight));
game.draw(null, heroes,     new Params(50 + 23,  1, Direction.LeftToRight));
game.draw(null, bases,      new Params(50 +  1, 18, Direction.TopToBottom));
game.draw(null, colonies,   new Params(50 + 23, 18, Direction.TopToBottom));
</script>

<style scoped>

</style>
