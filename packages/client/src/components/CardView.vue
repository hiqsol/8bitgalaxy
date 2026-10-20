<script setup lang="ts">
import { type Ability, cardDef, type EndName, isActorType, isPlayable, isSocialType, isUnknown } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { cardWord } from '../format';
import { TYPE_ICONS } from '../icons';
import { game } from '../session';
import { clickCard, ui } from '../ui';

// Sizes are in board pixels of the legacy version (a Unit is 250x350), the board zooms them.
const props = withDefaults(
  defineProps<{
    uid: string;
    /** hand: the whole card with both Ends; field: only the End that is up, as in a Slot */
    look?: 'hand' | 'field';
    overlapped?: boolean;
    /** a pile card: clicks go to the pile */
    passive?: boolean;
  }>(),
  { look: 'hand', overlapped: false, passive: false },
);

const card = computed(() => game.view?.cards[props.uid]);
const def = computed(() => (card.value && !isUnknown(card.value.def) ? cardDef(card.value.def) : null));
const back = computed(() => !def.value || card.value!.face !== 'front');
const unit = computed(() => (def.value ? isActorType(def.value.type) : card.value?.def === '?Unit'));
const ends = computed<EndName[]>(() => (props.look === 'hand' ? ['strong', 'weak'] : [card.value!.end]));

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

/** Shrinks a word to fit the width, the font is monospace */
const fit = (text: string, size: number, width: number) => ({ fontSize: `${Math.min(size, width / Math.max(text.length, 1))}px` });
const words = (list: Ability[]) => list.map((a) => ({ text: cardWord(a), blank: a.kind === 'tech' && !isPlayable(a) }));
const width = computed(() => (unit.value ? 240 : 340));

function onClick(e: MouseEvent) {
  if (props.passive) return;
  e.stopPropagation();
  clickCard(props.uid);
}

