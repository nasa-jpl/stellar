import resolve from '@rollup/plugin-node-resolve';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['effect', '@effect/schema'],
    },
  },
  plugins: [sveltekit(), resolve()],
  server: {
    fs: {
      allow: ['./dist', '../css/dist'],
    },
  },
  resolve: {
    alias: {
      $src: path.resolve('./src'),
    },
  },
});
