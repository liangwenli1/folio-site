import { defineConfig, devices } from '@playwright/test';

// Runs against the built site (astro preview) and a running folio-server with DEV_TOOLS=1 and MOCK_PAYMENTS=1.
export default defineConfig({
  testDir: 'tests',
  workers: 1,
  timeout: 60_000,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:47120',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npx astro preview --host 0.0.0.0 --port 47120',
    url: 'http://localhost:47120/en/',
    reuseExistingServer: true,
    timeout: 60_000
  }
});
