// The pages for reading: the API reference in both languages, the search over the contents, the download page, the
// changelog, the legal drafts and the page for addresses that lead nowhere.
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
  // No guide matches: the list says so and offers the contact page.
  await page.fill('[data-doc-search]', 'zzzz');
  await expect(nav.getByText('No matching guides.')).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '/en/contact/');
  await page.fill('[data-doc-search]', '');
  await expect(nav.getByRole('link', { name: 'Install the Folio app' })).toBeVisible();
  await expect(nav.getByText('No matching guides.')).toBeHidden();
});

test('the help center’s search goes in the address, finds guides by a word, and says so when nothing matches', async ({ page }) => {
  await page.goto('/zh/help/');
  const results = page.locator('[data-results] li'), title = page.getByRole('heading', { level: 1 });
  await page.getByRole('searchbox', { name: '搜索帮助文档' }).fill('Cookie');
  await page.getByRole('button', { name: '搜索', exact: true }).click();
  await expect(page).toHaveURL(/\/zh\/help\/\?q=Cookie$/);
  await expect(title).toHaveText('帮助搜索结果');
  await expect(results.first()).toContainText('导入 Cookie');
  // Reloading keeps the search; the box holds what was searched for.
  await page.reload();
  const box = page.getByRole('searchbox', { name: '搜索关键词' });
  await expect(box).toHaveValue('Cookie');
  await expect(results.first()).toContainText('导入 Cookie');
  await box.fill('zzzz');
  await page.getByRole('button', { name: '重新搜索' }).first().click();
  await expect(title).toHaveText('未找到相关文档');
  await expect(page.getByText('关键词：zzzz')).toBeVisible();
  await expect(results).toHaveCount(0);
  await page.locator('.hexamples').getByRole('link', { name: '代理配置' }).click();
  await expect(results.first()).toContainText('配置与检测代理');
  // Going back returns to the search before.
  await page.goBack();
  await expect(title).toHaveText('未找到相关文档');
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

test('the changelog shows one part of Folio at a time', async ({ page }) => {
  await page.goto('/zh/changelog/');
  const desktop = page.locator('.cl-list > li[data-area="desktop"]'), site = page.locator('.cl-list > li[data-area="site"]');
  await page.getByRole('button', { name: '官网', exact: true }).click();
  await expect(page.getByRole('button', { name: '官网', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(desktop.first()).toBeHidden();
  await expect(site.first()).toBeVisible();
  await page.getByRole('button', { name: '全部' }).click();
  await expect(desktop.first()).toBeVisible();
  await expect(site.first()).toBeVisible();
});

test('the privacy policy’s and the terms’ contents follow the reading and fold away on a phone; what is not settled says so', async ({ page }) => {
  await page.goto('/en/privacy/');
  const toc = page.getByRole('navigation', { name: 'Contents' });
  await expect(toc.getByRole('link', { name: 'Information we collect' })).toHaveAttribute('aria-current', 'true');
  await toc.getByRole('link', { name: 'Your rights' }).click();
  await expect(toc.getByRole('link', { name: 'Your rights' })).toHaveAttribute('aria-current', 'true');
  await expect(toc.getByRole('link', { name: 'Information we collect' })).not.toHaveAttribute('aria-current');
  await expect(page.locator('#share').getByText('To be confirmed')).toHaveCount(2);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(toc).toBeHidden();
  await page.locator('.lg-toc summary').click();
  await toc.getByRole('link', { name: 'Sharing' }).click();
  await expect(toc).toBeHidden();
  await expect(page.locator('#share')).toBeInViewport();
  // The terms have the same contents.
  await page.goto('/en/terms/');
  await page.locator('.lg-toc summary').click();
  await page.getByRole('navigation', { name: 'Contents' }).getByRole('link', { name: 'Plans and fees' }).click();
  await expect(page.getByRole('heading', { name: 'Plans and fees' })).toBeInViewport();
});

test('the page for an address that leads nowhere offers the way on, in that language', async ({ page }) => {
  await page.goto('/zh/404/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('页面未找到');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  await page.getByRole('link', { name: '访问帮助中心' }).click();
  await expect(page).toHaveURL(/\/zh\/help\/$/);
});

test('behind nginx, an address that leads nowhere gets that page with a 404, in the language of the address', async ({ page }) => {
  test.skip(!process.env.SITE_URL, 'nginx picks the page (deploy/nginx.conf); astro preview does not');
  for (const [path, title] of [['/zh/no-such-page/', '页面未找到'], ['/en/no-such-page/', 'Page not found'], ['/no-such-page', 'Page not found']]){
    const res = await page.goto(path);
    expect(res!.status(), path).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  }
});
