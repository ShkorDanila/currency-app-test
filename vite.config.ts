import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      components: '/src/components',
      api: '/src/api',
      constants: '/src/constants',
      hooks: '/src/hooks',
      pages: '/src/pages',
      routes: '/src/Routes',
      store: '/src/store',
      utils: '/src/utils',
      assets: '/src/assets',
    }
  }
})
