<template>

</template>

<script setup>

import Decks from "./js/Model/Decks/Decks.js";
import Validator from "./js/Model/Validator.js";

let val = new Validator();
let res = Decks.getCard("Human-Hero-2C");
console.log(res.Name);
console.log(res.Alternative.Name);
throw new Error("die");
val.stats(Decks.all());
console.log(val._stats["Human"]);
throw new Error("die");

</script>

<style scoped>

</style>
