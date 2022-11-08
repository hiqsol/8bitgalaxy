<template>
  <slot/>
  <canvas id="myCanvas" width="5200" height="3300">
    Your browser does not support the HTML5 canvas tag.
  </canvas>
</template>

<script setup>
import "./../legacy/styles/8bitfont.css";
</script>
