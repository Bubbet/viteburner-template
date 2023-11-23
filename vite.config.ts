/* eslint-env node */
import { defineConfig } from 'viteburner';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '/src': resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: false,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
  },
  viteburner: {
    watch: [{ pattern: 'src/**/*.{js,jsx,ts,tsx}', transform: true }, { pattern: 'src/**/*.{script,txt}' }],
    sourcemap: 'inline',
  },
});
