<script setup lang="ts">
import { controller, isDisputed, isOverlapped, type Row, starCenter, type Star } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { KLASS_NAMES } from '../format';
import { game } from '../session';
import { clickSlot, clickTile, ui } from '../ui';
import CardView from './CardView.vue';

const R = 120;
const MARGIN = 34;
const SLOT_STEP = 20;

const view = computed(() => game.view!);

const centers = computed(() => {
  const res: Record<string, { x: number; y: number }> = {};
  for (const id of Object.keys(view.value.stars)) {
    const c = starCenter(view.value, id);
    res[id] = { x: MARGIN + (Math.sqrt(3) / 2) * R + c.x * R, y: MARGIN + R + c.y * R };
  }
  return res;
});

const size = computed(() => {
  const pts = Object.values(centers.value);
  return {
    w: Math.max(...pts.map((p) => p.x)) + (Math.sqrt(3) / 2) * R + MARGIN,
    h: Math.max(...pts.map((p) => p.y)) + R + MARGIN,
  };
});

function vertex(c: { x: number; y: number }, k: number, r = R) {
  const a = ((-90 + 60 * k) * Math.PI) / 180;
  return { x: c.x + r * Math.cos(a), y: c.y + r * Math.sin(a) };
}

const hexPoints = (c: { x: number; y: number }) =>
  [0, 1, 2, 3, 4, 5].map((k) => vertex(c, k, R * 0.93)).map((p) => `${p.x},${p.y}`).join(' ');

const tiles = computed(() =>
  Object.values(view.value.spaces).map((sp) => {
    const { star, bearing } = sp.sides[0];
    const c = centers.value[star];
    const side = Math.floor((bearing - 1) / 2);
    const t = (bearing - 1) % 2 === 0 ? 0.28 : 0.72;
    const a = vertex(c, side);
    const b = vertex(c, side + 1);
    return {
      sp,
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      angle: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI,
    };
  }),
);

function starClass(star: Star) {
  const d = ui.draft;
  const owner = controller(view.value, star.id);
  return {
    hidden: !star.revealed,
    home: !!star.home,
    [`home-${star.home}`]: !!star.home,
    [`ctl-${owner}`]: !!owner,
    disputed: isDisputed(view.value, star.id),
    source: d?.source === star.id,
    destination: d?.destination === star.id,
  };
}

function abilityText(star: Star): string {
  const a = star.def.ability;
  if (a.kind === 'energy') return `+${a.n} Energy`;
  if (a.kind === 'power') return `+${a.n} ${KLASS_NAMES[star.def.klass]}`;
  if (a.kind === 'defense') return `+${a.n} Defense`;
  return a.tech;
}

const slotLeft = (row: Row) => (row === 'units' ? 6 : 64);
const ipsStyle = (id: string) => ({ left: `${centers.value[id].x - 66}px`, top: `${centers.value[id].y - 62}px` });

const tileClass = (id: string) => ({ destination: ui.draft?.destination === id });
</script>

