<script setup lang="ts">
import { isActorType, type PlayerId } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { game } from '../session';
import { type PileZone, pickPile as pick, pilePicked } from '../ui';
import CardView from './CardView.vue';

// Factory and Laboratory of a Home: a column each, a row per card type, cards fanned down
// so the top card is whole, as the legacy RnD and Factory columns.
const props = defineProps<{ player: PlayerId; mirror?: boolean }>();

const FAN = 70;
const SHOWN = 4;

const view = computed(() => game.view!);
const home = computed(() => view.value.homes[props.player]);
const zones = computed(() => (props.mirror ? (['factory', 'laboratory'] as const) : (['laboratory', 'factory'] as const)));

const pickPile = (zone: PileZone, pile: number) => pick(props.player, zone, pile);
const shown = (cards: string[]) => cards.slice(-SHOWN);
const picked = (zone: PileZone, i: number) => pilePicked(props.player, zone, i);
</script>

<template>
  <div class="piles" :class="{ mirror }">
    <div v-for="zone in zones" :key="zone" class="zone">
      <div class="zone-name">{{ zone === 'factory' ? 'Factory' : 'Lab' }}</div>
      <div
        v-for="(pile, i) in home[zone]"
        :key="i"
        class="pile"
        :class="[isActorType(pile.type) ? 'unit' : 'structure', { picked: picked(zone, i) }]"
        :data-zone="zone"
        :data-pile="i"
        :style="{ height: `${(isActorType(pile.type) ? 350 : 250) + (Math.max(shown(pile.cards).length, 1) - 1) * FAN + 44}px` }"
        @click.stop="pickPile(zone, i)"
      >
        <div class="label">{{ pile.type }} {{ pile.cards.length }}<span v-if="pile.cards.length > SHOWN">, top {{ SHOWN }}</span></div>
        <div v-if="!pile.cards.length" class="empty">{{ pile.type }}</div>
        <div v-for="(uid, k) in shown(pile.cards)" :key="uid" class="fan" :style="{ top: `${44 + k * FAN}px` }">
          <CardView :uid="uid" look="hand" passive />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.piles { display: flex; gap: 40px; }
.zone { width: 350px; display: flex; flex-direction: column; gap: 24px; }
.zone-name { font-family: var(--font-title); font-size: 34px; color: #aaa; text-align: center; }
.pile { position: relative; cursor: pointer; }
.pile.picked { outline: 10px solid var(--warn); outline-offset: 12px; border-radius: 20px; }
.label { font-family: var(--font-title); font-size: 26px; line-height: 40px; color: #888; }
.fan { position: absolute; left: 0; }
.unit .fan { left: 50px; }
.empty {
  width: 250px;
  height: 350px;
  margin-left: 50px;
  border-radius: 20px;
  box-shadow: 0 0 9px #eee;
  display: grid;
  place-items: center;
  font-family: var(--font-title);
  font-size: 30px;
  color: #aaa;
}
.structure .empty { width: 350px; height: 250px; margin-left: 0; }
</style>
