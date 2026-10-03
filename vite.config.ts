import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // relative base so it works in any environment, subfolder or preview
  server: {
    port: 3000,
    open: false,
  },
});
