import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0',
  }
})
