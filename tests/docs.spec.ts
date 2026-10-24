// The docs: the API reference in both languages, the search over the contents, and the download page.
import { expect, test } from '@playwright/test';

test('the API reference lists the endpoints and both engines’ protocols, in English and Chinese', async ({ page }) => {
  await page.goto('/en/docs/api/');
  await expect(page.getByRole('heading', { name: 'API reference' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'POST /api/v1/profiles/{number}/start' })).toBeVisible();
  await expect(page.getByText('Return a WebDriver BiDi address.')).toBeVisible();
  await expect(page.getByRole('cell', { name: '429 rate_limited' })).toBeVisible();
  await page.screenshot({ path: 'test-results/docs-api.png', fullPage: true });

  await page.goto('/zh/docs/api/');
  await expect(page.getByRole('heading', { name: 'API 参考' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'POST /api/v1/profiles/{编号}/start' })).toBeVisible();
  await expect(page.getByText('返回 WebDriver BiDi 地址。')).toBeVisible();
});

test('the homepage names the tools the local API works with', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('#auto .libs')).toContainText('CDP · WebDriver BiDi');
});

test('the docs search narrows the contents and the page headings, without a server', async ({ page }) => {
  await page.goto('/en/docs/api/');
  const nav = page.locator('.doc-nav'), toc = page.locator('.doc-toc');
  await page.fill('[data-doc-search]', 'rate');
  await expect(nav.getByRole('link', { name: 'Rate limits' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Endpoints' })).toBeHidden();
  await expect(nav.getByText('Quick start')).toBeHidden();
  await expect(toc.getByRole('link', { name: 'Rate limits' })).toBeVisible();
  await expect(toc.getByRole('link', { name: 'Security' })).toBeHidden();
  await page.fill('[data-doc-search]', '');
  await expect(nav.getByText('Quick start')).toBeVisible();
});

test('without a release configured, the download page shows no version and says coming soon', async ({ page }) => {
  await page.goto('/zh/download/');
  await expect(page.locator('[data-version]')).toHaveCount(0);
  await expect(page.getByRole('button', { name: '即将推出' })).toHaveCount(2);
});
