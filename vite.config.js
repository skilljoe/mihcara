import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/mihcara/',
  server: { allowedHosts: true },
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        about: resolve(root, 'about/index.html'),
        services: resolve(root, 'services/index.html'),
        portfolio: resolve(root, 'portfolio/index.html'),
        books: resolve(root, 'books/index.html'),
        contact: resolve(root, 'contact/index.html'),
        privacy: resolve(root, 'privacy/index.html'),
        terms: resolve(root, 'terms/index.html')
      }
    }
  }
});
