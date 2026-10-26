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
  await page.waitForURL(/\/account\//);
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
