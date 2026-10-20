<script setup lang="ts">
import { culturePoints, restorable } from '@8bitgalaxy/engine';
import { computed, ref } from 'vue';
import { cardName } from '../format';
import { exportLocal, game, leave } from '../session';
import { act, reset, startManual, ui } from '../ui';
import ActionPanel from './ActionPanel.vue';
import CombatPanel from './CombatPanel.vue';
import FieldView from './FieldView.vue';
import HomePanel from './HomePanel.vue';
import Inspector from './Inspector.vue';
import LogPanel from './LogPanel.vue';

const view = computed(() => game.view!);
const me = computed(() => game.seat!);
const rival = computed(() => view.value.players.find((p) => p.id !== me.value)!.id);
const name = (p: string) => view.value.players.find((x) => x.id === p)!.name;
const myTurn = computed(() => view.value.turn.player === me.value && !view.value.combat && !view.value.winner);
const restore = ref('');
const restoreOptions = computed(() => (myTurn.value ? restorable(view.value, me.value) : []));

async function endTurn() {
  if (await act({ type: 'endTurn', restore: restore.value || undefined })) {
    restore.value = '';
    reset();
  }
}

function download() {
  const blob = new Blob([exportLocal()], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `8bitgalaxy-turn${view.value.turn.number}.json`;
  a.click();
}

function concede() {
  if (confirm('Concede the game?')) void act({ type: 'concede' });
}

const shareLink = computed(() => `${location.origin}${location.pathname}?room=${game.roomId}`);
</script>

<template>
  <div class="screen" @click="ui.menu = null">
    <header class="panel bar">
      <span class="title">8-bit Galaxy</span>
      <span>Turn {{ view.turn.number }}: <b :class="`p-${view.turn.player}`">{{ name(view.turn.player) }}</b></span>
      <span v-if="game.kind === 'local'" class="muted">you see as <b :class="`p-${me}`">{{ name(me) }}</b></span>
      <span v-if="view.twilight" class="error">Twilight: last turns</span>
      <span class="spacer" />
      <template v-if="myTurn">
        <select v-if="restoreOptions.length" v-model="restore" title="Structure to restore at the end of Turn">
          <option value="">restore: best</option>
          <option v-for="uid in restoreOptions" :key="uid" :value="uid">restore {{ cardName(view.cards[uid]) }}</option>
        </select>
        <button class="primary" @click="endTurn">End turn</button>
      </template>
      <button :disabled="!view.undoable" @click="act({ type: 'undo' })">Undo</button>
      <button :class="{ on: ui.mode === 'manual' }" title="Free table moves for what the engine doesn't handle, logged" @click="ui.mode === 'manual' ? reset() : startManual()">
        Table
      </button>
      <button v-if="game.kind === 'local'" @click="download">Export</button>
      <button :disabled="!!view.winner" @click="concede">Concede</button>
      <button @click="leave">Leave</button>
    </header>

    <div v-if="game.kind === 'online' && game.roomId" class="share muted">
      room <b>{{ game.roomId }}</b> · invite: <a :href="shareLink">{{ shareLink }}</a>
      <span v-if="game.status" class="error"> · {{ game.status }}</span>
    </div>
    <div v-if="game.error" class="panel error-bar error" @click="game.error = ''">{{ game.error }}</div>
    <div v-if="view.winner" class="panel winner">
      <h1>
        {{ view.winner.players.map(name).join(' and ') }} {{ view.winner.players.length > 1 ? 'draw' : 'wins' }} by
        {{ view.winner.path }}
      </h1>
      <div>Culture points: <span v-for="p in view.players" :key="p.id">{{ p.name }} {{ culturePoints(view, p.id) }} </span></div>
    </div>

    <HomePanel :player="rival" class="rival" />
    <div class="middle">
      <div class="board">
        <FieldView />
      </div>
      <aside class="side">
        <CombatPanel v-if="view.combat" />
        <ActionPanel v-else-if="ui.mode === 'action' && ui.draft" />
        <div v-else-if="ui.mode === 'takeoff'" class="panel">
          <h2>Take off</h2>
          <p>Click a free Unit slot in a Star you control.</p>
          <div class="row">
            <select v-model="ui.takeoff.end"><option value="strong">strong End</option><option value="weak">weak End</option></select>
            <label><input v-model="ui.takeoff.hidden" type="checkbox" /> hidden (Stealth)</label>
            <button @click="reset">Cancel</button>
          </div>
        </div>
        <div v-else-if="ui.mode === 'manual'" class="panel">
          <h2>Table mode</h2>
          <p class="muted">Free moves, everyone sees them in the log. Click a card, then a Slot or a pile. Click a hidden tile to reveal it.</p>
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
          <div class="row">
            Energy
            <button @click="act({ type: 'manual', op: { op: 'energy', player: me, delta: 1 } })">+1</button>
            <button @click="act({ type: 'manual', op: { op: 'energy', player: me, delta: -1 } })">-1</button>
          </div>
        </div>
        <div v-else-if="myTurn" class="panel muted">
          Your turn: click a card in your Hand to take it off or start an action. Play at least one card, then end the turn.
        </div>
        <Inspector />
        <LogPanel />
      </aside>
    </div>
    <HomePanel :player="me" class="mine" />
  </div>
</template>

<style scoped>
.screen { display: flex; flex-direction: column; gap: 8px; padding: 8px; min-height: 100vh; }
.bar { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; padding: 6px 10px; }
.bar .title { font-size: 12px; }
.spacer { flex: 1; }
.share a { color: var(--p1); }
.error-bar { cursor: pointer; }
.winner { text-align: center; border-color: var(--ok); }
.middle { display: flex; gap: 8px; align-items: flex-start; }
.board { flex: 1; overflow: auto; min-width: 0; }
.side { width: 380px; flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; }
@media (max-width: 1100px) {
  .middle { flex-direction: column; }
  .side { width: 100%; }
}
</style>
