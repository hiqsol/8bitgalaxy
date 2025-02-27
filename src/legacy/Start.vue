<template>
</template>

<script setup>
import Game from "./js/Game.js";

document.addEventListener("keypress", function onPress(event) {
    let board = document.getElementById('Board');
    let zoom = parseFloat(board.style.zoom);
    if (!zoom) zoom = 0.3;
    let save = zoom;

    if (event.key === '+' || event.key === '=') {
        zoom += 0.03;
    } else if (event.key === '-') {
        zoom -= 0.03;
    }
    if (zoom != save) {
      board.style.zoom = zoom;
    }
});

let g = new Game();
g.start();

</script>
