<script setup lang="ts">
import { cardDef, type EndName, isUnknown } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { abilitiesText, levelText } from '../format';
import { game } from '../session';
import { clickCard, ui } from '../ui';

const props = withDefaults(
  defineProps<{
    uid: string;
    /** v: Unit in a Slot, h: Structure in a Slot, hand: full card with both Ends */
    look?: 'v' | 'h' | 'hand';
    overlapped?: boolean;
    /** a pile top: clicks go to the pile */
    passive?: boolean;
  }>(),
  { look: 'hand', overlapped: false, passive: false },
);

const card = computed(() => game.view?.cards[props.uid]);
const def = computed(() => (card.value && !isUnknown(card.value.def) ? cardDef(card.value.def) : null));
const back = computed(() => !def.value || card.value!.face !== 'front');

function endOf(end: EndName) {
  return def.value![end];
}

const marks = computed(() => {
  const m: string[] = [];
  const d = ui.draft;
  if (d) {
    if (d.starter === props.uid) m.push('starter');
    if (d.participants.some((p) => p.card === props.uid)) m.push('participant');
    if (d.cargo?.includes(props.uid)) m.push('cargo');
    const t = d.target;
    if ((t?.kind === 'card' && t.card === props.uid) || d.recover?.card === props.uid || d.upgrade?.old === props.uid) m.push('target');
    if (d.manage?.some((o) => 'card' in o && o.card === props.uid) || ui.shiftCard === props.uid) m.push('target');
  }
  if (ui.mode === 'takeoff' && ui.takeoff.card === props.uid) m.push('starter');
  if (ui.manualCard === props.uid) m.push('manual');
  if (ui.menu === props.uid) m.push('menu');
  if (ui.combat.card === props.uid) m.push('participant');
  if (ui.saved.includes(props.uid)) m.push('saved');
  if (game.view?.combat?.entries.some((e) => e.card === props.uid)) m.push('fighting');
  return m;
});

function onClick(e: MouseEvent) {
  if (props.passive) return;
  e.stopPropagation();
  clickCard(props.uid);
}

const title = computed(() => {
  const c = card.value;
  if (!c) return '';
  if (!def.value) return `${c.owner}: hidden`;
  return `${c.def} (${c.face === 'front' ? c.end : c.face})`;
});
</script>

<template>
  <div
    v-if="card"
    class="card"
    :data-uid="uid"
    :data-def="def?.id"
    :class="[
      `look-${look}`,
      `owner-${card.owner}`,
      back ? `back face-${card.face}` : `k-bg-${endOf(look === 'hand' ? 'strong' : card.end).klass}`,
      { weak: !back && look !== 'hand' && card.end === 'weak', overlapped },
      marks,
    ]"
    :title="title"
    @click="onClick"
    @mouseenter="ui.inspect = uid"
  >
    <template v-if="back">
      <div class="back-mark">{{ card.face === 'damaged' ? '✕' : '?' }}</div>
      <div v-if="def" class="back-name">{{ def.id }}</div>
    </template>
    <template v-else-if="look === 'hand'">
      <div v-for="end in ['strong', 'weak'] as const" :key="end" class="end" :class="[`end-${end}`, `k-bg-${endOf(end).klass}`]">
        <div class="head">
          <span class="lvl">{{ levelText(endOf(end)) }}</span>
          <span class="kl">{{ endOf(end).klass }}</span>
          <span class="pri">{{ abilitiesText(endOf(end).primary, true) }}</span>
        </div>
        <div class="sec">{{ endOf(end).secondary.length ? abilitiesText(endOf(end).secondary, true) : '' }}</div>
      </div>
      <div class="type">{{ def!.id }}</div>
    </template>
    <template v-else>
      <div class="head">
        <span class="lvl">{{ levelText(endOf(card.end)) }}</span>
        <span class="kl">{{ endOf(card.end).klass }}</span>
      </div>
      <div class="pri">{{ abilitiesText(endOf(card.end).primary, true) }}</div>
      <div class="sec">{{ endOf(card.end).secondary.length ? abilitiesText(endOf(card.end).secondary, true) : '' }}</div>
      <div class="type">{{ def!.type[0] }}</div>
    </template>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border: 2px solid var(--line);
  background: #1b1f30;
  color: #111;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  box-shadow: 2px 2px 0 #000;
  font-size: 15px;
  line-height: 0.95;
}
.card:hover { outline: 2px solid #fff; z-index: 20 !important; }
.owner-p1 { border-color: var(--p1); }
.owner-p2 { border-color: var(--p2); }

.look-v { width: 46px; height: 64px; }
.look-h { width: 64px; height: 46px; }
.look-hand { width: 84px; height: 118px; display: flex; flex-direction: column; }

.k-bg-M { background: color-mix(in srgb, var(--M) 75%, #fff); }
.k-bg-C { background: color-mix(in srgb, var(--C) 75%, #fff); }
.k-bg-P { background: color-mix(in srgb, var(--P) 80%, #fff); }
.k-bg-S { background: color-mix(in srgb, var(--S) 75%, #fff); }
.weak { filter: saturate(0.35) brightness(0.8); }

.head { display: flex; gap: 3px; padding: 1px 2px; background: rgba(0, 0, 0, 0.18); }
.lvl { font-weight: bold; }
.kl { opacity: 0.7; }
.pri, .sec { padding: 0 2px; white-space: nowrap; }
.sec { opacity: 0.85; }
.overlapped .sec { text-decoration: line-through; opacity: 0.4; }
.type {
  position: absolute;
  right: 2px;
  bottom: 0;
  font-family: var(--font-title);
  font-size: 9px;
  opacity: 0.45;
}
.look-hand .type { position: static; text-align: center; padding: 1px; font-family: var(--font); font-size: 15px; opacity: 0.8; background: rgba(0, 0, 0, 0.15); }
.look-hand .end { flex: 1; display: flex; flex-direction: column; }
.look-hand .end .head .pri { margin-left: auto; }
.end-weak { transform: rotate(180deg); border-top: 1px dashed rgba(0, 0, 0, 0.3); }

.back {
  color: var(--text);
  background: repeating-linear-gradient(45deg, var(--hidden) 0 5px, #1d2133 5px 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.face-damaged { background: repeating-linear-gradient(-45deg, #4a1d22 0 5px, #2a1216 5px 10px); }
.back-mark { font-family: var(--font-title); font-size: 14px; }
.face-damaged .back-mark { color: var(--M); }
.back-name { font-size: 13px; text-align: center; opacity: 0.8; padding: 0 2px; }

.starter { outline: 3px solid #fff; outline-offset: -1px; }
.participant { box-shadow: 0 0 0 3px var(--ok); }
.cargo { box-shadow: 0 0 0 3px var(--P); }
.target { box-shadow: 0 0 0 3px var(--warn); }
.manual, .menu { outline: 3px dashed #fff; }
.saved { box-shadow: 0 0 0 3px var(--S); }
.fighting::after {
  content: '⚔';
  position: absolute;
  top: 0;
  right: 1px;
  color: #000;
  font-size: 14px;
}
</style>
