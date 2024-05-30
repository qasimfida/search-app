import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.jsx'),
      name: 'SearchLib',
      fileName: 'search-lib',
    },
    rollupOptions: {
      // Customize Rollup options
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
