import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portafolio2.1/', // 👈 ESTA LÍNEA ES CLAVE
  plugins: [react(), tailwindcss()],
})
