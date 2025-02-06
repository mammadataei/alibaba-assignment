import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { pluginJsonServer } from 'vite-plugin-json-server'
import RemixRouter from 'vite-plugin-remix-router'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginJsonServer({
      apiPath: '/api',
      profile: './server',
    }),
    RemixRouter(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
