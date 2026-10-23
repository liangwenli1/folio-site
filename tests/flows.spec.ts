import { expect, request, test, type Page } from '@playwright/test';

const PASSWORD = 'correct horse battery';
let n = 0;
const uniqueEmail = () => `e2e${Date.now().toString(36)}${n++}@example.com`;

// The server sends real mail; in tests it goes to the local Mailpit inbox.
const MAILPIT = process.env.MAILPIT_URL ?? 'http://folio-mailpit:8025';
async function lastMail(email: string){
  for (let i = 0; i < 50; i++){
    const { messages } = await (await fetch(`${MAILPIT}/api/v1/search?limit=1&query=${encodeURIComponent(`to:${email}`)}`)).json() as { messages: { ID: string }[] };
    if (messages.length) return (await (await fetch(`${MAILPIT}/api/v1/message/${messages[0].ID}`)).json()) as { Subject: string; Text: string };
    await new Promise(r => setTimeout(r, 100));
  }
  throw new Error(`No email for ${email}`);
}
const emailCode = async (email: string) => (await lastMail(email)).Text.match(/\b\d{6}\b/)![0];

// An account made through the API, with a paid plan: someone who will invite people.
async function owner(){
  const email = uniqueEmail();
  // Paths are relative to the API's address (with a trailing slash), which can have a path of its own (/api in production).
  const api = await request.newContext({ baseURL: `${process.env.API_URL ?? 'http://localhost:47110'}/`, extraHTTPHeaders: { origin: new URL(process.env.SITE_URL ?? 'http://localhost:47120').origin } });
  await api.post('auth/register', { data: { email, password: PASSWORD } });
  await api.post('auth/verify-email', { data: { code: await emailCode(email) } });
  const workspaceId = (await (await api.get('me')).json()).workspaces[0].id as string;
  const { checkoutId } = await (await api.post(`workspaces/${workspaceId}/billing/checkout`, { data: { plan: 'studio', period: 'monthly', addonPacks: 0 } })).json();
  await api.post(`billing/checkouts/${checkoutId}/pay`, { data: { card: { number: '4242424242424242', expMonth: 12, expYear: 2030, cvc: '123' } } });
  await api.patch(`workspaces/${workspaceId}`, { data: { name: 'Larkspur Trading' } });
  return { email, api, workspaceId };
}

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
  await page.fill('#code', await emailCode(email));
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
  await expect(page.locator('h1')).toContainText('一个账号受限');
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
  await expect(page.locator('#err')).toHaveText('该银行卡被拒绝，请更换银行卡。');
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

test('while payments are off, paid plans say coming soon and the free trial still starts', async ({ page }) => {
  // The server says it can't take payments (as in production until a gateway is in).
  await page.route('**/plans', async r => { const res = await r.fetch(); await r.fulfill({ response: res, json: { ...await res.json(), payments: false } }); });
  await page.goto('/zh/');
  await expect(page.locator('[data-plan="studio"] .buy')).toHaveText('即将开放');
  await expect(page.locator('[data-plan="company"] .buy')).toHaveText('即将开放');
  await expect(page.locator('[data-buy]')).toHaveCount(0);

  await signUp(page, 'en');
  await page.goto('/en/checkout/?plan=studio');
  await expect(page.locator('#pay')).toHaveText('Coming soon');
  await expect(page.locator('#pay')).toBeDisabled();
  await expect(page.locator('#soon')).toBeVisible();
  await expect(page.locator('#number')).toBeHidden();
  await page.click('#trial-btn');
  await expect(page.locator('#done-text')).toHaveText('Trial started. Studio is yours for 7 days.');
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

test('an emailed invitation leads a new person through sign-up into the workspace', async ({ page }) => {
  const host = await owner();
  const email = uniqueEmail();
  await host.api.post(`workspaces/${host.workspaceId}/invitations`, { data: { email, role: 'member' } });
  const mail = await lastMail(email);
  expect(mail.Subject).toBe(`${host.email} invited you to Larkspur Trading on Folio`);
  const link = mail.Text.match(/https?:\/\/\S+\/invite\/\?token=[\w-]+/)![0];

  await page.goto(link.replace(/^https?:\/\/[^/]+/, ''));
  await expect(page.locator('#lead')).toHaveText(`${host.email} invited you to join Larkspur Trading on Folio as a member.`);
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect(page.locator('#email')).toHaveValue(email);
  await page.fill('#password', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/verify\//);
  await page.fill('#code', await emailCode(email));
  await page.click('button[type="submit"]');

  await page.waitForURL(/\/invite\//);
  await page.getByRole('button', { name: 'Join Larkspur Trading' }).click();
  await expect(page.locator('#lead')).toHaveText('You’re in Larkspur Trading.');
  await page.getByRole('link', { name: 'Go to your account' }).click();
  await expect(page.locator('#ws-list')).toContainText('Larkspur Trading');
  await expect(page.locator('#ws-list li', { hasText: 'Larkspur Trading' })).toContainText('Member');
});

test('pending invitations show on the account page in Chinese and can be joined there', async ({ page }) => {
  const host = await owner();
  const email = await signUp(page, 'zh');
  await host.api.post(`workspaces/${host.workspaceId}/invitations`, { data: { email, role: 'admin' } });
  await page.reload();
  const invite = page.locator('#inv-list li');
  await expect(invite).toContainText('Larkspur Trading');
  await expect(invite).toContainText(`${host.email} 邀请您成为管理员`);
  await invite.getByRole('button', { name: '加入' }).click();
  await expect(page.locator('#ws-list li.current')).toContainText('Larkspur Trading');
  await expect(page.locator('#inv-panel')).toBeHidden();
});
