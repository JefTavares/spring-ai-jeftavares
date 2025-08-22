import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
        allowedHosts: [
      'ai_teste.jeftavares.com.br'
          // Add other allowed hosts if necessary, e.g., 'localhost', '127.0.0.1'
        ],
      },
})
