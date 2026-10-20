<template>
</template>

<script setup>
import Game from "./js/Game.js";
import Pile from "./js/Model/Pile.js";
import Params from "./js/DivDrawer/Params.js";

let g = new Game();
g.draw(null, g.scoreboard);

let horz = new Pile(g, "");
let h = g.draw(null, horz, Params.xytop(1, 1));
g.draw(h, g.card("Human-S2c"), Params.xyleft(0*8, 0));
g.draw(h, g.card("Human-H5c"), Params.xyleft(1*8, 0));
g.draw(h, g.card("Human-B3s"), Params.xyleft(2*8, 0));
g.draw(h, g.card("Human-C4p"), Params.xyleft(3*8, 0));

let vert = new Pile(g, "");
let v = g.draw(null, vert, Params.xyleft(1, 10));
g.draw(v, g.card("Martian-S2c"), Params.xyleft(0,   0));
g.draw(v, g.card("Martian-H5c"), Params.xyleft(1*8, 0));
g.draw(v, g.card("Martian-B3s"), Params.xyleft(2*8, 0));
g.draw(v, g.card("Martian-C4p"), Params.xyleft(3*8, 0));

</script>
