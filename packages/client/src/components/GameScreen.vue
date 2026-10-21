<script setup lang="ts">
import { culturePoints, restorable } from '@8bitgalaxy/engine';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { cardName } from '../format';
import { downloadLocal, game, leave } from '../session';
import { act, reset, startManual, ui } from '../ui';
import ActionPanel from './ActionPanel.vue';
import CombatPanel from './CombatPanel.vue';
import FieldView from './FieldView.vue';
import HomeRow from './HomeRow.vue';
import Inspector from './Inspector.vue';
import LogPanel from './LogPanel.vue';
import PilesView from './PilesView.vue';
import TablePanel from './TablePanel.vue';
import TakeoffPanel from './TakeoffPanel.vue';

// The legacy board: the Field in the middle, the rival's Lab and Factory on the left, yours on
// the right, Homes along the top and bottom. Board pixels, zoomed to fit the window.
const PILES_W = 740;
const FIELD_X = PILES_W + 40;
const FIELD_Y = 400;
const FIELD_W = 2405;
const FIELD_H = 2315;
const ROW_H = 400;
const BOARD_W = FIELD_X + FIELD_W + 40 + PILES_W;
const BOARD_H = FIELD_Y + FIELD_H + ROW_H - 60;
/** screen pixels kept for the side panels */
const SIDE_W = 360;

const view = computed(() => game.view!);
const me = computed(() => game.seat!);
const rival = computed(() => view.value.players.find((p) => p.id !== me.value)!.id);
const name = (p: string) => view.value.players.find((x) => x.id === p)!.name;
const myTurn = computed(() => view.value.turn.player === me.value && !view.value.combat && !view.value.winner);
const restore = ref('');
const restoreOptions = computed(() => (myTurn.value ? restorable(view.value, me.value) : []));

const zoom = ref(0.3);
function fit() {
  zoom.value = Math.max(0.18, Math.min((innerWidth - SIDE_W - 16) / BOARD_W, (innerHeight - 8) / BOARD_H, 1));
}
onMounted(() => {
  fit();
  addEventListener('resize', fit);
});
onBeforeUnmount(() => removeEventListener('resize', fit));

async function endTurn() {
  if (await act({ type: 'endTurn', restore: restore.value || undefined })) {
    restore.value = '';
    reset();
  }
}

function concede() {
  if (confirm('Concede the game?')) void act({ type: 'concede' });
}

const shareLink = computed(() => `${location.origin}${location.pathname}?room=${game.roomId}`);
</script>

<template>
  <div class="screen" @click="ui.menu = null">
    <div class="board-wrap" :style="{ width: `${BOARD_W * zoom}px`, height: `${BOARD_H * zoom}px` }">
      <div class="board" :style="{ width: `${BOARD_W}px`, height: `${BOARD_H}px`, zoom }">
        <PilesView :player="rival" class="at" :style="{ left: '0px', top: '0px' }" />
        <HomeRow :player="rival" top class="at" :width="FIELD_W + 40 + PILES_W" :style="{ left: `${FIELD_X}px`, top: '0px' }" />
        <FieldView class="at" :style="{ left: `${FIELD_X}px`, top: `${FIELD_Y}px` }" />
        <HomeRow :player="me" class="at" :width="FIELD_W" :style="{ left: `${FIELD_X}px`, top: `${FIELD_Y + FIELD_H - 60}px` }" />
        <PilesView :player="me" mirror class="at" :style="{ right: '0px', bottom: '0px' }" />
      </div>
    </div>

    <nav class="controls">
      <div class="turn">
        Turn {{ view.turn.number }}<br />
        <b :class="`p-${view.turn.player}`">{{ name(view.turn.player) }}</b>
      </div>
      <div v-if="game.kind === 'local'" class="seat">you see as <b :class="`p-${me}`">{{ name(me) }}</b></div>
      <div v-if="view.twilight" class="error">Twilight: last turns</div>
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
      <button v-if="game.kind === 'local'" @click="downloadLocal">Export</button>
      <button :disabled="!!view.winner" @click="concede">Concede</button>
      <button @click="leave">Leave</button>
      <div v-if="game.kind === 'online' && game.roomId" class="share">
        room {{ game.roomId }}<br /><a :href="shareLink">invite link</a>
        <div v-if="game.status" class="error">{{ game.status }}</div>
      </div>
    </nav>

    <aside class="side">
      <div v-if="game.error" class="panel error-bar error" @click="game.error = ''">{{ game.error }}</div>
      <CombatPanel v-if="view.combat" />
      <ActionPanel v-else-if="ui.mode === 'action' && ui.draft" />
      <TakeoffPanel v-else-if="ui.mode === 'takeoff'" />
      <TablePanel v-else-if="ui.mode === 'manual'" :my-turn="myTurn" />
      <div v-else-if="myTurn" class="panel muted">
        Your turn: click a card in your Hand to take it off or start an action. Play at least one card, then end the turn.
      </div>
      <LogPanel />
      <Inspector class="inspector" />
    </aside>

    <div v-if="view.winner" class="panel winner" @click.stop>
      <h1>
        {{ view.winner.players.map(name).join(' and ') }} {{ view.winner.players.length > 1 ? 'draw' : 'wins' }} by
        {{ view.winner.path }}
      </h1>
      <div>Culture points: <span v-for="p in view.players" :key="p.id">{{ p.name }} {{ culturePoints(view, p.id) }} </span></div>
    </div>
  </div>
</template>

<style scoped>
.screen { min-height: 100vh; padding: 4px; padding-right: 360px; }
.board-wrap { margin: 0 auto; }
.board { position: relative; }
.at { position: absolute; }

.controls {
  position: fixed;
  left: 12px;
  bottom: 12px;
  z-index: 50;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.controls .turn, .controls .seat, .controls .share { font-family: var(--font-title); font-size: 9px; line-height: 1.5; color: #aaa; text-shadow: 0 0 3px #000; }
.controls .turn b { font-size: 11px; }
.controls .share a { color: var(--p1); }
.controls select { font-size: 15px; }

.side {
  position: fixed;
  top: 8px;
  right: 8px;
  bottom: 8px;
  width: 340px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}
.side .inspector { margin-top: auto; }
.error-bar { cursor: pointer; }
.winner {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 60;
  text-align: center;
  border-color: var(--ok);
}
</style>
