<script setup lang="ts">
import { type PlayerId } from '@8bitgalaxy/engine';
import { computed, ref } from 'vue';
import { game } from '../session';
import { clickPile, startAction, startTakeoff, ui } from '../ui';
import { ACTION_KINDS } from './actions';
import CardView from './CardView.vue';

const props = defineProps<{ player: PlayerId }>();

const view = computed(() => game.view!);
const home = computed(() => view.value.homes[props.player]);
const name = computed(() => view.value.players.find((p) => p.id === props.player)!.name);
const mine = computed(() => game.seat === props.player);
const showDiscard = ref(false);
const turn = computed(() => view.value.turn.player === props.player);

/** A pile click: picks it for the drafted action, or is a table move target */
function pickPile(zone: 'factory' | 'laboratory', pile: number): void {
  const d = ui.draft;
  if (ui.mode === 'manual') {
    const cards = home.value[zone][pile].cards;
    if (!ui.manualCard && cards.length) ui.manualCard = cards[cards.length - 1];
    else void clickPile({ zone, player: props.player, pile });
    return;
  }
  if (!d || !mine.value) return;
  if (zone === 'laboratory' && d.kind === 'research') {
    if (d.research && d.research.pile !== pile && ui.pick === 'target') d.research.toLab = pile;
    else d.research = { pile };
  }
  if (zone === 'factory' && d.kind === 'create') d.create!.piles.push(pile);
  if (zone === 'factory' && d.kind === 'upgrade') d.upgrade = { old: d.upgrade?.old ?? '', pile, oldTo: d.upgrade?.oldTo };
  if (d.kind === 'manage') {
    const prev = d.manage!.at(-1);
    const op = zone === 'factory' ? 'factoryShift' : 'labShift';
    if (prev && prev.op === op && prev.to === -1) prev.to = pile;
    else d.manage!.push({ op, from: pile, to: -1 });
  }
}

const pileTop = (cards: string[]) => cards[cards.length - 1];
</script>

<template>
  <div class="home panel" :class="[`p-${player}`, { turn }]">
    <div class="row head">
      <h2 :class="`p-${player}`">{{ name }}</h2>
      <span v-if="turn" class="badge">turn</span>
      <span class="energy" title="Energy tokens, open to all">⚡ {{ home.energy }}</span>
      <span class="muted">reserve {{ home.reserve.length }}</span>
      <button class="link" @click="showDiscard = !showDiscard" @dblclick.stop>discard {{ home.discard.length }}</button>
      <button v-if="ui.mode === 'manual' && ui.manualCard" @click="clickPile({ zone: 'hand', player })">→ hand</button>
      <button v-if="ui.mode === 'manual' && ui.manualCard" @click="clickPile({ zone: 'discard', player })">→ discard</button>
      <button v-if="ui.mode === 'manual' && ui.manualCard" @click="clickPile({ zone: 'reserve', player })">→ reserve</button>
    </div>
    <div class="zones">
      <section class="hand">
        <h3>Hand {{ home.hand.length }}</h3>
        <div class="cards">
          <div v-for="uid in home.hand" :key="uid" class="hand-card">
            <CardView :uid="uid" look="hand" />
            <div v-if="ui.menu === uid" class="menu panel" @click.stop>
              <button @click="startTakeoff(uid)">Take off</button>
              <button v-for="(label, kind) in ACTION_KINDS" :key="kind" @click="startAction(uid, kind)">{{ label }}</button>
            </div>
          </div>
        </div>
      </section>
      <section v-if="showDiscard" class="discard">
        <h3>Discard</h3>
        <div class="cards small">
          <CardView v-for="uid in home.discard" :key="uid" :uid="uid" look="v" />
        </div>
      </section>
      <section class="piles">
        <h3>Factory</h3>
        <div class="cards">
          <div v-for="(pile, i) in home.factory" :key="i" class="pile" @click="pickPile('factory', i)">
            <div class="pile-label">{{ pile.type }} {{ pile.cards.length }}</div>
            <CardView v-if="pile.cards.length" :uid="pileTop(pile.cards)" look="hand" passive />
            <div v-else class="empty">empty</div>
          </div>
        </div>
      </section>
      <section class="piles">
        <h3>Laboratory</h3>
        <div class="cards">
          <div v-for="(pile, i) in home.laboratory" :key="i" class="pile" @click="pickPile('laboratory', i)">
            <div class="pile-label">{{ pile.type }} {{ pile.cards.length }}</div>
            <CardView v-if="pile.cards.length" :uid="pileTop(pile.cards)" look="hand" passive />
            <div v-else class="empty">empty</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home.turn { border-color: var(--text); }
.home.p-p1 { border-left: 6px solid var(--p1); }
.home.p-p2 { border-left: 6px solid var(--p2); }
.head h2 { margin: 0; }
.badge { font-family: var(--font-title); font-size: 9px; background: var(--ok); color: #000; padding: 2px 4px; }
.energy { color: var(--P); }
.link { border: none; box-shadow: none; padding: 0; color: var(--muted); background: none; text-decoration: underline; }
.zones { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 6px; }
.cards { display: flex; gap: 5px; flex-wrap: wrap; }
.small { max-width: 420px; }
.hand-card { position: relative; }
.menu { position: absolute; bottom: 100%; left: 0; z-index: 50; display: flex; flex-direction: column; gap: 3px; padding: 6px; min-width: 110px; }
.pile { cursor: pointer; }
.pile-label { font-size: 15px; color: var(--muted); }
.empty { width: 84px; height: 118px; border: 1px dashed var(--line); display: grid; place-items: center; color: var(--muted); }
</style>
