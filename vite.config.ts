import { defineConfig } from 'vite'

const REPO_NAME = '/ai-ml-systems/'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: { d3: ['d3'] }
      }
    }
  }
})
