<script setup lang="ts">
import { type Ability, cardDef, type EndName, isActorType, isSocialType, isUnknown } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { cardWord } from '../format';
import { game } from '../session';
import { cardMarks, clickCard, ui } from '../ui';
import { HOMES, KLASS_NAMES, M, TYPE_IMAGES } from './legacy';

// The legacy Card as CardDrawer, SpecsDrawer and SpecDrawer draw it, the legacy CSS styles it:
// the Normal Specs are the strong End, the Alternative the weak one, Altered is the weak End up.
const props = defineProps<{
  uid: string;
  /** a pile card: clicks go to the pile */
  passive?: boolean;
  /** the copy in the Show box, with the notes */
  show?: boolean;
}>();

const view = computed(() => game.view!);
const card = computed(() => view.value.cards[props.uid]);
const def = computed(() => (card.value && !isUnknown(card.value.def) ? cardDef(card.value.def) : null));
const turned = computed(() => !props.show && (!def.value || card.value.face !== 'front'));
const altered = computed(() => (turned.value ? card.value.face === 'damaged' : card.value.end === 'weak'));
const unit = computed(() => (def.value ? isActorType(def.value.type) : card.value.def === '?Unit'));
const race = computed(() => HOMES[view.value.players.findIndex((p) => p.id === card.value.owner)]?.race);

const MARKS: Record<string, string> = { starter: 'Selected', menu: 'Selected', manual: 'Selected' };
const marks = computed(() => (props.show ? [] : cardMarks(props.uid).map((m) => MARKS[m] ?? `pp-${m}`)));

/** SpecDrawer.decorate: a one letter plusable value gets a plus */
const plus = (v: string) => (v.length === 1 ? `+${v}` : v);
const words = (list: Ability[]) => list.map(cardWord).join(' ');

const ENDS: { end: EndName; specs: string }[] = [
  { end: 'strong', specs: 'Normal' },
  { end: 'weak', specs: 'Alternative' },
];
/** the notes of the Show box go to the End that is up */
const noted = (end: EndName) => props.show && end === card.value.end;

/** ShowDrawer.drawNote: a black note and a white one over it, shifted by a pixel */
function note(text: string, d: number, at: { x: number; y: number } | null) {
  const h = Math.abs(d);
  const line = { left: `${((d - 2) / 4) * M}px`, top: `${-d * M}px`, width: `${3 * M}px`, height: `${h * M}px` };
  const label = { left: `${((h + 2) / 4) * M}px`, top: `${(-d - 1) * M}px` };
  const pos = at ? { left: `${at.x * M}px`, top: `${at.y * M}px` } : { right: '0px', top: '0px' };
  const inv = at ? { left: `${at.x * M}px`, right: '-1px', top: `${(at.y - 1 / 50) * M}px` } : { right: '-1px', top: '-1px' };
  return [
    { cls: 'Note', pos, line, label, text },
    { cls: 'Inverted Note', pos: inv, line, label, text },
  ];
}

const NOTES = {
  Level: [...note('Level', 3.5, { x: 35 / 50, y: 10 / 50 }), ...note('Class', 2.6, { x: 60 / 50, y: 5 / 50 })],
  Extracost: note('Extracost', 2.1, { x: 55 / 50, y: 19 / 50 }),
  Type: note('Type', 2.0, { x: 2.1, y: 1 }),
  Primary: note('Primary', 0.1, null),
  Secondary: note('Secondary', 0.1, null),
};

function onClick(e: MouseEvent) {
  if (props.passive || props.show) return;
  e.stopPropagation();
  clickCard(props.uid);
}

function onEnter() {
  if (!props.show && def.value) ui.inspect = props.uid;
}
function onLeave() {
  if (!props.show && ui.inspect === props.uid) ui.inspect = null;
}
</script>

<template>
  <div
    v-if="card"
    class="Card"
    :data-uid="uid"
    :class="[
      { Turned: turned, Altered: altered },
      def?.type,
      unit ? 'Unit' : 'Structure',
      def ? (isSocialType(def.type) ? 'Social' : 'Industrial') : '',
      race,
      'Alterable',
      marks,
    ]"
    @click="onClick"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <span class="Back1" />
    <span class="Back2" />
    <div class="Image">
      <div class="Klass lni" :class="def ? `lni-${TYPE_IMAGES[def.type]}` : ''">
        <template v-if="show">
          <div v-for="(n, i) in NOTES.Type" :key="i" :class="n.cls" :style="n.pos"><div class="Line" :style="n.line" /><div class="Text" :style="n.label">{{ n.text }}</div></div>
        </template>
      </div>
    </div>
    <div class="Name"><div class="Value">{{ def?.id ?? 'Name' }}</div></div>
    <template v-if="def">
      <div v-for="{ end, specs } in ENDS" :key="end" class="Specs" :class="specs">
        <div class="Spec Level">
          <div class="Value" :class="KLASS_NAMES[def[end].klass]">
            {{ def[end].level }}
            <template v-if="noted(end)">
              <div v-for="(n, i) in NOTES.Level" :key="i" :class="n.cls" :style="n.pos"><div class="Line" :style="n.line" /><div class="Text" :style="n.label">{{ n.text }}</div></div>
            </template>
          </div>
        </div>
        <div v-if="def[end].extraCost" class="Spec Extracost">
          <div class="Value None">
            {{ def[end].extraCost > 0 ? plus(`${def[end].extraCost}`) : def[end].extraCost }}
            <template v-if="noted(end)">
              <div v-for="(n, i) in NOTES.Extracost" :key="i" :class="n.cls" :style="n.pos"><div class="Line" :style="n.line" /><div class="Text" :style="n.label">{{ n.text }}</div></div>
            </template>
          </div>
        </div>
        <div v-if="def[end].primary.length" class="Spec Power">
          <div class="Value" :class="KLASS_NAMES[def[end].klass]">
            {{ words(def[end].primary) }}
            <template v-if="noted(end)">
              <div v-for="(n, i) in NOTES.Primary" :key="i" :class="n.cls" :style="n.pos"><div class="Line" :style="n.line" /><div class="Text" :style="n.label">{{ n.text }}</div></div>
            </template>
          </div>
        </div>
        <div v-if="def[end].secondary.length" class="Spec Cooperation">
          <div class="Value" :class="KLASS_NAMES[def[end].klass]">
            {{ plus(words(def[end].secondary)) }}
            <template v-if="noted(end)">
              <div v-for="(n, i) in NOTES.Secondary" :key="i" :class="n.cls" :style="n.pos"><div class="Line" :style="n.line" /><div class="Text" :style="n.label">{{ n.text }}</div></div>
            </template>
          </div>
        </div>
        <template v-if="end === 'strong'">
          <div v-for="(p, i) in def.prerequisites.slice(0, 2)" :key="i" class="Spec" :class="`Require${i + 1}`">
            <div class="Value" :class="KLASS_NAMES[p.klass]">{{ p.level }}</div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
