<template>

</template>

<script setup>
import Game from "./js/Game.js";
import Start from "./js/Model/Start.js";

let g = new Game();
new Start(g.board.home(1));
new Start(g.board.home(2));
g.draw();

</script>
