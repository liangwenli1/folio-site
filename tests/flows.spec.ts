import { expect, test, type Page } from '@playwright/test';

const API = process.env.API_URL ?? 'http://localhost:47110';
const PASSWORD = 'correct horse battery';
let n = 0;
const uniqueEmail = () => `e2e${Date.now().toString(36)}${n++}@example.com`;

// Keep tests independent of the network: no web fonts.
test.beforeEach(async ({ page }) => {
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
});

async function signUp(page: Page, lang: 'en' | 'zh', next = ''){
  const email = uniqueEmail();
  await page.goto(`/${lang}/signup/${next ? `?next=${encodeURIComponent(next)}` : ''}`);
  await page.fill('#email', email);
  await page.fill('#password', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/verify\//);
  const { code } = await (await page.request.get(`${API}/dev/mail?email=${encodeURIComponent(email)}`)).json();
  await page.fill('#code', code);
  await page.click('button[type="submit"]');
  await page.waitForURL(next ? new RegExp(next.replace(/[?]/g, '\\?')) : /\/account\//);
  return email;
}

async function payWith(page: Page, number: string){
  await page.fill('#number', number);
  await page.fill('#exp', '12/30');
  await page.fill('#cvc', '123');
  await page.click('#pay');
}

test('landing page shows live prices in both languages', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('h1')).toContainText('One account flagged.');
  const studio = page.locator('[data-plan="studio"]');
  await expect(studio.locator('[data-amt]')).toHaveText('$29');
  await page.click('[data-period="yearly"]');
  await expect(studio.locator('[data-amt]')).toHaveText('$23');
  await expect(studio.locator('[data-note]')).toContainText('$276');
  await page.click('#reroll');
  await expect(page.locator('[data-f="no"]')).toHaveText('0043');

  await page.goto('/zh/');
  await expect(page.locator('h1')).toContainText('一个号出事');
  await expect(page.locator('[data-plan="company"] [data-amt]')).toHaveText('US$99');
});

test('sign up, buy Studio and open the invoice', async ({ page }) => {
  await signUp(page, 'en');
  await expect(page.locator('#plan-name')).toHaveText('Free');
  await page.click('#change-plan');
  await page.waitForURL(/\/checkout\//);
  await expect(page.locator('#total')).toHaveText('$29');
  await payWith(page, '4242 4242 4242 4242');
  await expect(page.locator('#done-text')).toHaveText('Payment received. Your plan is active.');

  await page.goto('/en/account/');
  await expect(page.locator('#plan-name')).toHaveText('Studio');
  await expect(page.locator('#plan-usage')).toHaveText('0 of 100 profiles');
  const row = page.locator('#pay-rows tr').first();
  await expect(row).toContainText('$29');
  await row.locator('a').click();
  await page.waitForURL(/\/invoice\//);
  await expect(page.locator('#number')).toHaveText(/^FOLIO-\d{4}-\d{6}$/);
  await expect(page.locator('#total')).toHaveText('$29');
});

test('a declined card shows the reason in Chinese and the plan stays the same', async ({ page }) => {
  await signUp(page, 'zh');
  await page.goto('/zh/checkout/?plan=company&period=yearly');
  await expect(page.locator('#total')).toHaveText('US$948');
  await payWith(page, '4000 0000 0000 0002');
  await expect(page.locator('#err')).toHaveText('这张卡被拒绝了，请换一张卡。');
  await page.goto('/zh/account/');
  await expect(page.locator('#plan-name')).toHaveText('体验版');
});

test('the Studio trial starts from the pricing link', async ({ page }) => {
  await signUp(page, 'en');
  await page.goto('/en/checkout/?plan=studio&trial=1');
  await expect(page.locator('#trial-box')).toBeVisible();
  await page.click('#trial-btn');
  await expect(page.locator('#done-text')).toHaveText('Trial started. Studio is yours for 7 days.');
  await page.goto('/en/account/');
  await expect(page.locator('#plan-status')).toContainText('Trial ends on');
});

test('the latest payment can be refunded from the account page', async ({ page }) => {
  await signUp(page, 'en');
  await page.goto('/en/checkout/?plan=studio&period=monthly');
  await payWith(page, '4242 4242 4242 4242');
  await expect(page.locator('#done-text')).toBeVisible();
  await page.goto('/en/account/');
  await page.click('[data-refund]');
  await page.click('[data-yes]');
  await expect(page.locator('#plan-name')).toHaveText('Free');
  await expect(page.locator('#pay-rows tr').first()).toContainText('Refunded');
});

test('logging in from checkout brings you back to checkout', async ({ page, context }) => {
  const email = await signUp(page, 'en');
  await context.clearCookies();
  await page.goto('/en/checkout/?plan=company&period=monthly');
  await page.waitForURL(/\/login\//);
  await page.fill('#email', email);
  await page.fill('#password', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/checkout\/\?plan=company/);
  await expect(page.locator('#total')).toHaveText('$99');
});

test('the sales form sends an inquiry', async ({ page }) => {
  await page.goto('/en/contact-sales/');
  await page.fill('#name', 'Maya Chen');
  await page.fill('#email', uniqueEmail());
  await page.fill('#message', 'We run 1,200 profiles across three teams.');
  await page.click('button[type="submit"]');
  await expect(page.locator('#ok')).toBeVisible();
});
