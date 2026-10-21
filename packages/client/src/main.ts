import { createApp } from 'vue';
import App from './App.vue';
import { PP } from './look';

// the page styles of the look, only one is loaded
await (PP ? import('./pp/pp.css') : import('./style.css'));

createApp(App).mount('#app');
