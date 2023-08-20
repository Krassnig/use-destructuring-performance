import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './' // relative pathing for assets because this project is hosted at a relative path https://krassnig.github.io/use-destructuring-performance/
})
