import resolve from '@rollup/plugin-node-resolve';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), resolve()],
  server: {
    fs: {
      allow: ['./dist'],
    },
  },
  resolve: {
    alias: {
      $src: path.resolve('./src'),
    },
  },
});
