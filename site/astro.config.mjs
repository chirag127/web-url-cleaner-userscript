import { defineConfig } from 'astro/config';

// Served from GitHub Pages at https://gh.oriz.in/<repo>/
export default defineConfig({
  site: 'https://gh.oriz.in',
  base: '/web-url-cleaner-userscript/',
  output: 'static',
  build: { format: 'directory' },
});
