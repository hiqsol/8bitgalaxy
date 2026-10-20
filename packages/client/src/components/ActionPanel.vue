<script setup lang="ts">
import { distance, KLASSES, prepareAction, type SupportUse, validate } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { cardName } from '../format';
import { game } from '../session';
import { isRemote, reset, submitAction, ui, where } from '../ui';
import { ACTION_HINTS, ACTION_KINDS } from './actions';

const USES: SupportUse[] = ['primary', 'secondary', 'range', 'capacity'];

const view = computed(() => game.view!);
const d = computed(() => ui.draft!);
const name = (uid: string) => cardName(view.value.cards[uid]);
const plain = () => JSON.parse(JSON.stringify(d.value));

const preview = computed(() => {
  try {
    const pool = prepareAction(view.value, game.seat!, plain());
    return {
      pool,
      groups: pool.groups.map((g) => ({ ...g, distance: distance(view.value, g.star, d.value.destination) })),
    };
  } catch {
    return null;
  }
});

const error = computed(() => validate(view.value, game.seat!, { type: 'action', action: plain() }));

const handStars = computed(() => [d.value.source, ...Object.keys(view.value.stars).filter((s) => s !== d.value.source)]);

function locText(uid: string): string {
  const loc = where(uid);
  if (!loc) return '';
  return loc.zone === 'slot' ? `at ${loc.star}` : `in ${loc.zone}`;
}

function removeParticipant(i: number) {
  d.value.participants.splice(i, 1);
}

const fmtD = (n: number) => (n === Infinity ? '∞' : n);
</script>

