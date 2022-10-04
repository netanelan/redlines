import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import { splitVendorChunkPlugin } from "vite";
const timeStamp = new Date().getTime();

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      toplevel: true,
      output: {
        comments: false,
      },
      compress: {
        passes: 5,
        unsafe: true,
        pure_getters: true,
      },
    },
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]_${timeStamp}.js`,
        chunkFileNames: `assets/[name]_${timeStamp}.js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    vue(),
    viteCompression({
      algorithm: "gzip",
      filter: /\.(js|mjs|json|css|html|jpg|png|mp4)$/i,
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
