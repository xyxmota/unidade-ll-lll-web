import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so the site works on GitHub Pages regardless of repo name
export default defineConfig({
  base: './',
  plugins: [react()]
})
