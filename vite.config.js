import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portafolio2.1/',  // Importante poner la barra inicial y el nombre del repo
  plugins: [react(), tailwindcss()],
})
