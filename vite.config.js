import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose the server to the network
    port: process.env.PORT || 5173, // Use Render's PORT variable or default to 5173
    allowedHosts: ["ssbalwa.onrender.com"], // Allow this specific hostname
  },
})
