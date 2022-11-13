<template>

</template>

<script setup>
  import Game from "./js/Game.js";
  import Card from "./js/Model/Card.js";
  import Pile from "./js/Model/Pile.js";
  import Decks from "./js/Model/Decks.js";
  import Direction from "./js/Model/Direction.js";

  let game = new Game();
  let vert = new Pile('', Direction.TopToBottom);

  let v = game.draw(null, vert, 1, 1);

  let y = {
    '1.0':  (1.0-1)*8,
    '1.5':  (1.5-1)*8,
    '2.0':  (2.0-1)*8,
    '2.5':  (2.5-1)*8,
    '3.0':  (3.0-1)*8,
    '3.5':  (3.5-1)*8,
    '4.0':  (4.0-1)*8,
    '4.5':  (4.5-1)*8,
    '5.0':  (5.0-1)*8,
    '5.5':  (5.5-1)*8,
    '6.0':  (6.0-1)*8,
    '6.5':  (6.5-1)*8,
    '7.0':  (7.0-1)*8,
    '7.5':  (7.5-1)*8,
    '8.0':  (8.0-1)*8,
    '8.5':  (8.5-1)*8,
  }
  let x = {
    '1.1':  ((1-1)*4 + 1-1)*6,
    '1.2':  ((1-1)*4 + 2-1)*6,
    '1.3':  ((1-1)*4 + 3-1)*6,
    '1.4':  ((1-1)*4 + 4-1)*6,
    '2.1':  ((2-1)*4 + 1-1)*6,
    '2.2':  ((2-1)*4 + 2-1)*6,
    '2.3':  ((2-1)*4 + 3-1)*6,
    '2.4':  ((2-1)*4 + 4-1)*6,
    '3.1':  ((3-1)*4 + 1-1)*6,
    '3.2':  ((3-1)*4 + 2-1)*6,
    '3.3':  ((3-1)*4 + 3-1)*6,
    '3.4':  ((3-1)*4 + 4-1)*6,
    '4.1':  ((4-1)*4 + 1-1)*6,
    '4.2':  ((4-1)*4 + 2-1)*6,
    '4.3':  ((4-1)*4 + 3-1)*6,
    '4.4':  ((4-1)*4 + 4-1)*6,
    '5.1':  ((5-1)*4 + 1-1)*6,
  }

