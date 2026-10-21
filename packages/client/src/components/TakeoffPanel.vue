<script setup lang="ts">
import { reset, ui } from '../ui';
</script>

<template>
  <div class="panel">
    <h2>Take off</h2>
    <p>Click a free Unit slot in a Star you control.</p>
    <div class="row">
      <select v-model="ui.takeoff.end"><option value="strong">strong End</option><option value="weak">weak End</option></select>
      <label><input v-model="ui.takeoff.hidden" type="checkbox" /> hidden (Stealth)</label>
      <button @click="reset">Cancel</button>
    </div>
  </div>
</template>
