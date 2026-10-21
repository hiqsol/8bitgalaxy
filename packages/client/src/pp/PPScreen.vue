<script setup lang="ts">
import { culturePoints, isUnknown, restorable } from '@8bitgalaxy/engine';
import { computed, ref } from 'vue';
import ActionPanel from '../components/ActionPanel.vue';
import { ACTION_KINDS } from '../components/actions';
import CombatPanel from '../components/CombatPanel.vue';
import LogPanel from '../components/LogPanel.vue';
import TablePanel from '../components/TablePanel.vue';
import TakeoffPanel from '../components/TakeoffPanel.vue';
import { cardName } from '../format';
import { downloadLocal, game, importLocal, leave } from '../session';
import { act, reset, startAction, startManual, startTakeoff, ui } from '../ui';
import PPCard from './PPCard.vue';
import PPField from './PPField.vue';
import PPHome from './PPHome.vue';

// The legacy page as Game, Board and Scoreboard drawers make it, with the legacy canvas that
// sets the page size and so the background scale. Panels are overlays, empty at rest.
const view = computed(() => game.view!);
const me = computed(() => game.seat!);
const name = (p: string) => view.value.players.find((x) => x.id === p)!.name;
const myTurn = computed(() => view.value.turn.player === me.value && !view.value.combat && !view.value.winner);
const local = computed(() => game.kind === 'local');
const restore = ref('');
const restoreOptions = computed(() => (myTurn.value ? restorable(view.value, me.value) : []));
const showLog = ref(false);
const shown = computed(() => {
  const c = ui.inspect ? view.value.cards[ui.inspect] : undefined;
  return c && !isUnknown(c.def) ? ui.inspect : null;
});

async function endTurn() {
  if (!myTurn.value) return;
  if (await act({ type: 'endTurn', restore: restore.value || undefined })) {
    restore.value = '';
    reset();
  }
}

async function importFile(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) importLocal(await file.text());
}

function concede() {
  if (confirm('Concede the game?')) void act({ type: 'concede' });
}

const shareLink = computed(() => `${location.origin}${location.pathname}?room=${game.roomId}`);
</script>

<template>
  <div class="pp" @click="ui.menu = null">
    <canvas id="myCanvas" width="4100" height="3300" />
    <div id="Game" class="Game">
      <div id="Board" class="Board">
        <PPField />
        <PPHome v-for="p in view.players" :key="p.id" :player="p.id" />
      </div>
      <div class="Scoreboard">
        <label :class="{ 'pp-off': !local }" @click="local && downloadLocal()">Export</label>
        <form id="ImportForm">
          <label :class="{ 'pp-off': !local }">Import<input v-if="local" name="files[]" type="file" accept=".json" @change="importFile" /></label>
        </form>
        <label :class="{ 'pp-off': !view.undoable }" @click="view.undoable && act({ type: 'undo' })">Undo</label>
        <div id="Show" @click="ui.inspect = null">
          <PPCard v-if="shown" :uid="shown" show :style="{ left: '0px', bottom: '0px' }" />
        </div>
        <label :class="{ 'pp-off': !myTurn }" title="Play at least one card, then end the turn" @click="endTurn">End turn</label>
        <select v-if="restoreOptions.length" v-model="restore" class="pp-restore" title="Structure to restore at the end of Turn">
          <option value="">restore: best</option>
          <option v-for="uid in restoreOptions" :key="uid" :value="uid">{{ cardName(view.cards[uid]) }}</option>
        </select>
        <label :class="{ 'pp-on': ui.mode === 'manual' }" title="Free table moves for what the engine doesn't handle, logged" @click="ui.mode === 'manual' ? reset() : startManual()">Table</label>
        <label :class="{ 'pp-on': showLog }" @click="showLog = !showLog">Log</label>
        <label :class="{ 'pp-off': !!view.winner }" @click="!view.winner && concede()">Concede</label>
        <label @click="leave">Leave</label>
        <div class="pp-status">
          Turn {{ view.turn.number }} <span :class="view.turn.player === view.players[0].id ? 'pp-human' : 'pp-martian'">{{ name(view.turn.player) }}</span>
          <template v-if="local"><br />you see as {{ name(me) }}</template>
          <template v-if="view.twilight"><br />Twilight</template>
          <template v-if="game.kind === 'online' && game.roomId">
            <br />room {{ game.roomId }} <a :href="shareLink">invite</a>
            <template v-if="game.status"><br />{{ game.status }}</template>
          </template>
        </div>
      </div>
    </div>

    <aside class="pp-ui pp-side" @click.stop>
      <div v-if="game.error" class="panel error" @click="game.error = ''">{{ game.error }}</div>
      <CombatPanel v-if="view.combat" />
      <ActionPanel v-else-if="ui.mode === 'action' && ui.draft" />
      <TakeoffPanel v-else-if="ui.mode === 'takeoff'" />
      <TablePanel v-else-if="ui.mode === 'manual'" :my-turn="myTurn" />
      <div v-else-if="ui.menu" class="panel">
        <h2>{{ cardName(view.cards[ui.menu]) }}</h2>
        <div class="row">
          <button @click="startTakeoff(ui.menu)">Take off</button>
          <button v-for="(label, kind) in ACTION_KINDS" :key="kind" @click="startAction(ui.menu, kind)">{{ label }}</button>
        </div>
      </div>
      <LogPanel v-if="showLog" />
    </aside>

    <div v-if="view.winner" class="pp-ui panel pp-winner" @click.stop>
      <h1>
        {{ view.winner.players.map(name).join(' and ') }} {{ view.winner.players.length > 1 ? 'draw' : 'wins' }} by
        {{ view.winner.path }}
      </h1>
      <div>Culture points: <span v-for="p in view.players" :key="p.id">{{ p.name }} {{ culturePoints(view, p.id) }} </span></div>
    </div>
  </div>
</template>
