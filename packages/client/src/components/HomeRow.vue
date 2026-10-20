<script setup lang="ts">
import { isActor, type PlayerId } from '@8bitgalaxy/engine';
import { computed, ref } from 'vue';
import { game } from '../session';
import { act, clickPile, startAction, startTakeoff, ui } from '../ui';
import { ACTION_KINDS } from './actions';
import CardView from './CardView.vue';

// A Home's row along the Field: name and Energy, Reserve, Discard and Hand, as the legacy Home piles.
const props = defineProps<{ player: PlayerId; width: number; top?: boolean }>();

const GAP = 40;

const view = computed(() => game.view!);
const home = computed(() => view.value.homes[props.player]);
const name = computed(() => view.value.players.find((p) => p.id === props.player)!.name);
const turn = computed(() => view.value.turn.player === props.player && !view.value.winner);
const showDiscard = ref(false);
const manual = computed(() => ui.mode === 'manual' && !!ui.manualCard);

const widthOf = (uid: string) => (isActor(view.value.cards[uid]) ? 250 : 350);
/** Hand cards overlap when the row is short */
const handX = computed(() => {
  const cards = home.value.hand;
  // the row width without name, Reserve and Discard
  const room = props.width - 1030;
  const total = cards.reduce((s, uid) => s + widthOf(uid) + GAP, 0);
  const squeeze = total > room && cards.length > 1 ? (room - widthOf(cards.at(-1)!)) / (total - widthOf(cards.at(-1)!) - GAP) : 1;
  let x = 0;
  return cards.map((uid) => {
    const at = x;
    x += (widthOf(uid) + GAP) * Math.min(squeeze, 1);
    return at;
  });
});

function onDiscard() {
  if (manual.value) void clickPile({ zone: 'discard', player: props.player });
  else showDiscard.value = !showDiscard.value;
}
</script>

<template>
  <div class="home-row" :class="[`p-${player}`, { top, turn }]" :style="{ width: `${width}px` }">
    <div class="who">
      <div class="name" :class="`p-${player}`">{{ name }}</div>
      <div v-if="turn" class="badge">turn</div>
      <div class="counter" title="Energy tokens">
        <b :class="{ live: ui.mode === 'manual' }" @click.stop="ui.mode === 'manual' && act({ type: 'manual', op: { op: 'energy', player, delta: -1 } })">◀</b>
        <b class="count" :class="{ nonzero: home.energy }">{{ home.energy }}</b>
        <b :class="{ live: ui.mode === 'manual' }" @click.stop="ui.mode === 'manual' && act({ type: 'manual', op: { op: 'energy', player, delta: 1 } })">▶</b>
      </div>
    </div>
    <div class="pile" data-zone="reserve" :class="{ drop: manual }" @click.stop="manual && clickPile({ zone: 'reserve', player })">
      <div class="label">Reserve {{ home.reserve.length }}</div>
      <CardView v-if="home.reserve.length" :uid="home.reserve.at(-1)!" passive />
      <div v-else class="empty">Reserve</div>
    </div>
    <div class="pile" data-zone="discard" :class="{ drop: manual }" @click.stop="onDiscard">
      <div class="label">Discard {{ home.discard.length }}</div>
      <CardView v-if="home.discard.length" :uid="home.discard.at(-1)!" passive />
      <div v-else class="empty">Discard</div>
    </div>
    <div class="hand" data-zone="hand" :class="{ drop: manual }" @click.stop="manual && clickPile({ zone: 'hand', player })">
      <div class="label">Hand {{ home.hand.length }}</div>
      <div v-if="!home.hand.length" class="empty">Hand</div>
      <div v-for="(uid, i) in home.hand" :key="uid" class="hand-card" :style="{ left: `${handX[i]}px`, zIndex: ui.menu === uid ? 30 : i }">
        <CardView :uid="uid" look="hand" />
        <div v-if="ui.menu === uid" class="hand-menu" @click.stop>
          <button @click="startTakeoff(uid)">Take off</button>
          <button v-for="(label, kind) in ACTION_KINDS" :key="kind" @click="startAction(uid, kind)">{{ label }}</button>
        </div>
      </div>
    </div>
    <div v-if="showDiscard" class="discard-list" @click.stop="showDiscard = false">
      <div class="label">Discard of {{ name }}, click to close</div>
      <div class="cards">
        <CardView v-for="uid in home.discard" :key="uid" :uid="uid" look="hand" passive />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-row { position: relative; display: flex; gap: 40px; align-items: flex-start; height: 400px; }
.label { font-family: var(--font-title); font-size: 26px; line-height: 40px; color: #888; white-space: nowrap; }
.who { width: 330px; display: flex; flex-direction: column; gap: 20px; padding-top: 40px; }
.name { font-family: var(--font-title); font-size: 44px; }
.badge { align-self: flex-start; font-family: var(--font-title); font-size: 28px; background: var(--ok); color: #000; padding: 8px 12px; }
.counter { display: flex; align-items: center; font-family: var(--font-title); font-size: 50px; color: #555; }
.counter .count { font-size: 60px; padding: 10px 10px 15px 20px; }
.counter .count.nonzero { color: #fff; }
.counter .live { cursor: pointer; color: #aaa; }
.counter .live:hover { color: #fff; }
.pile { width: 250px; }
.drop { cursor: copy; }
.drop:hover .empty, .drop:hover :deep(.card) { box-shadow: 0 0 0 8px #fff; }
.empty {
  width: 250px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0 0 9px #eee;
  display: grid;
  place-items: center;
  font-family: var(--font-title);
  font-size: 30px;
  color: #aaa;
}
.hand { position: relative; flex: 1; height: 400px; }
.hand-card { position: absolute; top: 40px; }
.hand-menu {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  min-width: 300px;
  background: rgba(0, 0, 0, 0.85);
  border: 3px solid #aaa;
  border-radius: 20px;
}
.top .hand-menu { bottom: auto; top: 100%; margin: 20px 0 0; }
.hand-menu button { font-size: 30px; padding: 12px 16px; border-width: 3px; text-align: left; }
.discard-list {
  position: absolute;
  left: 370px;
  bottom: 100%;
  z-index: 40;
  padding: 24px;
  max-width: 2000px;
  background: rgba(0, 0, 0, 0.9);
  border: 3px solid #aaa;
  border-radius: 20px;
  cursor: pointer;
}
.top .discard-list { bottom: auto; top: 100%; }
.discard-list .cards { display: flex; flex-wrap: wrap; gap: 30px; padding: 12px; }
</style>