const title = computed(() => {
  const c = card.value;
  if (!c) return '';
  if (!def.value) return 'hidden';
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
      unit ? 'unit' : 'structure',
      `owner-${card.owner}`,
      back ? `back face-${card.face}` : '',
      def && isSocialType(def.type) ? 'social' : 'industrial',
      { overlapped },
      marks,
    ]"
    :title="title"
    @click="onClick"
    @mouseenter="ui.inspect = uid"
  >
    <template v-if="back">
      <span class="back1" />
      <span class="back2" />
      <div v-if="def" class="back-name">{{ def.id }}</div>
    </template>
    <template v-else>
      <svg class="image" viewBox="0 0 144 144"><path transform="translate(0 128) scale(1 -1)" :d="TYPE_ICONS[def!.type]" /></svg>
      <div v-for="end in ends" :key="end" class="end" :class="look === 'hand' && end === 'weak' ? 'down' : 'up'">
        <div class="level" :class="`lv-${def![end].klass}`">{{ def![end].level }}</div>
        <div v-if="def![end].extraCost" class="extra">{{ def![end].extraCost > 0 ? '+' : '' }}{{ def![end].extraCost }}</div>
        <div class="primary" :class="`kc-${def![end].klass}`">
          <span v-for="(w, i) in words(def![end].primary)" :key="i" :class="{ blank: w.blank }" :style="fit(w.text, 44, width - 110)">{{ w.text }}</span>
        </div>
        <div class="secondary" :class="`kc-${def![end].klass}`">
          <span v-for="(w, i) in words(def![end].secondary)" :key="i" :class="{ blank: w.blank }" :style="fit(w.text, 30, width)">{{ w.text }}</span>
        </div>
      </div>
      <div class="reqs">
        <div v-for="(p, i) in def!.prerequisites" :key="i" class="req" :class="`rq-${p.klass}`">{{ p.level }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border: 1px solid #000;
  border-radius: 20px;
  background: var(--tint-p1);
  color: #000;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  font-family: var(--font-title);
  box-shadow: 0 0 0 8px var(--pc, #000), 0 0 14px 8px #000;
}
.owner-p1 { --pc: var(--p1); background: var(--tint-p1); }
.owner-p2 { --pc: var(--p2); background: var(--tint-p2); }
.card:hover { filter: brightness(108%); z-index: 20 !important; }

.unit.look-hand { width: 250px; height: 350px; }
.structure.look-hand { width: 350px; height: 250px; }
.unit.look-field { width: 250px; height: 250px; }
.structure.look-field { width: 350px; height: 150px; }

.image { position: absolute; left: 11px; top: 9px; width: 130px; height: 130px; }
.industrial .image { fill: rgba(180, 180, 70, 0.9); }
.social .image { fill: rgba(50, 180, 50, 0.7); }
.structure .image { left: 20px; top: 10px; }

.end { position: absolute; left: 0; right: 0; top: 0; height: 100%; }
.look-hand.unit .end { height: 175px; }
.look-hand.structure .end { height: 125px; }
.end.down { top: auto; bottom: 0; transform: rotate(180deg); }

.level {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 60px;
  border-radius: 20px 0 20px 0;
  font-size: 40px;
  line-height: 62px;
  text-align: center;
}
.extra { position: absolute; left: 52px; top: 12px; font-size: 27px; letter-spacing: -5px; }
.primary, .secondary {
  position: absolute;
  right: 6px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  white-space: nowrap;
  font-weight: bold;
}
.primary { top: 6px; line-height: 48px; }
.secondary { top: 56px; line-height: 44px; }
.blank { opacity: 0.35; }
.overlapped .secondary { text-decoration: line-through; opacity: 0.45; }

.lv-M { background: rgba(255, 0, 0, 0.4); }
.lv-C { background: rgba(0, 255, 0, 0.6); }
.lv-P { background: rgba(255, 235, 0, 0.7); }
.lv-S { background: rgba(0, 0, 255, 0.4); }
.kc-M { color: rgba(230, 0, 0, 0.8); }
.kc-C { color: green; }
.kc-P { color: darkorange; }
.kc-S { color: darkblue; }

.reqs { position: absolute; left: 0; top: 100px; }
.structure .reqs { top: 70px; }
.req { width: 40px; height: 40px; font-size: 25px; line-height: 45px; text-align: center; }
.req:first-child { border-top-right-radius: 12px; }
.req:last-child { border-bottom-right-radius: 12px; }
.rq-M { background: rgba(255, 0, 0, 0.2); }
.rq-C { background: rgba(0, 255, 0, 0.2); }
.rq-P { background: rgba(255, 235, 0, 0.7); }
.rq-S { background: rgba(0, 0, 255, 0.2); }

/* the back: Turned in the legacy version, the striped half is the End that is up */
.back { filter: brightness(55%); }
.back1, .back2 { position: absolute; left: 0; right: 0; height: 50%; }
.back1 { top: 0; }
.back2 { bottom: 0; }
.face-hidden .back2,
.face-front .back2,
.face-damaged .back1 {
  background: repeating-linear-gradient(45deg, rgba(0, 0, 0, 0) 0 15px, rgba(0, 0, 0, 0.3) 15px 30px);
}
.back-name { position: absolute; inset: 0; display: grid; place-items: center; font-size: 26px; opacity: 0.6; text-align: center; }

.starter { outline: 12px solid #fff; outline-offset: 10px; }
.participant { outline: 12px solid var(--ok); outline-offset: 10px; }
.cargo { outline: 12px solid var(--P); outline-offset: 10px; }
.target { outline: 12px solid var(--warn); outline-offset: 10px; }
.saved { outline: 12px solid var(--S); outline-offset: 10px; }
.manual, .menu { outline: 12px dashed #fff; outline-offset: 10px; }
.fighting::after {
  content: '⚔';
  position: absolute;
  right: 6px;
  bottom: 0;
  font-family: sans-serif;
  font-size: 70px;
  color: #000;
}
</style>
