import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['7b2a-185-139-138-69.ngrok-free.app'],
    host: true,
    port: 3001
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
// https://github.com/murodovazizmurod/pitak-front.git
