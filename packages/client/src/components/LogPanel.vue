<script setup lang="ts">
import { computed } from 'vue';
import { game } from '../session';

const view = computed(() => game.view!);
const entries = computed(() => view.value.log.slice(-60).reverse());
const name = (p: string) => view.value.players.find((x) => x.id === p)?.name ?? p;
</script>

<template>
  <div class="panel log">
    <h2>Log</h2>
    <div v-for="(e, i) in entries" :key="view.log.length - i" class="entry">
      <span class="muted">{{ e.turn }}</span>
      <span :class="`p-${e.player}`">{{ name(e.player) }}</span>
      {{ e.text }}
    </div>
  </div>
</template>

<style scoped>
.log { max-height: 260px; overflow-y: auto; }
.entry { display: flex; gap: 6px; }
</style>
