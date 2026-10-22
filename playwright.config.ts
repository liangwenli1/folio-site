import { defineConfig, devices } from '@playwright/test';

// Runs against the built site (astro preview) and a running folio-server with MOCK_PAYMENTS=1. With SITE_URL and
// API_URL set, it runs against a deployment instead (the site and API behind nginx, as in production).
const site = process.env.SITE_URL;
export default defineConfig({
  testDir: 'tests',
  workers: 1,
  timeout: 60_000,
  reporter: [['list']],
  use: {
    baseURL: site ?? 'http://localhost:47120',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: site ? undefined : {
    command: 'npx astro preview --host 0.0.0.0 --port 47120',
    url: 'http://localhost:47120/en/',
    reuseExistingServer: true,
    timeout: 60_000
  }
});
