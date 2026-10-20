import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  publicDir: '../../public',
  server: { port: 5173 },
});
