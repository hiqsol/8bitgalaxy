<script setup lang="ts">
import { computed, ref } from 'vue';
import { game, importLocal, resumeLocal, savedLocal, startLocal, startOnline } from '../session';

const params = new URLSearchParams(location.search);
const roomParam = params.get('room') ?? '';
/** ?seed=N starts a reproducible hot-seat game */
const seed = params.get('seed') ? Number(params.get('seed')) : undefined;

const names = ref<[string, string]>(['Ann', 'Bob']);
const openHands = ref(false);
const onlineName = ref(localStorage.getItem('8bitgalaxy.name') ?? '');
const roomId = ref(roomParam);
const canResume = savedLocal();

function online(create: boolean) {
  const name = onlineName.value.trim() || 'Player';
  localStorage.setItem('8bitgalaxy.name', name);
  void startOnline(name, create ? undefined : roomId.value.trim()).catch(() => undefined);
}

const inviteLink = computed(() => `${location.origin}${location.pathname}?room=${game.roomId}`);
const copy = () => navigator.clipboard?.writeText(inviteLink.value);

async function importFile(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) importLocal(await file.text());
}
</script>

<template>
  <div class="lobby">
    <h1>8-bit Galaxy</h1>
    <p class="muted">First duel: 2 players, core rules, see docs/. The rules engine checks every move, the Table mode handles the rest.</p>
    <p class="muted">
      Looks: <a class="legacy" href="/legacy/">legacy</a> prototype, <a class="legacy" href="/pp/">pixel perfect</a> legacy look,
      <a class="legacy" href="/">new</a> look, see adr/0002-appearance.md
    </p>
    <div class="cards">
      <section class="panel">
        <h2>Hot seat</h2>
        <p class="muted">Two players at one screen, the screen is covered between turns.</p>
        <div class="row"><input v-model="names[0]" /> vs <input v-model="names[1]" /></div>
        <label class="row"><input v-model="openHands" type="checkbox" /> open hands: no secrets, no cover</label>
        <div class="row">
          <button class="primary" @click="startLocal(names, openHands, seed)">New game</button>
          <button v-if="canResume" @click="resumeLocal">Resume</button>
          <label class="file"><input type="file" accept=".json" @change="importFile" /> <span>Import…</span></label>
        </div>
      </section>
      <section class="panel">
        <h2>Online</h2>
        <p class="muted">Create a game and send the link to the rival, or join by the room id.</p>
        <div class="row">name <input v-model="onlineName" placeholder="your name" /></div>
        <div class="row">
          <button class="primary" :disabled="!!roomParam" @click="online(true)">Create game</button>
        </div>
        <div class="row">
          room <input v-model="roomId" placeholder="room id" />
          <button :disabled="!roomId" @click="online(false)">Join</button>
        </div>
        <div v-if="game.status" class="ok">{{ game.status }}</div>
        <div v-if="game.roomId" class="invite">
          invite the rival: <a :href="inviteLink">{{ inviteLink }}</a>
          <button @click="copy">copy</button>
        </div>
        <div v-if="game.error" class="error">{{ game.error }}</div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.lobby { max-width: 880px; margin: 40px auto; padding: 0 16px; }
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; }
section { display: flex; flex-direction: column; gap: 8px; }
.file input { display: none; }
.invite a { color: var(--p1); word-break: break-all; }
.legacy { color: var(--p1); }
.file span { border: 2px solid var(--line); padding: 2px 10px; cursor: pointer; }
</style>