<template>
  <div class="panel action-panel">
    <h2>{{ ACTION_KINDS[d.kind] }}</h2>
    <p class="hint muted">{{ ACTION_HINTS[d.kind] }}</p>

    <div class="field-row">
      <span>starter</span>
      <b>{{ name(d.starter) }}</b>
      <select v-model="d.starterEnd"><option value="strong">strong</option><option value="weak">weak</option></select>
      <select v-model="d.starterUse"><option v-for="u in USES" :key="u" :value="u">{{ u }}</option></select>
    </div>
    <div class="field-row">
      <span>from</span>
      <b>{{ d.source }}</b>
      <button :class="{ on: ui.pick === 'source' }" @click="ui.pick = 'source'">pick</button>
      <span>to</span>
      <b>{{ d.destination }}</b>
      <button :class="{ on: ui.pick === 'destination' }" @click="ui.pick = 'destination'">pick</button>
    </div>

    <h3>participants <button :class="{ on: ui.pick === 'participant' }" @click="ui.pick = 'participant'">select</button></h3>
    <div v-if="!d.participants.length" class="muted">click your cards on the Field or in Hand</div>
    <div v-for="(p, i) in d.participants" :key="p.card" class="field-row">
      <span>{{ name(p.card) }} <span class="muted">{{ locText(p.card) }}</span></span>
      <template v-if="where(p.card)?.zone === 'hand'">
        <select v-model="p.end"><option value="strong">strong</option><option value="weak">weak</option></select>
        <select v-model="p.use"><option v-for="u in USES" :key="u" :value="u">{{ u }}</option></select>
        <select v-if="p.use === 'range'" v-model="p.group" title="the group it adds Range to">
          <option :value="undefined">source group</option>
          <option v-for="s in handStars" :key="s" :value="s">group at {{ s }}</option>
        </select>
      </template>
      <select v-else-if="isRemote(p)" v-model="p.use"><option v-for="u in USES" :key="u" :value="u">{{ u }}</option></select>
      <span v-else class="muted">direct</span>
      <button @click="removeParticipant(i)">✕</button>
    </div>

    <template v-if="d.kind === 'move'">
      <h3>cargo <button :class="{ on: ui.pick === 'cargo' }" @click="ui.pick = 'cargo'">select</button></h3>
      <div class="muted">{{ d.cargo?.map(name).join(', ') || 'none' }}</div>
    </template>

    <template v-if="d.kind === 'explore'">
      <h3>target <button :class="{ on: ui.pick === 'target' }" @click="ui.pick = 'target'">pick a hidden card</button></h3>
      <div v-if="d.target?.kind === 'tile'">tile {{ d.target.id }}</div>
      <div v-else-if="d.target?.kind === 'card'" class="field-row">
        {{ name(d.target.card) }}
        <label><input v-model="d.target.reveal" type="checkbox" /> reveal to all</label>
      </div>
      <div v-else class="muted">click a hidden tile</div>
    </template>

    <template v-if="d.kind === 'research' && d.research">
      <h3>Laboratory pile {{ d.research.pile + 1 }}</h3>
      <div class="field-row">
        <select v-model="d.research.toLab">
          <option :value="undefined">to the Factory</option>
          <option v-for="(pile, i) in view.homes[game.seat!].laboratory" :key="i" :value="i">to Laboratory {{ pile.type }}</option>
        </select>
      </div>
    </template>

    <template v-if="d.kind === 'create' && d.create">
      <h3>Factory piles</h3>
      <div class="field-row">
        <span v-for="(p, i) in d.create.piles" :key="i">{{ view.homes[game.seat!].factory[p].type }} <button @click="d.create.piles.splice(i, 1)">✕</button></span>
        <span v-if="!d.create.piles.length" class="muted">click Factory piles</span>
      </div>
    </template>

    <template v-if="d.kind === 'upgrade'">
      <h3>old card <button :class="{ on: ui.pick === 'old' }" @click="ui.pick = 'old'">pick</button></h3>
      <div class="field-row">
        <span>{{ d.upgrade?.old ? name(d.upgrade.old) : 'pick in Discard or on the Field' }}</span>
        <span v-if="d.upgrade">→ Factory {{ view.homes[game.seat!].factory[d.upgrade.pile]?.type }}</span>
      </div>
    </template>

    <template v-if="d.kind === 'recover'">
      <h3>damaged card <button :class="{ on: ui.pick === 'recover' }" @click="ui.pick = 'recover'">pick</button></h3>
      <div>{{ d.recover ? name(d.recover.card) : '' }}</div>
    </template>

    <template v-if="d.kind === 'manage'">
      <h3>
        operations
        <button :class="{ on: ui.pick === 'rotate' }" @click="ui.pick = 'rotate'">rotate</button>
        <button :class="{ on: ui.pick === 'shift' }" @click="ui.pick = 'shift'">shift</button>
      </h3>
      <div v-for="(op, i) in d.manage" :key="i" class="field-row">
        <span v-if="op.op === 'rotate'">rotate {{ name(op.card) }}</span>
        <span v-else-if="op.op === 'shift'">shift {{ name(op.card) }} to slot {{ op.slot + 1 }}</span>
        <span v-else>{{ op.op === 'labShift' ? 'Laboratory' : 'Factory' }} pile {{ op.from + 1 }} → {{ op.to < 0 ? '(click a pile)' : op.to + 1 }}</span>
        <button @click="d.manage!.splice(i, 1)">✕</button>
      </div>
      <div class="muted">rotate: click a card; shift: click a Structure, then a free Slot; piles: click two piles</div>
    </template>

    <h3>boost with Energy (⚡ {{ view.homes[game.seat!].energy }})</h3>
    <div class="field-row">
      <label v-for="k in KLASSES" :key="k" :class="`k-${k}`">{{ k }} <input v-model.number="d.boost![k]" type="number" min="0" /></label>
    </div>

    <div v-if="preview" class="preview">
      <div>
        power
        <span v-for="k in KLASSES" :key="k" :class="`k-${k}`">{{ k }}{{ preview.pool.power[k] }} </span>
        · capacity {{ preview.pool.capacity }}
      </div>
      <div v-if="preview.pool.techs.size">tech {{ [...preview.pool.techs.keys()].join(', ') }}</div>
      <div v-for="g in preview.groups" :key="g.star" :class="g.distance <= g.range ? 'ok' : 'error'">
        group at {{ g.star }}: range {{ g.range }}, distance {{ fmtD(g.distance) }}
      </div>
    </div>
    <div class="status" :class="error ? 'error' : 'ok'">{{ error ?? 'ready' }}</div>
    <div class="row">
      <button class="primary" :disabled="!!error" @click="submitAction">Perform</button>
      <button @click="reset">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
.action-panel { display: flex; flex-direction: column; gap: 4px; }
.hint { margin: 0 0 4px; font-size: 16px; }
.field-row { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
h3 { margin: 6px 0 2px; display: flex; gap: 6px; align-items: center; }
h3 button { font-size: 15px; padding: 0 6px; }
.preview { border-top: 1px solid var(--line); padding-top: 4px; margin-top: 4px; }
.status { min-height: 1.2em; }
</style>
