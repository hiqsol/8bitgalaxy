<template>

</template>

<script setup>
import Game from "./js/Game.js";
import Start from "./js/Model/Start.js";

let g = new Game();
let h = g.board.home(1);
let s = new Start(h);
g.draw();

</script>
