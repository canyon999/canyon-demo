import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    react({
      babel: {
        plugins: [
          'istanbul',
          'canyon'
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8005,
  },
})
