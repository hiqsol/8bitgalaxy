import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/legacy/",
  publicDir: "../public",
  plugins: [
    vue(),
  ],
  build: {
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      $images: resolve(__dirname, "../public/images")
    }
  }
});
