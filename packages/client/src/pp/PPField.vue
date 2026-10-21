<script setup lang="ts">
import type { Row, Space, Star } from '@8bitgalaxy/engine';
import { computed } from 'vue';
import { game } from '../session';
import { clickSlot, clickTile, ui } from '../ui';
import { FIELD, M, px, spaceAt, STAR_CENTER, STAR_R, STAR_STRUCTURES, STAR_UNITS, starAt } from './legacy';
import PPCard from './PPCard.vue';

// The legacy Field of FieldDrawer and StarDrawer: a Star has no image, its Space tiles draw
// the hexagon. The click areas of the Stars are the additions, they are invisible at rest.
const view = computed(() => game.view!);
const stars = computed(() => Object.values(view.value.stars).sort((a, b) => a.row - b.row || a.col - b.col));
const widths = computed(() => {
  const w: number[] = [];
  for (const s of stars.value) w[s.row] = Math.max(w[s.row] ?? 0, s.col + 1);
  return w;
});
const at = (star: Star) => starAt(star.row, star.col, widths.value);

/** A shared tile is drawn by the Star that has it at an odd bearing, as in the legacy Field */
const tiles = computed(() => {
  const res: Record<string, { sp: Space; bearing: number }[]> = {};
  for (const sp of Object.values(view.value.spaces)) {
    const side = sp.sides.find((s) => s.bearing % 2 === 1) ?? sp.sides[0];
    (res[side.star] ??= []).push({ sp, bearing: side.bearing });
  }
  for (const list of Object.values(res)) list.sort((a, b) => a.bearing - b.bearing);
  return res;
});

const tileStyle = (bearing: number) => {
  const p = spaceAt(bearing);
  return { ...px(p), transform: p.rotate ? `rotate(${p.rotate}deg)` : undefined };
};
const tileClass = (sp: Space, bearing: number) => [
  `oclock${bearing}`,
  sp.type === 'void' ? 'Type6' : 'Type1',
  { even: bearing % 2 === 0, Turned: !sp.revealed, 'pp-dest': ui.draft?.destination === sp.id },
];

function hexPoints(star: Star) {
  const c = { x: at(star).x * M + STAR_CENTER.x, y: at(star).y * M + STAR_CENTER.y };
  return [0, 1, 2, 3, 4, 5]
    .map((k) => ((-90 + 60 * k) * Math.PI) / 180)
    .map((a) => `${c.x + STAR_R * Math.cos(a)},${c.y + STAR_R * Math.sin(a)}`)
    .join(' ');
}
const areaClass = (star: Star) => ({ 'pp-dest': ui.draft?.destination === star.id, 'pp-source': ui.draft?.source === star.id });

const ROWS: { row: Row; at: typeof STAR_UNITS; dir: string; name: string }[] = [
  { row: 'units', at: STAR_UNITS, dir: 'TopToBottom', name: 'Ship' },
  { row: 'structures', at: STAR_STRUCTURES, dir: 'LeftToRight', name: 'Base' },
];

const starTitle = (s: Star) => {
  const size = s.def.units + s.def.structures;
  return s.revealed ? `Star ${s.id}: ${s.def.name}` : `Star ${s.id}: hidden, size ${size}, Explore cost ${size + s.def.extraCost}`;
};
const tileTitle = (sp: Space) => `Space ${sp.id}: ${sp.revealed ? sp.type : 'hidden'}, length ${sp.length}, cost ${sp.cost}`;
</script>

<template>
  <div class="Field" :style="px(FIELD)">
    <svg class="pp-areas">
      <polygon v-for="star in stars" :key="star.id" class="pp-area" :class="areaClass(star)" :points="hexPoints(star)" :data-star="star.id" @click.stop="clickTile(star.id)">
        <title>{{ starTitle(star) }}</title>
      </polygon>
    </svg>
    <div v-for="star in stars" :key="star.id" class="Star" :style="px(at(star))">
      <div class="Id">{{ star.id }}</div>
      <div
        v-for="t in tiles[star.id]"
        :key="t.sp.id"
        class="Space"
        :class="tileClass(t.sp, t.bearing)"
        :style="tileStyle(t.bearing)"
        :title="tileTitle(t.sp)"
        :data-tile="t.sp.id"
        @click.stop="clickTile(t.sp.id)"
      >
        <div class="pentagon"><span /><div class="Type">{{ t.sp.length }}</div></div>
      </div>
      <template v-if="star.revealed">
        <div v-for="r in ROWS" :key="r.row" class="Slots" :class="r.dir" :style="px(r.at)">
          <div class="Name"><div class="Value">{{ r.name }}</div></div>
          <div
            v-for="(uid, i) in star[r.row]"
            :key="i"
            class="Slot droppable"
            :class="r.dir"
            :style="px({ x: 0, y: i })"
            :data-star="star.id"
            :data-row="r.row"
            :data-index="i"
            @click.stop="clickSlot(star.id, r.row, i)"
          >
            <PPCard v-if="uid" :uid="uid" />
          </div>
        </div>
      </template>
      <div v-else class="Card Unit Turned Alien pp-star-back" :title="starTitle(star)" :data-star="star.id" @click.stop="clickTile(star.id)">
        <span class="Back1" />
        <span class="Back2" />
      </div>
    </div>
  </div>
</template>
