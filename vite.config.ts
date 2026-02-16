import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Crucial for shared hosting where site might not be at root or requires relative paths
  build: {
    outDir: 'dist', 
    sourcemap: false
  }
})