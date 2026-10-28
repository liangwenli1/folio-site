// Layout guarantees that screenshots can miss: nothing scrolls sideways on a phone, on any page.
import { expect, test, type Page } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

const MAILPIT = process.env.MAILPIT_URL ?? 'http://folio-mailpit:8025';
async function emailCode(email: string){
  for (let i = 0; i < 50; i++){
    const { messages } = await (await fetch(`${MAILPIT}/api/v1/search?limit=1&query=${encodeURIComponent(`to:${email}`)}`)).json() as { messages: { ID: string }[] };
    if (messages.length) return ((await (await fetch(`${MAILPIT}/api/v1/message/${messages[0].ID}`)).json()) as { Text: string }).Text.match(/\b\d{6}\b/)![0];
    await new Promise(r => setTimeout(r, 100));
  }
  throw new Error(`No email for ${email}`);
}
const sideways = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

for (const lang of ['en', 'zh']){
  test(`no sideways scrolling on a phone (${lang})`, async ({ page }) => {
    for (const path of ['', 'features/', 'solutions/', 'solutions/ecommerce/', 'pricing/', 'login/', 'signup/', 'forgot/', 'download/', 'help/', 'help/install/', 'help/api/', 'changelog/', 'privacy/', 'terms/', 'contact/', 'invite/', '404/']){
      await page.goto(`/${lang}/${path}`);
      expect(await sideways(page), `/${lang}/${path}`).toBe(0);
    }
  });
}

test('on a phone the sections fold into a menu, with the current one marked', async ({ page }) => {
  await page.goto('/en/pricing/');
  const nav = page.getByRole('navigation', { name: 'Menu' });
  await expect(nav).toBeHidden();
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(nav.getByRole('link', { name: 'Pricing' })).toHaveAttribute('aria-current', 'page');
  await expect(nav.getByRole('link', { name: 'Try free' })).toBeVisible();
  expect(await sideways(page)).toBe(0);
  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
  await page.getByRole('button', { name: 'Menu' }).click();
  await nav.getByRole('link', { name: 'Features' }).click();
  await expect(page).toHaveURL(/\/en\/features\/$/);
  await expect(page.getByRole('navigation', { name: 'Menu' })).toBeHidden();
});

test('on a phone the menu is a drawer: it takes the focus, holds the page still, and a click outside closes it', async ({ page }) => {
  await page.goto('/zh/');
  const button = page.getByRole('button', { name: '菜单' });
  const nav = page.getByRole('navigation', { name: '菜单' });
  await expect(button).toHaveAttribute('title', '菜单');
  await button.click();
  await expect(nav.getByRole('link', { name: '产品功能' })).toBeFocused();
  // The page behind neither scrolls nor takes the keyboard.
  await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');
  expect(await page.locator('main').evaluate(el => (el as HTMLElement).inert)).toBe(true);
  // The drawer leaves a strip of the dimmed page on the left; a click there closes it.
  const drawer = (await nav.boundingBox())!;
  expect(drawer.x).toBeGreaterThanOrEqual(44);
  await page.mouse.click(drawer.x / 2, 500);
  await expect(nav).toBeHidden();
  await expect(button).toBeFocused();
  await expect(page.locator('html')).not.toHaveCSS('overflow', 'hidden');
  expect(await page.locator('main').evaluate(el => (el as HTMLElement).inert)).toBe(false);
});

test('the header is 76px tall, on a phone and on a desktop', async ({ page }) => {
  await page.goto('/en/');
  expect((await page.locator('header.top').boundingBox())!.height).toBe(76);
  await page.setViewportSize({ width: 1440, height: 900 });
  expect((await page.locator('header.top').boundingBox())!.height).toBe(76);
  await page.goto('/en/login/');
  expect((await page.locator('header.top').boundingBox())!.height).toBe(76);
});

test('on a desktop the sign-in pages mirror about the middle: as wide, as far from it, level, under the header’s ends', async ({ page }) => {
  for (const width of [1440, 1920]){
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['en/login/', 'zh/login/', 'en/signup/', 'zh/signup/', 'en/forgot/']){
      await page.goto(`/${path}`);
      const mid = await page.evaluate(() => document.documentElement.clientWidth / 2);
      const [left, right, logo, help] = await Promise.all(['.auth-panel-in', '.auth-form', 'header .brand', 'header .top-links .btn'].map(async s => (await page.locator(s).boundingBox())!));
      const at = `/${path} at ${width}`;
      expect(left.width, at).toBe(480);
      expect(Math.abs(right.width - left.width), at).toBeLessThanOrEqual(1);
      expect(Math.abs((mid - (left.x + left.width)) - (right.x - mid)), at).toBeLessThanOrEqual(1);
      expect(Math.abs(right.y - left.y), at).toBeLessThanOrEqual(1);
      expect(Math.abs(left.x - logo.x), at).toBeLessThanOrEqual(1);
      expect(Math.abs(right.x + right.width - (help.x + help.width)), at).toBeLessThanOrEqual(1);
    }
  }
});

test('on a phone the plans’ comparison scrolls sideways, its first column staying in place', async ({ page }) => {
  await page.goto('/en/pricing/');
  const table = page.locator('.cmp');
  const first = table.getByRole('rowheader').first(), last = table.getByRole('columnheader').last();
  await table.hover();
  const x = (await first.boundingBox())!.x;
  await expect(last).not.toBeInViewport({ ratio: 1 });
  // Swiping sideways over the table (a wheel here) brings the last plan into view.
  await page.mouse.wheel(600, 0);
  await expect(last).toBeInViewport({ ratio: 1 });
  expect((await first.boundingBox())!.x).toBe(x);
  expect(await sideways(page)).toBe(0);
});

test('no sideways scrolling on a phone behind an account: checkout, account, invoice', async ({ page }) => {
  const email = `e2e${Date.now().toString(36)}layout@example.com`;
  await page.goto('/zh/signup/');
  await page.fill('#email', email);
  await page.click('#get');
  await expect(page.locator('#sent')).toBeVisible();
  await page.fill('#code', await emailCode(email));
  await page.fill('#password', 'correct horse battery');
  await page.check('#consent');
  await page.click('button[type="submit"]');
  await expect(page.locator('#done')).toBeVisible();
  expect(await sideways(page), 'signed up').toBe(0);
  await page.goto('/zh/checkout/');
  await expect(page.locator('#step-plan')).toBeVisible();
  expect(await sideways(page), 'checkout, choosing').toBe(0);
  await page.click('#next');
  await page.fill('#number', '4242 4242 4242 4242'); await page.fill('#exp', '12/30'); await page.fill('#cvc', '123');
  expect(await sideways(page), 'checkout, paying').toBe(0);
  await page.click('#pay');
  await expect(page.locator('#done')).toBeVisible();
  await page.goto('/zh/account/');
  await expect(page.locator('#pay-rows tr')).toHaveCount(1);
  expect(await sideways(page), 'account').toBe(0);
  await page.locator('#pay-rows a').click();
  await expect(page.locator('#invoice')).toBeVisible();
  expect(await sideways(page), 'invoice').toBe(0);
});
