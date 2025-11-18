import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/know-your-bible/', // <- required for GitHub Pages
  plugins: [react()],
});
