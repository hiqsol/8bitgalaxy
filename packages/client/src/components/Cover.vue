<script setup lang="ts">
import { computed } from 'vue';
import { game } from '../session';

const name = computed(() => game.view?.players.find((p) => p.id === game.seat)?.name);
const why = computed(() => (game.view?.combat ? 'to answer in Combat' : 'for the turn'));
</script>

<template>
  <div v-if="game.cover" class="cover" @click="game.cover = false">
    <div class="panel">
      <h1 :class="`p-${game.seat}`">{{ name }}</h1>
      <p>Pass the screen to {{ name }} {{ why }}.</p>
      <button class="primary">I am {{ name }}</button>
    </div>
  </div>
</template>

<style scoped>
.cover { position: fixed; inset: 0; z-index: 1000; background: var(--bg) url('/images/space1.jpg') center / cover; display: grid; place-items: center; }
.panel { text-align: center; padding: 30px 50px; }
</style>
