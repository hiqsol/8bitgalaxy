<script setup lang="ts">
import { cardDef, costOf, isUnknown } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { abilitiesText, KLASS_NAMES } from '../format';
import { game } from '../session';
import { ui, where } from '../ui';
import CardView from './CardView.vue';

// The hovered card, large, as the legacy Show box.
const card = computed(() => (ui.inspect ? game.view?.cards[ui.inspect] : undefined));
const def = computed(() => (card.value && !isUnknown(card.value.def) ? cardDef(card.value.def) : null));
const loc = computed(() => {
  const l = ui.inspect ? where(ui.inspect) : null;
  if (!l) return '';
  if (l.zone === 'slot') return `Star ${l.star} ${l.row === 'units' ? 'Unit' : 'Structure'} ${l.index + 1}`;
  return l.zone;
});
const state = computed(() => (card.value!.face !== 'front' ? card.value!.face : `${card.value!.end} up`));
const owner = computed(() => game.view?.players.find((p) => p.id === card.value?.owner)?.name);
</script>

<template>
  <div v-if="card && ui.inspect" class="show">
    <div class="preview"><CardView :uid="ui.inspect" look="hand" passive /></div>
    <div class="text">
      <div><b>{{ def ? def.id : 'hidden' }}</b></div>
      <div class="muted">{{ owner }} · {{ loc }} · {{ state }}</div>
      <template v-if="def">
        <div v-for="e in ['strong', 'weak'] as const" :key="e">
          <span :class="`k-${def[e].klass}`">{{ e }} {{ def[e].level }}{{ KLASS_NAMES[def[e].klass][0] }}</span>:
          {{ abilitiesText(def[e].primary) }} / {{ abilitiesText(def[e].secondary) }}
        </div>
        <div class="muted">cost {{ costOf(def) }}<template v-if="def.prerequisites.length">, needs {{ def.prerequisites.map((p) => `${p.level}${p.klass}`).join(' ') }}</template><template v-if="def.culturePoints">, {{ def.culturePoints }} CP</template></div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.show { display: flex; gap: 8px; align-items: flex-start; }
.preview { zoom: 0.5; flex-shrink: 0; padding: 10px; }
.text { font-size: 16px; line-height: 1.05; color: #aaa; text-shadow: 0 0 3px #000, 0 0 3px #000; }
</style>
