import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This was to enable access to images in the src/assets/images folder
  // but I rather moved images dir to public folder.
  // publicDir: 'src/assets',
})
