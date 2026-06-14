import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/Portfolio/",
=======
>>>>>>> e4952068cb294a892241dca6cecbbeb4ba2ae0e4
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