function pile(card) {
    const pile = new Pile('', Direction.TopToBottom);
    pile.put(Card.assert(card));
    return pile;
}

  game.draw(v, pile('Human-S1a'),  y['1.0'], x['1.1']);
  game.draw(v, pile('Human-S1c'),  y['1.0'], x['1.2']);
  game.draw(v, pile('Human-S1p'),  y['1.0'], x['1.3']);
  game.draw(v, pile('Human-S1s'),  y['1.0'], x['1.4']);

  game.draw(v, pile('Human-S2a'),  y['2.5'], x['1.1']);
  game.draw(v, pile('Human-S2c'),  y['2.5'], x['1.2']);
  game.draw(v, pile('Human-S2p'),  y['2.5'], x['1.3']);
  game.draw(v, pile('Human-S2s'),  y['2.5'], x['1.4']);

  game.draw(v, pile('Human-S4a'),  y['4.5'], x['1.1']);
  game.draw(v, pile('Human-S4c'),  y['4.5'], x['1.2']);
  game.draw(v, pile('Human-S4p'),  y['4.5'], x['1.3']);
  game.draw(v, pile('Human-S4s'),  y['4.5'], x['1.4']);

  game.draw(v, pile('Human-S6a'),  y['6.5'], x['1.1']);
  game.draw(v, pile('Human-S6c'),  y['6.5'], x['1.2']);
  game.draw(v, pile('Human-S6p'),  y['6.5'], x['1.3']);
  game.draw(v, pile('Human-S6s'),  y['6.5'], x['1.4']);


  game.draw(v, pile('Human-H1a'),  y['1.5'], x['2.1']);
  game.draw(v, pile('Human-H1c'),  y['1.5'], x['2.2']);
  game.draw(v, pile('Human-H1p'),  y['1.5'], x['2.3']);
  game.draw(v, pile('Human-H1s'),  y['1.5'], x['2.4']);

  game.draw(v, pile('Human-H3a'),  y['3.5'], x['2.1']);
  game.draw(v, pile('Human-H3c'),  y['3.5'], x['2.2']);
  game.draw(v, pile('Human-H3p'),  y['3.5'], x['2.3']);
  game.draw(v, pile('Human-H3s'),  y['3.5'], x['2.4']);

  game.draw(v, pile('Human-H5a'),  y['5.5'], x['2.1']);
  game.draw(v, pile('Human-H5c'),  y['5.5'], x['2.2']);
  game.draw(v, pile('Human-H5p'),  y['5.5'], x['2.3']);
  game.draw(v, pile('Human-H5s'),  y['5.5'], x['2.4']);

  game.draw(v, pile('Human-H7a'),  y['7.5'], x['2.1']);
  game.draw(v, pile('Human-H7c'),  y['7.5'], x['2.2']);
  game.draw(v, pile('Human-H7p'),  y['7.5'], x['2.3']);
  game.draw(v, pile('Human-H7s'),  y['7.5'], x['2.4']);


  game.draw(v, pile('Human-B2a'),  y['2.0'], x['3.1']);
  game.draw(v, pile('Human-B2c'),  y['2.0'], x['3.2']);
  game.draw(v, pile('Human-B2p'),  y['2.0'], x['3.3']);
  game.draw(v, pile('Human-B2s'),  y['2.0'], x['3.4']);

  game.draw(v, pile('Human-B3a'),  y['3.5'], x['3.1']);
  game.draw(v, pile('Human-B3c'),  y['3.5'], x['3.2']);
  game.draw(v, pile('Human-B3p'),  y['3.5'], x['3.3']);
  game.draw(v, pile('Human-B3s'),  y['3.5'], x['3.4']);

  game.draw(v, pile('Human-B5a'),  y['5.5'], x['3.1']);
  game.draw(v, pile('Human-B5c'),  y['5.5'], x['3.2']);
  game.draw(v, pile('Human-B5p'),  y['5.5'], x['3.3']);
  game.draw(v, pile('Human-B5s'),  y['5.5'], x['3.4']);

  game.draw(v, pile('Human-B7a'),  y['7.5'], x['3.1']);
  game.draw(v, pile('Human-B7c'),  y['7.5'], x['3.2']);
  game.draw(v, pile('Human-B7p'),  y['7.5'], x['3.3']);
  game.draw(v, pile('Human-B7s'),  y['7.5'], x['3.4']);


  game.draw(v, pile('Human-C2a'),  y['2.5'], x['4.1']);
  game.draw(v, pile('Human-C2c'),  y['2.5'], x['4.2']);
  game.draw(v, pile('Human-C2p'),  y['2.5'], x['4.3']);
  game.draw(v, pile('Human-C2s'),  y['2.5'], x['4.4']);

  game.draw(v, pile('Human-C4a'),  y['4.5'], x['4.1']);
  game.draw(v, pile('Human-C4c'),  y['4.5'], x['4.2']);
  game.draw(v, pile('Human-C4p'),  y['4.5'], x['4.3']);
  game.draw(v, pile('Human-C4s'),  y['4.5'], x['4.4']);

  game.draw(v, pile('Human-C6a'),  y['6.5'], x['4.1']);
  game.draw(v, pile('Human-C6c'),  y['6.5'], x['4.2']);
  game.draw(v, pile('Human-C6p'),  y['6.5'], x['4.3']);
  game.draw(v, pile('Human-C6s'),  y['6.5'], x['4.4']);


  for (let i = 1;i<9;i++) {
    let s = i.toString();
    game.draw(v, new Pile(s), y[s+'.0'], x['5.1']);
  }

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.lineWidth = 30;

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x['1.1']*50+285, y['2.0']*50 - 25);
  ctx.lineTo(x['1.2']*50+285, y['3.5']*50 - 25);
  ctx.lineTo(x['1.3']*50+285, y['5.5']*50 - 25);
  ctx.lineTo(x['1.3']*50+285, y['7.5']*50 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['2.1']*50+100, y['2.5']*50 - 25);
  ctx.lineTo(x['2.1']*50+100, y['4.5']*50 - 25);
  ctx.lineTo(x['2.1']*50+100, y['6.5']*50 - 25);
  ctx.lineTo(x['2.1']*50+100, y['8.5']*50 - 25);
  ctx.stroke();

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x['1.2']*50+285, y['2.0']*50 - 25);
  ctx.lineTo(x['1.4']*50+285, y['3.5']*50 - 25);
  ctx.lineTo(x['1.1']*50+285, y['5.5']*50 - 25);
  ctx.lineTo(x['1.4']*50+285, y['7.5']*50 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['2.2']*50+100, y['2.5']*50 - 25);
  ctx.lineTo(x['2.2']*50+100, y['4.5']*50 - 25);
  ctx.lineTo(x['2.2']*50+100, y['6.5']*50 - 25);
  ctx.lineTo(x['2.2']*50+100, y['8.5']*50 - 25);
  ctx.stroke();

  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(x['1.3']*50+285, y['2.0']*50 - 25);
  ctx.lineTo(x['1.1']*50+285, y['3.5']*50 - 25);
  ctx.lineTo(x['1.4']*50+285, y['5.5']*50 - 25);
  ctx.lineTo(x['1.2']*50+285, y['7.5']*50 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['2.3']*50+100, y['2.5']*50 - 25);
  ctx.lineTo(x['2.3']*50+100, y['4.5']*50 - 25);
  ctx.lineTo(x['2.3']*50+100, y['6.5']*50 - 25);
  ctx.lineTo(x['2.3']*50+100, y['8.5']*50 - 25);
  ctx.stroke();

  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(x['1.4']*50+285, y['2.0']*50 - 25);
  ctx.lineTo(x['1.3']*50+285, y['3.5']*50 - 25);
  ctx.lineTo(x['1.2']*50+285, y['5.5']*50 - 25);
  ctx.lineTo(x['1.1']*50+285, y['7.5']*50 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['2.4']*50+100, y['2.5']*50 - 25);
  ctx.lineTo(x['2.4']*50+100, y['4.5']*50 - 25);
  ctx.lineTo(x['2.4']*50+100, y['6.5']*50 - 25);
  ctx.lineTo(x['2.4']*50+100, y['8.5']*50 - 25);
  ctx.stroke();

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x['3.1']*50+125, y['3.0']*50 - 20);
  ctx.lineTo(x['3.4']*50+295, y['4.5']*50 - 20);
  ctx.lineTo(x['3.2']*50+295, y['6.5']*50 - 20);
  ctx.lineTo(x['3.2']*50+295, y['8.5']*50 - 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['4.3']*50+100, y['3.5']*50 - 20);
  ctx.lineTo(x['4.4']*50+100, y['5.5']*50 - 20);
  ctx.lineTo(x['4.3']*50+100, y['7.5']*50 - 20);
  ctx.stroke();

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x['3.2']*50+295, y['3.0']*50 - 20);
  ctx.lineTo(x['3.1']*50+295, y['4.5']*50 - 20);
  ctx.lineTo(x['3.3']*50+295, y['6.5']*50 - 20);
  ctx.lineTo(x['3.4']*50+295, y['8.5']*50 - 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['4.4']*50+100, y['3.5']*50 - 20);
  ctx.lineTo(x['4.3']*50+100, y['5.5']*50 - 20);
  ctx.lineTo(x['4.1']*50+100, y['7.5']*50 - 20);
  ctx.stroke();

  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(x['3.3']*50+295, y['3.0']*50 - 20);
  ctx.lineTo(x['3.2']*50+295, y['4.5']*50 - 20);
  ctx.lineTo(x['3.4']*50+295, y['6.5']*50 - 20);
  ctx.lineTo(x['3.1']*50+295, y['8.5']*50 - 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['4.2']*50+100, y['3.5']*50 - 20);
  ctx.lineTo(x['4.1']*50+100, y['5.5']*50 - 20);
  ctx.lineTo(x['4.4']*50+100, y['7.5']*50 - 20);
  ctx.stroke();

  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(x['3.4']*50+295, y['3.0']*50 - 20);
  ctx.lineTo(x['3.3']*50+295, y['4.5']*50 - 20);
  ctx.lineTo(x['3.1']*50+295, y['6.5']*50 - 20);
  ctx.lineTo(x['3.3']*50+295, y['8.5']*50 - 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['4.1']*50+100, y['3.5']*50 - 20);
  ctx.lineTo(x['4.2']*50+100, y['5.5']*50 - 20);
  ctx.lineTo(x['4.2']*50+100, y['7.5']*50 - 20);
  ctx.stroke();
</script>
