import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ['cogint.cognir.ai'],
  },
  preview: {
    allowedHosts: ['cogint.cognir.ai'],
  },
})