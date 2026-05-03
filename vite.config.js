import { defineConfig } from 'vite'

// Allow preview requests from the deployment domain
export default defineConfig({
  preview: {
    allowedHosts: ['cogint.cognir.ai'],
  },
})
