import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // importing tailwindcss plugin

// https://vite.dev/config/
export default defineConfig({
  // add tailwindcss plugin
  plugins: [react(), tailwindcss()], 
})
