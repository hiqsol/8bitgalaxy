<template>
</template>

<script setup>
import Game from "./js/Game.js";
import Params from "./js/DivDrawer/Params.js";

let g = new Game();
let card = g.card("Human-S2c");

let sd = g.drawer.getDrawer('Show');
sd.draw(null, null, Params.xyleft(1, 7));
g.draw(null, card);

let elem = g.draw(null, card, Params.hidden());
sd.getDrawer(elem).removeShowEvents(elem);

sd.show(elem);

</script>
