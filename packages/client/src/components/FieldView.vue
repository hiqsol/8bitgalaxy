<script setup lang="ts">
import { controller, isDisputed, isOverlapped, type Row, starCenter, type Star } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { game } from '../session';
import { clickSlot, clickTile, ui } from '../ui';
import CardView from './CardView.vue';

// Board pixels of the legacy version: a Star is 775 wide, Space tiles run along its edges.
const R = 447.5;
const MARGIN = 40;
/** Space tile: length along the edge, thickness across it */
const TILE_L = 205;
const TILE_T = 56;
const SLOT_STEP = 100;

const view = computed(() => game.view!);

/** Star centers as in the rules, the first player's Home at the bottom */
const raw = computed(() => {
  const res: Record<string, { x: number; y: number }> = {};
  for (const id of Object.keys(view.value.stars)) {
    const c = starCenter(view.value, id);
    res[id] = { x: MARGIN + (Math.sqrt(3) / 2) * R + c.x * R, y: MARGIN + R + c.y * R };
  }
  return res;
});

const size = computed(() => {
  const pts = Object.values(raw.value);
  return {
    w: Math.max(...pts.map((p) => p.x)) + (Math.sqrt(3) / 2) * R + MARGIN,
    h: Math.max(...pts.map((p) => p.y)) + R + MARGIN,
  };
});

/** The Field turns around for the player whose Home is in the top row: your Home is at the bottom */
const flip = computed(() => {
  const home = Object.values(view.value.stars).find((s) => s.home === game.seat);
  return !!home && home.row === 0;
});
const turn = (p: { x: number; y: number }) => (flip.value ? { x: size.value.w - p.x, y: size.value.h - p.y } : p);

const centers = computed(() => Object.fromEntries(Object.entries(raw.value).map(([id, c]) => [id, turn(c)])));

function vertex(c: { x: number; y: number }, k: number, r = R) {
  const a = ((-90 + 60 * k) * Math.PI) / 180;
  return { x: c.x + r * Math.cos(a), y: c.y + r * Math.sin(a) };
}

const hexPoints = (c: { x: number; y: number }, r = R) =>
  [0, 1, 2, 3, 4, 5].map((k) => vertex(c, k, r)).map((p) => `${p.x},${p.y}`).join(' ');

/** A bar with pointed ends, as the legacy pentagon tiles */
const TILE_SHAPE = (() => {
  const l = TILE_L / 2;
  const t = TILE_T / 2;
  const cut = t * 0.58;
  return `${-l},0 ${-l + cut},${-t} ${l - cut},${-t} ${l},0 ${l - cut},${t} ${-l + cut},${t}`;
})();

const tiles = computed(() =>
  Object.values(view.value.spaces).map((sp) => {
    const { star, bearing } = sp.sides[0];
    const c = raw.value[star];
    const side = Math.floor((bearing - 1) / 2);
    const t = (bearing - 1) % 2 === 0 ? 0.25 : 0.75;
    const a = vertex(c, side);
    const b = vertex(c, side + 1);
    return {
      sp,
      ...turn({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }),
      angle: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI,
    };
  }),
);

function starClass(star: Star) {
  const d = ui.draft;
  const owner = controller(view.value, star.id);
  return {
    hidden: !star.revealed,
    [`ctl-${owner}`]: !!owner,
    disputed: isDisputed(view.value, star.id),
    source: d?.source === star.id,
    destination: d?.destination === star.id,
  };
}

const ABILITY_WORDS = { M: 'mil', C: 'cult', P: 'prod', S: 'sci' } as const;
function abilityText(star: Star): string {
  const a = star.def.ability;
  if (a.kind === 'energy') return `+${a.n} energy`;
  if (a.kind === 'power') return `+${a.n}${ABILITY_WORDS[star.def.klass]}`;
  if (a.kind === 'defense') return `+${a.n}def`;
  return a.tech.toLowerCase();
}

const label = (star: Star) => `${star.home ? 'home ' : ''}${abilityText(star)}`;
/** the label stays between the Space tiles */
const labelSize = (star: Star) => ({ fontSize: `${Math.min(36, 420 / label(star).length)}px` });

const slotPos = (id: string, row: Row, i: number) => ({
  left: `${centers.value[id].x + (row === 'units' ? -330 : -50)}px`,
  top: `${centers.value[id].y - 215 + i * SLOT_STEP}px`,
});

const tileClass = (id: string) => ({ destination: ui.draft?.destination === id });
</script>

