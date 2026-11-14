import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work on GitHub Pages under ANY repo name
// (https://<user>.github.io/<repo>/) and on a custom domain, with no edits.
export default defineConfig({
  plugins: [react()],
  base: './',
})
