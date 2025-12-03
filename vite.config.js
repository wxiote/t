import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite config for Vercel deployment
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    host: true
  }
})