<template>
  <div class="field" :style="{ width: `${size.w}px`, height: `${size.h}px` }">
    <svg :width="size.w" :height="size.h" class="svg">
      <g v-for="star in view.stars" :key="star.id" class="star" :data-star="star.id" :class="starClass(star)" @click="clickTile(star.id)">
        <polygon :points="hexPoints(centers[star.id])" />
        <text :x="centers[star.id].x" :y="centers[star.id].y - R * 0.68" class="star-name">
          {{ star.id }} {{ star.revealed ? star.def.name : '' }}
        </text>
        <text v-if="star.revealed" :x="centers[star.id].x" :y="centers[star.id].y + R * 0.8" class="star-ability" :class="`k-${star.def.klass}`">
          {{ abilityText(star) }}
        </text>
        <template v-else>
          <text :x="centers[star.id].x" :y="centers[star.id].y + 6" class="star-hidden">?</text>
          <text :x="centers[star.id].x" :y="centers[star.id].y + 40" class="star-ability">
            size {{ star.def.units + star.def.structures }} · cost {{ star.def.units + star.def.structures + star.def.extraCost }}
          </text>
        </template>
      </g>
      <g
        v-for="t in tiles"
        :key="t.sp.id"
        class="tile"
        :data-tile="t.sp.id"
        :class="[t.sp.revealed ? t.sp.type : 'hidden', tileClass(t.sp.id)]"
        :transform="`translate(${t.x} ${t.y}) rotate(${t.angle})`"
        @click.stop="clickTile(t.sp.id)"
      >
        <title>Space {{ t.sp.id }}: {{ t.sp.revealed ? t.sp.type : 'hidden' }}, length {{ t.sp.length }}, cost {{ t.sp.cost }}</title>
        <rect x="-21" y="-7" width="42" height="14" rx="2" />
        <text v-if="!t.sp.revealed" y="5" class="tile-text">{{ t.sp.length }}</text>
        <text v-else-if="t.sp.type === 'void'" y="5" class="tile-text void-x">✕</text>
      </g>
    </svg>
    <template v-for="star in view.stars" :key="star.id">
      <div v-if="star.revealed" class="ips" :style="ipsStyle(star.id)">
        <template v-for="row in ['units', 'structures'] as const" :key="row">
          <div
            v-for="(uid, i) in star[row]"
            :key="`${row}${i}`"
            class="slot"
            :data-star="star.id"
            :data-row="row"
            :data-index="i"
            :class="[row, { free: !uid }]"
            :style="{ left: `${slotLeft(row)}px`, top: `${i * SLOT_STEP}px`, zIndex: i + 1 }"
            @click.stop="clickSlot(star.id, row, i)"
          >
            <CardView v-if="uid" :uid="uid" :look="row === 'units' ? 'v' : 'h'" :overlapped="isOverlapped(view, uid)" />
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.field { position: relative; }
.svg { position: absolute; inset: 0; }
.star polygon {
  fill: rgba(16, 19, 31, 0.78);
  stroke: var(--line);
  stroke-width: 3;
  cursor: pointer;
}
.star.hidden polygon { fill: rgba(30, 34, 52, 0.92); stroke-dasharray: 6 4; }
.star.ctl-p1 polygon { stroke: var(--p1); }
.star.ctl-p2 polygon { stroke: var(--p2); }
.star.disputed polygon { stroke: var(--warn); stroke-dasharray: 10 5; }
.star.home polygon { stroke-width: 5; }
.star.source polygon { fill: rgba(255, 255, 255, 0.1); }
.star.destination polygon { fill: rgba(255, 140, 90, 0.16); }
.star-name, .star-ability, .star-hidden {
  text-anchor: middle;
  fill: var(--muted);
  font-family: var(--font);
  font-size: 17px;
  pointer-events: none;
}
.star-name { fill: var(--text); }
.star-ability.k-M { fill: var(--M); } .star-ability.k-C { fill: var(--C); } .star-ability.k-P { fill: var(--P); } .star-ability.k-S { fill: var(--S); }
.star-hidden { font-family: var(--font-title); font-size: 30px; fill: var(--line); }

.tile { cursor: pointer; }
.tile rect { fill: #3a4058; stroke: #000; stroke-width: 1.5; }
.tile.normal rect { fill: rgba(140, 150, 190, 0.25); stroke: rgba(140, 150, 190, 0.5); }
.tile.void rect { fill: var(--void); stroke: #444; }
.tile.destination rect { stroke: var(--warn); stroke-width: 3; }
.tile:hover rect { stroke: #fff; }
.tile-text { text-anchor: middle; fill: var(--text); font-family: var(--font); font-size: 14px; pointer-events: none; }
.void-x { fill: #666; }

.ips { position: absolute; width: 132px; height: 150px; pointer-events: none; }
.slot { position: absolute; pointer-events: auto; }
.slot.units { width: 46px; height: 64px; }
.slot.structures { width: 64px; height: 46px; }
.slot.free { border: 1px dashed rgba(216, 220, 239, 0.25); background: rgba(0, 0, 0, 0.2); }
.slot.free:hover { border-color: #fff; }
</style>
