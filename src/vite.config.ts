import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImporter from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      AutoImporter({
        dts: true
      })
  ],
})
