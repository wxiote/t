import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      external: [
        'mapbox-gl/dist/mapbox-gl.css'
      ],
      output: {
        // Ignore unresolved external modules
        globals: {
          'mapbox-gl/dist/mapbox-gl.css': 'mapboxGlCss'
        }
      }
    },
    // Suppress warnings for external modules
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
