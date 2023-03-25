import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      $images: resolve('./public/images')
    }
  }
});
