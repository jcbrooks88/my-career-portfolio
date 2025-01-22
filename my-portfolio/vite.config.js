import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensure this is '/' for root paths
  plugins: [react()],
  server: {
    open: true,  // Automatically open the browser on server start
  },
  esbuild: {
    loader: {
      '.js': 'jsx', // Tells esbuild to treat .js files as JSX
    },
    
  },
});