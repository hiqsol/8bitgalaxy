import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  publicDir: '../../public',
  server: { port: 5173 },
  // the legacy styles of the pixel perfect look refer to $images
  resolve: { alias: { $images: resolve(import.meta.dirname, '../../public/images') } },
});
