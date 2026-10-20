<template>

</template>

<script setup>
import Game from "./js/Game.js";

let g = new Game();
g.draw(null, g.board.home(1));

</script>
