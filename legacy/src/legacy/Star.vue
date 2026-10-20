<template>

</template>

<script setup>
import Game from "./js/Game.js";

let g = new Game();
let s  = g.board.star(1, 1);
s.initAllSpaces()
g.draw(null, s);
</script>

<style scoped>

</style>
