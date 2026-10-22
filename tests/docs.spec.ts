// The API reference, in both languages, and the homepage sample that points to it.
import { expect, test } from '@playwright/test';

test('the API reference lists the endpoints and both engines’ protocols, in English and Chinese', async ({ page }) => {
  await page.goto('/en/docs/api/');
  await expect(page.getByRole('heading', { name: 'API reference' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'POST /api/v1/profiles/{number}/start' })).toBeVisible();
  await expect(page.getByText('Answer with a WebDriver BiDi address.')).toBeVisible();
  await expect(page.getByRole('cell', { name: '429 rate_limited' })).toBeVisible();
  await page.screenshot({ path: 'test-results/docs-api.png', fullPage: true });

  await page.goto('/zh/docs/api/');
  await expect(page.getByRole('heading', { name: 'API 参考' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'POST /api/v1/profiles/{编号}/start' })).toBeVisible();
  await expect(page.getByText('返回 WebDriver BiDi 地址。')).toBeVisible();
});

test('the homepage sample starts a profile with a token', async ({ page }) => {
  await page.goto('/en/');
  const sample = page.locator('#auto pre.code');
  await expect(sample).toContainText("fetch('http://127.0.0.1:47210/api/v1/profiles/0042/start'");
  await expect(sample).toContainText("authorization: 'Bearer <token>'");
  await expect(page.locator('#auto .libs')).toContainText('CDP · WebDriver BiDi');
});
