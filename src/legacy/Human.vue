<template>

</template>

<script setup>
  import Game from "./js/Game.js";
  import Card from "./js/Model/Card.js";
  import Pile from "./js/Model/Pile.js";
  import Params from "./js/DivDrawer/Params.js";
  import Direction from "./js/DivDrawer/Direction.js";

  let game = new Game();
  let vert = new Pile(game, '');

  let v = game.draw(null, vert, new Params(1, 1, Direction.TopToBottom));

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
    const pile = new Pile(game, '');
    pile.put(Card.assert(card));
    return pile;
}

  game.draw(v, pile('Human-S1a'), new Params(x['1.1'],  y['1.0']));
  game.draw(v, pile('Human-S1c'), new Params(x['1.2'],  y['1.0']));
  game.draw(v, pile('Human-S1p'), new Params(x['1.3'],  y['1.0']));
  game.draw(v, pile('Human-S1s'), new Params(x['1.4'],  y['1.0']));

  game.draw(v, pile('Human-S3a'), new Params(x['1.1'],  y['2.5']));
  game.draw(v, pile('Human-S3c'), new Params(x['1.2'],  y['2.5']));
  game.draw(v, pile('Human-S3p'), new Params(x['1.3'],  y['2.5']));
  game.draw(v, pile('Human-S3s'), new Params(x['1.4'],  y['2.5']));

  game.draw(v, pile('Human-S5a'), new Params(x['1.1'],  y['4.5']));
  game.draw(v, pile('Human-S5c'), new Params(x['1.2'],  y['4.5']));
  game.draw(v, pile('Human-S5p'), new Params(x['1.3'],  y['4.5']));
  game.draw(v, pile('Human-S5s'), new Params(x['1.4'],  y['4.5']));

  game.draw(v, pile('Human-S6a'), new Params(x['1.1'],  y['6.0']));
  game.draw(v, pile('Human-S6c'), new Params(x['1.2'],  y['6.0']));
  game.draw(v, pile('Human-S6p'), new Params(x['1.3'],  y['6.0']));
  game.draw(v, pile('Human-S6s'), new Params(x['1.4'],  y['6.0']));

  // game.draw(v, pile('Human-S6a'), new Params(x['1.1'],  y['6.5']));
  // game.draw(v, pile('Human-S6c'), new Params(x['1.2'],  y['6.5']));
  // game.draw(v, pile('Human-S6p'), new Params(x['1.3'],  y['6.5']));
  // game.draw(v, pile('Human-S6s'), new Params(x['1.4'],  y['6.5']));


  game.draw(v, pile('Human-H1a'), new Params(x['2.1'],  y['1.0']));
  game.draw(v, pile('Human-H1p'), new Params(x['2.2'],  y['1.0']));
  game.draw(v, pile('Human-H2s'), new Params(x['2.3'],  y['2.0']));
  game.draw(v, pile('Human-H2c'), new Params(x['2.4'],  y['2.0']));

  game.draw(v, pile('Human-H3a'), new Params(x['2.1'],  y['3.0']));
  game.draw(v, pile('Human-H3c'), new Params(x['2.2'],  y['3.0']));
  game.draw(v, pile('Human-H4s'), new Params(x['2.3'],  y['4.0']));
  game.draw(v, pile('Human-H4p'), new Params(x['2.4'],  y['4.0']));

  game.draw(v, pile('Human-H5a'), new Params(x['2.1'],  y['5.0']));
  game.draw(v, pile('Human-H5p'), new Params(x['2.2'],  y['5.0']));
  game.draw(v, pile('Human-H6s'), new Params(x['2.3'],  y['6.0']));
  game.draw(v, pile('Human-H6c'), new Params(x['2.4'],  y['6.0']));

  // game.draw(v, pile('Human-H7a'), new Params(x['2.1'],  y['7.5']));
  // game.draw(v, pile('Human-H7c'), new Params(x['2.2'],  y['7.5']));
  // game.draw(v, pile('Human-H7p'), new Params(x['2.3'],  y['7.5']));
  // game.draw(v, pile('Human-H7s'), new Params(x['2.4'],  y['7.5']));


  game.draw(v, pile('Human-B2a'), new Params(x['3.1'],  y['1.5']));
  game.draw(v, pile('Human-B2c'), new Params(x['3.2'],  y['1.5']));
  game.draw(v, pile('Human-B2p'), new Params(x['3.3'],  y['1.5']));
  game.draw(v, pile('Human-B2s'), new Params(x['3.4'],  y['1.5']));

  game.draw(v, pile('Human-B4a'), new Params(x['3.1'],  y['3.5']));
  game.draw(v, pile('Human-B4c'), new Params(x['3.2'],  y['3.5']));
  game.draw(v, pile('Human-B4p'), new Params(x['3.3'],  y['3.5']));
  game.draw(v, pile('Human-B4s'), new Params(x['3.4'],  y['3.5']));

  game.draw(v, pile('Human-B6a'), new Params(x['3.1'],  y['5.5']));
  game.draw(v, pile('Human-B6c'), new Params(x['3.2'],  y['5.5']));
  game.draw(v, pile('Human-B6p'), new Params(x['3.3'],  y['5.5']));
  game.draw(v, pile('Human-B6s'), new Params(x['3.4'],  y['5.5']));

  // game.draw(v, pile('Human-B7a'), new Params(x['3.1'],  y['7.5']));
  // game.draw(v, pile('Human-B7c'), new Params(x['3.2'],  y['7.5']));
  // game.draw(v, pile('Human-B7p'), new Params(x['3.3'],  y['7.5']));
  // game.draw(v, pile('Human-B7s'), new Params(x['3.4'],  y['7.5']));


  game.draw(v, pile('Human-C2a'), new Params(x['4.1'],  y['1.5']));
  game.draw(v, pile('Human-C2c'), new Params(x['4.2'],  y['1.5']));
  game.draw(v, pile('Human-C2p'), new Params(x['4.3'],  y['1.5']));
  game.draw(v, pile('Human-C2s'), new Params(x['4.4'],  y['1.5']));

  game.draw(v, pile('Human-C4a'), new Params(x['4.1'],  y['3.5']));
  game.draw(v, pile('Human-C4c'), new Params(x['4.2'],  y['3.5']));
  game.draw(v, pile('Human-C4p'), new Params(x['4.3'],  y['3.5']));
  game.draw(v, pile('Human-C4s'), new Params(x['4.4'],  y['3.5']));

  game.draw(v, pile('Human-C6a'), new Params(x['4.1'],  y['5.5']));
  game.draw(v, pile('Human-C6c'), new Params(x['4.2'],  y['5.5']));
  game.draw(v, pile('Human-C6p'), new Params(x['4.3'],  y['5.5']));
  game.draw(v, pile('Human-C6s'), new Params(x['4.4'],  y['5.5']));


  for (let i = 1;i<7;i++) {
    let s = i.toString();
    game.draw(v, new Pile(s), new Params(x['5.1'], y[s+'.0']));
  }

/*
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.lineWidth = 30;

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x['1.1']*50+265, y['2.0']*50 - 25);
  ctx.lineTo(x['1.2']*50+265, y['3.5']*50 - 25);
  ctx.lineTo(x['1.3']*50+265, y['5.5']*50 - 25);
  ctx.lineTo(x['1.3']*50+265, y['7.5']*50 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x['2.1']*50+ 70, y['2.5']*50 - 25);
  ctx.lineTo(x['2.1']*50+ 70, y['4.5']*50 - 25);
  ctx.lineTo(x['2.1']*50+ 70, y['6.5']*50 - 25);
  ctx.lineTo(x['2.1']*50+ 70, y['8.5']*50 - 25);
  ctx.stroke();

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x['1.2']*50+265, y['2.0']*50 - 25);
  ctx.lineTo(x['1.4']*50+265, y['3.5']*50 - 25);
  ctx.lineTo(x['1.1']*50+265, y['5.5']*50 - 25);
  ctx.lineTo(x['1.4']*50+265, y['7.5']*50 - 25);
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
*/
</script>
