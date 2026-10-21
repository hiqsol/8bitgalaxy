<script setup lang="ts">
import type { PlayerId } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { game } from '../session';
import { act, clickPile, type PileZone, pickPile, pilePicked, ui } from '../ui';
import { HOMES, homeLayout, px } from './legacy';
import PPCard from './PPCard.vue';
import PPPile from './PPPile.vue';

// A Home as HomeDrawer.drawHuman draws it: Home 1 of the first player at the bottom right,
// Home 2 at the top left, Lab piles in the places of the RnD piles.
const props = defineProps<{ player: PlayerId }>();

/** the legacy Hand has 3 Slots, more show when the Hand is bigger */
const HAND_SLOTS = 3;

const view = computed(() => game.view!);
const home = computed(() => view.value.homes[props.player]);
const legacy = computed(() => HOMES[view.value.players.findIndex((p) => p.id === props.player)]);
const layout = computed(() => homeLayout(legacy.value.dir, home.value.factory.length, home.value.laboratory.length));
const slots = computed(() => Math.max(HAND_SLOTS, home.value.hand.length));
const manual = computed(() => ui.mode === 'manual' && !!ui.manualCard);

const ROWS = [
  { zone: 'factory', name: 'Factory' },
  { zone: 'laboratory', name: 'RnD' },
] as const;
/** RowDrawer draws the last pile first */
const reversed = (n: number) => Array.from({ length: n }, (_, i) => n - 1 - i);

function energy(delta: number) {
  if (ui.mode === 'manual') void act({ type: 'manual', op: { op: 'energy', player: props.player, delta } });
}

function onPile(zone: 'reserve' | 'discard' | 'hand') {
  if (manual.value) void clickPile({ zone, player: props.player });
}
const onRowPile = (zone: PileZone, i: number) => pickPile(props.player, zone, i);
</script>

<template>
  <div class="Home" :class="legacy.dir" :race="legacy.race" :style="px(legacy.at)">
    <div class="Counter" :class="layout.counter.dir" :style="px(layout.counter)" title="Energy">
      <b class="Minus" @click.stop="energy(-1)">◀</b>
      <b class="Count" :class="{ nonzero: home.energy }">{{ home.energy }}</b>
      <b class="Plus" @click.stop="energy(1)">▶</b>
    </div>
    <div class="Slots" :class="layout.hand.dir" :style="px(layout.hand)" @click.stop="onPile('hand')">
      <div class="Name"><div class="Value">Hand</div></div>
      <div v-for="i in slots" :key="i" class="Slot droppable for-Hero for-Ship" :class="layout.hand.dir" :style="px({ x: i - 1, y: i - 1 })">
        <PPCard v-if="home.hand[i - 1]" :uid="home.hand[i - 1]" />
      </div>
    </div>
    <PPPile name="Discard" :dir="layout.discard.dir" :at="layout.discard" :cards="home.discard" @click.stop="onPile('discard')" />
    <PPPile name="Reserve" :dir="layout.reserve.dir" :at="layout.reserve" :cards="home.reserve" @click.stop="onPile('reserve')" />
    <div v-for="r in ROWS" :key="r.zone" class="Row" :class="legacy.dir" :style="px(layout[r.zone].at)">
      <PPPile
        v-for="i in reversed(home[r.zone].length)"
        :key="i"
        :name="`${r.name} ${i + 1}`"
        :title="`${r.name} ${home[r.zone][i].type}`"
        :dir="layout[r.zone].piles[i].dir"
        :at="layout[r.zone].piles[i]"
        :cards="home[r.zone][i].cards"
        :picked="pilePicked(player, r.zone, i)"
        :data-zone="r.zone"
        :data-pile="i"
        @click.stop="onRowPile(r.zone, i)"
      />
    </div>
  </div>
</template>
