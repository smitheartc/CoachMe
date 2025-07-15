import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/login': 'http://localhost:3000',
      '/callback': 'http://localhost:3000',
      '/logout': 'http://localhost:3000',
      // Add other backend routes as needed
    }
  }
})
