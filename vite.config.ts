import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins:[
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
    }),

  ]
})
