<script setup lang="ts">
import { cardDef, costOf, type EndName, isUnknown } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { abilitiesText, KLASS_NAMES, levelText } from '../format';
import { game } from '../session';
import { ui, where } from '../ui';

const card = computed(() => (ui.inspect ? game.view?.cards[ui.inspect] : undefined));
const def = computed(() => (card.value && !isUnknown(card.value.def) ? cardDef(card.value.def) : null));
const loc = computed(() => {
  const l = ui.inspect ? where(ui.inspect) : null;
  if (!l) return '';
  if (l.zone === 'slot') return `Star ${l.star}, ${l.row === 'units' ? 'Unit' : 'Structure'} slot ${l.index + 1}`;
  return `${l.player} ${l.zone}`;
});
const state = computed(() => {
  const c = card.value!;
  if (c.face !== 'front') return c.face;
  return `${c.end} End up`;
});
const owner = computed(() => game.view?.players.find((p) => p.id === card.value?.owner)?.name);
const ends: EndName[] = ['strong', 'weak'];
</script>

<template>
  <div v-if="card" class="panel inspector">
    <h2>{{ def ? def.id : 'Hidden card' }}</h2>
    <div class="muted">{{ owner }} · {{ loc }} · {{ state }}</div>
    <template v-if="def">
      <table>
        <tr><th></th><th>Level</th><th>Class</th><th>Primary</th><th>Secondary</th></tr>
        <tr v-for="e in ends" :key="e" :class="{ up: card.end === e && card.face === 'front' }">
          <td>{{ e }}</td>
          <td>{{ levelText(def[e]) }}</td>
          <td :class="`k-${def[e].klass}`">{{ KLASS_NAMES[def[e].klass] }}</td>
          <td>{{ abilitiesText(def[e].primary) }}</td>
          <td>{{ abilitiesText(def[e].secondary) }}</td>
        </tr>
      </table>
      <div>
        Cost {{ costOf(def) }} · Prerequisites
        {{ def.prerequisites.map((p) => `${p.level}${p.klass}`).join(', ') || 'none' }}
      </div>
      <div class="muted">(tech) in parentheses is not `core`: blank in the first duel</div>
    </template>
  </div>
</template>

<style scoped>
table { border-collapse: collapse; margin: 4px 0; }
th, td { padding: 1px 6px; text-align: left; }
th { color: var(--muted); font-weight: normal; }
tr.up td { background: rgba(255, 255, 255, 0.08); }
</style>
