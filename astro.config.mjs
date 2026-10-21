import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL ?? 'http://localhost:47120',
  build: { format: 'directory' },
  server: { host: true, port: 47120 }
});
