<script setup lang="ts">
import { computed } from 'vue';
import { cardName } from '../format';
import { game } from '../session';
import { act, ui } from '../ui';

defineProps<{ myTurn: boolean }>();

const view = computed(() => game.view!);
</script>

<template>
  <div class="panel">
    <h2>Table mode</h2>
    <p class="muted">Free moves, everyone sees them in the log. Click a card, then a Slot or a pile. Click a hidden tile to reveal it. ◀ ▶ change Energy.</p>
    <div v-if="ui.manualCard" class="row">
      <b>{{ cardName(view.cards[ui.manualCard]) }}</b>
      <button @click="act({ type: 'manual', op: { op: 'setFace', card: ui.manualCard, face: 'front' } })">enable</button>
      <button @click="act({ type: 'manual', op: { op: 'setFace', card: ui.manualCard, face: 'damaged' } })">damage</button>
      <button @click="act({ type: 'manual', op: { op: 'setFace', card: ui.manualCard, face: 'hidden' } })">hide</button>
      <button @click="act({ type: 'manual', op: { op: 'setEnd', card: ui.manualCard, end: view.cards[ui.manualCard].end === 'strong' ? 'weak' : 'strong' } })">rotate</button>
    </div>
    <div v-if="myTurn" class="row">
      <button title="Counts as a played card: for a Turn with no legal play" @click="act({ type: 'manual', op: { op: 'pass' } })">No legal play: pass</button>
    </div>
  </div>
</template>
