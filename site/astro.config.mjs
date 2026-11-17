import { defineConfig } from 'astro/config';

// Served from GitHub Pages at https://chirag127.github.io/<repo>/
export default defineConfig({
  site: 'https://chirag127.github.io',
  base: '/web-url-cleaner-userscript/',
  output: 'static',
  build: { format: 'directory' },
});
