import { defineConfig } from 'vite';
import { resolve } from 'node:path';
const pages = ['index', 'signature', 'fresh-standard', 'southern-care', 'precision', 'everyday-ease', 'quiet-luxury'];
export default defineConfig({
  server: { cors: true },
  preview: { cors: true },
  build: { rollupOptions: { input: Object.fromEntries(pages.map(page => [page, resolve(import.meta.dirname, `${page}.html`)])) } }
});
