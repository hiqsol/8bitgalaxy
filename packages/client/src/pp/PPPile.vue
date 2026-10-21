<script setup lang="ts">
import { ref } from 'vue';
import { type Dir, pileOffset, px } from './legacy';
import PPCard from './PPCard.vue';

// The legacy Pile of PileDrawer: folded, it unfolds on hover, except the Reserve.
const props = defineProps<{ name: string; dir: Dir; at: { x: number; y: number }; cards: string[]; picked?: boolean }>();

const folded = ref(true);
const folds = props.name !== 'Reserve';
let overTimer: ReturnType<typeof setTimeout> | undefined;
let outTimer: ReturnType<typeof setTimeout> | undefined;

function over() {
  if (!folds) return;
  clearTimeout(outTimer);
  overTimer = setTimeout(() => (folded.value = false), 300);
}
function out() {
  if (!folds) return;
  clearTimeout(overTimer);
  outTimer = setTimeout(() => (folded.value = true), 200);
}

const offset = (k: number) => {
  const d = `${pileOffset(k, props.cards.length, folded.value)}px`;
  return { left: d, top: d };
};
</script>

<template>
  <div class="Pile" :class="[dir, { Folded: folded, droppable: folds, 'pp-picked': picked }]" :style="px(at)" @mouseover="over" @mouseout="out">
    <div class="Name">
      <div class="Value">{{ name }}</div>
      <div class="Size">{{ cards.length > 6 ? cards.length : '' }}</div>
    </div>
    <PPCard v-for="(uid, k) in cards" :key="uid" :uid="uid" passive :style="offset(k)" />
  </div>
</template>
