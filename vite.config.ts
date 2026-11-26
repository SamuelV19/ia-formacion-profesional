import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativa: funciona en GitHub Pages (subruta) y en cualquier hosting estático.
export default defineConfig({ base: './', plugins: [react()] })
