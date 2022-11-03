<template>

</template>

<script setup>
import Demo from "./js/Demo.js";

let g = (new Demo()).game;
g.draw(null, g.board.star(0, 0));
g.draw(null, g.board.star(1, 1));
g.draw(null, g.board.star(2, 0));
</script>

<style scoped>

</style>
