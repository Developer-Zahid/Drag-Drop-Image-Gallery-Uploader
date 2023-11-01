import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Drag-Drop-Image-Gallery-Uploader",
  plugins: [react()],
})
