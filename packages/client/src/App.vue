<script setup lang="ts">
import Cover from './components/Cover.vue';
import GameScreen from './components/GameScreen.vue';
import Lobby from './components/Lobby.vue';
import { PP } from './look';
import PPScreen from './pp/PPScreen.vue';
import { game } from './session';
</script>

<template>
  <template v-if="PP">
    <PPScreen v-if="game.view" />
    <div v-else class="pp-ui"><Lobby /></div>
    <div class="pp-ui"><Cover /></div>
  </template>
  <template v-else>
    <GameScreen v-if="game.view" />
    <Lobby v-else />
    <Cover />
  </template>
</template>
