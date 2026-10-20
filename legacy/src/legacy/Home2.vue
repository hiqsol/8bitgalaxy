<template>

</template>

<script setup>
import Demo from "./js/Demo.js";

let g = (new Demo()).game;
g.draw(null, g.board.home(1));
</script>

<style scoped>

</style>
