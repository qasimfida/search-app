import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.jsx'),
      name: 'SearchLib',
      // the proper extensions will be added
      fileName: 'search-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react'],
      // output: {
      //   Provide global variables to use in the UMD build
      //   for externalized deps
      //   globals: {
      //     react: 'React',
      //   },
      // },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})
