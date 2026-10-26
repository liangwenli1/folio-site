// The docs: the API reference in both languages, the search over the contents, and the download page.
import { expect, test } from '@playwright/test';

test('the API reference lists the endpoints and both engines’ protocols, in English and Chinese', async ({ page }) => {
  await page.goto('/en/help/api/');
  await expect(page.getByRole('heading', { name: 'API reference' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'POST /api/v1/profiles/{number}/start' })).toBeVisible();
  await expect(page.getByText('Return a WebDriver BiDi address.')).toBeVisible();
  await expect(page.getByRole('cell', { name: '429 rate_limited' })).toBeVisible();
  await page.screenshot({ path: 'test-results/docs-api.png', fullPage: true });

  await page.goto('/zh/help/api/');
  await expect(page.getByRole('heading', { name: 'API 参考' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'POST /api/v1/profiles/{编号}/start' })).toBeVisible();
  await expect(page.getByText('返回 WebDriver BiDi 地址。')).toBeVisible();
});

test('the features page names the tools the local API works with', async ({ page }) => {
  await page.goto('/en/features/');
  await expect(page.locator('#automation')).toContainText('Playwright, Puppeteer and Selenium');
});

test('the guides’ search narrows the list and the page’s headings, without a server', async ({ page }) => {
  await page.goto('/en/help/api/');
  const nav = page.locator('.help-nav'), toc = page.locator('.help-toc');
  await page.fill('[data-doc-search]', 'cookie');
  await expect(nav.getByRole('link', { name: 'Import cookies' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Set up and check proxies' })).toBeHidden();
  await expect(toc).toBeHidden();
  await page.fill('[data-doc-search]', 'rate');
  await expect(toc.getByRole('link', { name: 'Rate limits' })).toBeVisible();
  await expect(toc.getByRole('link', { name: 'Security' })).toBeHidden();
  await page.fill('[data-doc-search]', '');
  await expect(nav.getByRole('link', { name: 'Install the Folio app' })).toBeVisible();
});

test('the help center finds guides by a word, and suggests others when nothing matches', async ({ page }) => {
  await page.goto('/zh/help/');
  const box = page.getByRole('searchbox', { name: '输入问题或关键词' });
  const results = page.locator('[data-results] a');
  await box.fill('Cookie');
  await page.getByRole('button', { name: '搜索' }).click();
  await expect(results.first()).toContainText('导入 Cookie');
  await box.fill('zzzz');
  await page.getByRole('button', { name: '搜索' }).click();
  await expect(page.getByRole('heading', { name: '未找到与「zzzz」相关的文档' })).toBeVisible();
  await expect(results).toHaveCount(0);
  await page.locator('[data-none]').getByRole('button', { name: '代理配置' }).click();
  await expect(results.first()).toContainText('配置与检测代理');
  // The old address of the docs leads here.
  await page.goto('/zh/docs/');
  await expect(page).toHaveURL(/\/zh\/help\/$/);
});

test('a guide asks whether it helped, keeps the answer, and says when that didn’t go through', async ({ page }) => {
  await page.goto('/en/help/create-profile/');
  let fail = true;
  await page.route('**/doc-feedback', r => { if (fail){ fail = false; return r.abort(); } return r.continue(); });
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'That didn’t go through. Try again later.' })).toBeVisible();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Thank you for the feedback.' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'No' })).toBeDisabled();
  await page.getByRole('link', { name: /Screen resolution and window size/ }).last().click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Screen resolution and window size');
});

test('without a release configured, the download page shows no version and says coming soon', async ({ page }) => {
  await page.goto('/zh/download/');
  await expect(page.locator('[data-version]')).toHaveCount(0);
  await expect(page.getByRole('button', { name: '即将推出' })).toHaveCount(2);
});
