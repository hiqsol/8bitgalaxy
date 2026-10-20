<script setup lang="ts">
import { endOf, type SupportUse } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { cardName } from '../format';
import { game } from '../session';
import { act, ui, where } from '../ui';

const USES: SupportUse[] = ['primary', 'secondary', 'range', 'capacity'];
const view = computed(() => game.view!);
const combat = computed(() => view.value.combat!);
const name = (p: string) => view.value.players.find((x) => x.id === p)!.name;
const myMove = computed(() => combat.value.toAct === game.seat);
const fromHand = computed(() => where(ui.combat.card)?.zone === 'hand');

const savedLevels = computed(() => ui.saved.reduce((n, uid) => n + endOf(view.value.cards[uid]).level, 0));

function entryText(e: (typeof combat.value.entries)[number]): string {
  const card = view.value.cards[e.card];
  if (e.secret && e.side !== game.seat) return 'a card face down';
  const how = e.mode === 'direct' ? 'direct' : `${e.use ?? ''}${e.secret ? ', face down' : ''}`;
  return `${cardName(card)} (${how})${e.boost ? ` +${e.boost}⚡` : ''}`;
}

async function add() {
  const c = ui.combat;
  if (await act({ type: 'combatAdd', card: c.card, end: c.end, use: c.use, boost: c.boost })) ui.combat.card = '';
}

async function save() {
  if (await act({ type: 'combatSave', cards: [...ui.saved] })) ui.saved = [];
}
</script>

<template>
  <div class="panel combat">
    <h2>Combat at {{ combat.target }}</h2>
    <div class="sides">
      <div v-for="side in [combat.attacker, combat.defender]" :key="side" class="side">
        <h3 :class="`p-${side}`">{{ side === combat.attacker ? 'attacker' : 'defender' }} {{ name(side) }}</h3>
        <div v-for="e in combat.entries.filter((x) => x.side === side)" :key="e.card">{{ entryText(e) }}</div>
      </div>
    </div>
    <template v-if="combat.phase === 'commit'">
      <p v-if="!myMove" class="muted">waiting for {{ name(combat.toAct) }} to add a card or pass</p>
      <template v-else>
        <p>Your move: add one card or pass. Click a card in your Hand (face down) or on the Field.</p>
        <div v-if="ui.combat.card" class="row">
          <b>{{ cardName(view.cards[ui.combat.card]) }}</b>
          <template v-if="fromHand">
            <select v-model="ui.combat.end"><option value="strong">strong</option><option value="weak">weak</option></select>
          </template>
          <select v-model="ui.combat.use"><option v-for="u in USES" :key="u" :value="u">{{ u }}</option></select>
          <label>⚡<input v-model.number="ui.combat.boost" type="number" min="0" /></label>
          <button class="primary" @click="add">Add</button>
        </div>
        <div class="row">
          <button @click="act({ type: 'combatPass' })">Pass</button>
          <button @click="act({ type: 'combatRetreat' })">Retreat</button>
        </div>
      </template>
    </template>
    <template v-else>
      <p>
        attack {{ combat.result!.attack }} · defense {{ combat.result!.defense }} ·
        <b :class="`p-${combat.result!.winner}`">{{ name(combat.result!.winner) }}</b> wins by {{ combat.result!.advantage }}
      </p>
      <p v-if="!myMove" class="muted">waiting for {{ name(combat.toAct) }} to save cards</p>
      <template v-else>
        <p>Save your direct participants from damage: click them, total Level up to {{ combat.result!.advantage }}.</p>
        <div class="row">
          <span>saved Levels {{ savedLevels }}</span>
          <button class="primary" @click="save">Save {{ ui.saved.length ? '' : 'none' }}</button>
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.combat { border-color: var(--M); }
.sides { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
p { margin: 6px 0; }
</style>
