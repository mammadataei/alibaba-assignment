import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { pluginJsonServer } from 'vite-plugin-json-server'
import RemixRouter from 'vite-plugin-remix-router'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Hotel Booking',
        short_name: 'Hotel Booking',
        description: 'Alibaba Hotel Booking App',
        theme_color: '#ffffff',
        icons: [
          // Customize the icons for PWA
          // { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          // { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          // ...
        ],
      },
      workbox: {
        sourcemap: true,
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
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