<template>
  <div class="field" :style="{ width: `${size.w}px`, height: `${size.h}px` }">
    <svg :width="size.w" :height="size.h" class="svg">
      <defs>
        <pattern id="space-image" patternUnits="userSpaceOnUse" width="700" height="700">
          <image href="/images/space1.jpg" width="700" height="700" preserveAspectRatio="xMidYMid slice" />
        </pattern>
        <pattern id="star-back" patternUnits="userSpaceOnUse" width="42" height="42" patternTransform="rotate(45)">
          <rect width="21" height="42" fill="rgba(0,0,0,0.3)" />
        </pattern>
      </defs>
      <g v-for="star in view.stars" :key="star.id" class="star" :data-star="star.id" :class="starClass(star)" @click="clickTile(star.id)">
        <polygon class="area" :points="hexPoints(centers[star.id])" />
        <polygon class="ring" :points="hexPoints(centers[star.id], R - 52)" />
        <text :x="centers[star.id].x" :y="centers[star.id].y + R * 0.8" class="star-id">{{ star.id }}</text>
        <template v-if="star.revealed">
          <title>Star {{ star.id }}: {{ star.def.name }}, {{ abilityText(star) }}</title>
          <text :x="centers[star.id].x" :y="centers[star.id].y - R * 0.53" class="star-name" :class="`k-${star.def.klass}`" :style="labelSize(star)">
            {{ label(star) }}
          </text>
        </template>
        <template v-else>
          <g :transform="`translate(${centers[star.id].x - 135} ${centers[star.id].y - 135})`">
            <rect class="star-back" width="270" height="270" rx="20" />
            <rect y="135" width="270" height="135" rx="20" fill="url(#star-back)" />
          </g>
          <title>Star {{ star.id }}: hidden, size {{ star.def.units + star.def.structures }}, Explore cost {{ star.def.units + star.def.structures + star.def.extraCost }}</title>
          <text :x="centers[star.id].x" :y="centers[star.id].y - R * 0.6" class="star-name">
            ◀{{ star.def.units + star.def.structures }}·{{ star.def.units + star.def.structures + star.def.extraCost }}▶
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
        <polygon :points="TILE_SHAPE" />
        <text v-if="t.sp.length !== 1" y="11" class="tile-text">{{ t.sp.length }}</text>
      </g>
    </svg>
    <template v-for="star in view.stars" :key="star.id">
      <template v-if="star.revealed">
        <template v-for="row in ['units', 'structures'] as const" :key="row">
          <div
            v-for="(uid, i) in star[row]"
            :key="`${row}${i}`"
            class="slot"
            :data-star="star.id"
            :data-row="row"
            :data-index="i"
            :class="[row, { free: !uid }]"
            :style="{ ...slotPos(star.id, row, i), zIndex: uid ? i + 1 : 0 }"
            @click.stop="clickSlot(star.id, row, i)"
          >
            <CardView v-if="uid" :uid="uid" look="field" :overlapped="isOverlapped(view, uid)" />
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped>
.field { position: relative; }
.svg { position: absolute; inset: 0; }
.star .area { fill: rgba(0, 0, 0, 0.25); cursor: pointer; }
.star .ring { fill: none; stroke: none; stroke-width: 12; pointer-events: none; }
.star.ctl-p1 .ring { stroke: var(--p1); opacity: 0.75; }
.star.ctl-p2 .ring { stroke: var(--p2); opacity: 0.75; }
.star.disputed .ring { stroke: var(--warn); stroke-dasharray: 40 20; opacity: 0.8; }
.star.source .area { fill: rgba(255, 255, 255, 0.08); }
.star.destination .area { fill: rgba(255, 140, 90, 0.16); }
.star:hover .area { fill: rgba(255, 255, 255, 0.05); }
.star-id, .star-name { text-anchor: middle; font-family: var(--font-title); pointer-events: none; }
.star-id { font-size: 30px; fill: #555; }
.star-name { font-size: 40px; fill: #777; }
.star-name.k-M { fill: var(--M); } .star-name.k-C { fill: var(--C); } .star-name.k-P { fill: var(--P); } .star-name.k-S { fill: var(--S); }
.star-back { fill: #9aa894; filter: brightness(55%); }
.star.hidden:hover .star-back { stroke: #fff; stroke-width: 4; }

.tile { cursor: pointer; }
.tile polygon { fill: #1f2626; stroke: rgba(200, 210, 210, 0.3); stroke-width: 3; filter: drop-shadow(0 0 6px #000); }
.tile.normal polygon { fill: url(#space-image); stroke: rgba(255, 255, 255, 0.7); }
.tile.void polygon { fill: #000; stroke: #333; }
.tile.destination polygon { stroke: var(--warn); stroke-width: 10; }
.tile:hover polygon { stroke: #fff; filter: drop-shadow(0 0 20px #fff); }
.tile-text { text-anchor: middle; fill: #fff; font-family: var(--font-title); font-size: 30px; pointer-events: none; }

.slot { position: absolute; border-radius: 20px; }
.slot.units { width: 250px; height: 250px; }
.slot.structures { width: 350px; height: 150px; }
.slot.free { border: 3px dashed rgba(255, 255, 255, 0.16); }
.slot.free:hover { border-color: #fff; }
</style>
