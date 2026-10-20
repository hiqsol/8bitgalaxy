<template>

</template>

<script setup>
import Game from "./js/Game.js";

let g = new Game();
g.draw(null, g.board.star(0, 0));
g.draw(null, g.board.star(1, 1));
g.draw(null, g.board.star(2, 0));
</script>

<style scoped>

</style>
