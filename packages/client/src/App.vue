<script setup lang="ts">
import Cover from './components/Cover.vue';
import GameScreen from './components/GameScreen.vue';
import Lobby from './components/Lobby.vue';
import { game } from './session';
</script>

<template>
  <GameScreen v-if="game.view" />
  <Lobby v-else />
  <Cover />
</template>
