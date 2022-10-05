import vue from '@vitejs/plugin-vue'
import path from 'path'

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
