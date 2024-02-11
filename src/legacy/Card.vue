<template>
</template>

<script setup>
import Game from "./js/Game.js";
import Params from "./js/DivDrawer/Params.js";

let g = new Game();
g.draw(null, g.scoreboard);

g.draw(null, g.card("Human-S2c"), Params.xyleft(1, 1));

</script>
