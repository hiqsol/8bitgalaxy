<template>
  <h1>8bit Galaxy: legacy prototype</h1>
  <ul class="pages">
    <li v-for="path in pages" :key="path">
      <router-link :to="path">{{ path }}</router-link>
    </li>
  </ul>
  <p><a href="/">the new game</a></p>
</template>

<script>
import routes from "../routes";

export default {
  name: "Index",
  data() {
    return { pages: routes.map((r) => r.path).filter((p) => p !== "/") };
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
</style>
