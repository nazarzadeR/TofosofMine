import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifest = require('./public/manifest.json')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest,
            registerType: 'prompt',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
            {
                find: '@modules',
                replacement: path.resolve(__dirname, 'src/modules'),
            },
        ],
    },
})
