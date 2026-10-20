import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./assets/main.scss";
import App from "./App.vue";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router);

app.mount("#app");
