import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  base: '/react-vite-template/', // 👈 Must match your repo name
})
