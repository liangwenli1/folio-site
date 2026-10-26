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
// The code in the password reset email, once that one (not the sign-up code before it) has arrived.
async function resetCode(email: string){
  for (let i = 0; i < 50; i++){
    const m = await lastMail(email);
    if (/重设密码|reset/i.test(m.Subject)) return m.Text.match(/\b\d{6}\b/)![0];
    await new Promise(r => setTimeout(r, 100));
  }
  throw new Error(`No reset email for ${email}`);
}

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
  // Invitations name a role by id; every workspace starts with the same four.
  const roleId = async (key: string) => ((await (await api.get(`workspaces/${workspaceId}/roles`)).json()).roles as { id: string; key: string }[]).find(r => r.key === key)!.id;
  return { email, api, workspaceId, roleId };
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
  await page.check('#consent');
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

test('the pricing page shows live prices in both languages', async ({ page }) => {
  await page.goto('/en/pricing/');
  await expect(page.locator('h1')).toHaveText('Plans that fit the size of your work');
  const studio = page.locator('[data-plan="studio"]');
  await expect(studio.locator('[data-amt]')).toHaveText('$29');
  await page.click('[data-period="yearly"]');
  await expect(studio.locator('[data-amt]')).toHaveText('$23');
  await expect(studio.locator('[data-note]')).toContainText('$276');

  await page.goto('/zh/pricing/');
  await expect(page.locator('h1')).toHaveText('按业务规模 选择配置');
  await expect(page.locator('[data-plan="company"] [data-amt]')).toHaveText('US$99');
  // What each plan includes, side by side.
  await expect(page.getByRole('row', { name: /按分组授权成员/ }).getByRole('img', { name: '包含', exact: true })).toHaveCount(1);
});

test('the calculator finds the cheapest plan and takes its add-on packs to checkout', async ({ page }) => {
  await page.goto('/en/pricing/');
  const $ = (id: string) => page.locator(`#${id}`);
  // 180 profiles: Studio with one pack is cheaper than Company.
  await expect($('calc-out')).toHaveText('180');
  await expect($('calc-plan')).toHaveText('Studio + 1 add-on pack');
  await expect($('calc-amt')).toHaveText('$44');
  await expect($('calc-detail')).toHaveText('200 profiles · $0.22 per profile a month');
  await expect($('calc-alt')).toContainText('Company costs $99 a month');
  await expect(page.locator('[data-plan="studio"] [data-fit]')).toHaveText('180 profiles: Studio + 1 add-on pack');
  await expect($('calc-cta')).toHaveAttribute('href', '/en/checkout/?plan=studio&period=monthly&packs=1');
  await page.click('[data-period="yearly"]');
  await expect($('calc-amt')).toHaveText('$35');
  await expect($('calc-cta')).toHaveAttribute('href', '/en/checkout/?plan=studio&period=yearly&packs=1');
  // The ends of the slider: Free, and a quote above the maximum.
  await $('calc-n').fill('0');
  await expect($('calc-plan')).toHaveText('Free');
  await expect($('calc-cta')).toHaveText('Try free');
  await $('calc-n').fill('400');
  await expect($('calc-out')).toHaveText('2000+');
  await expect($('calc-cta')).toHaveText('Contact sales');

  await signUp(page, 'en', '/en/checkout/?plan=studio&period=monthly&packs=1');
  // The plan is in the link, so checkout opens at paying, with the packs carried over; changing it keeps them.
  await expect($('step-pay')).toBeVisible();
  await expect($('chosen')).toHaveText('Studio + 1 add-on pack · monthly');
  await expect($('total')).toHaveText('$44');
  await page.click('#edit');
  await expect($('packs')).toHaveText('1');
  await page.click('#next');
  await expect($('total')).toHaveText('$44');
});

test('sign up, buy Studio and open the invoice', async ({ page }) => {
  await signUp(page, 'en');
  await expect(page.locator('#plan-name')).toHaveText('Free');
  await page.click('#change-plan');
  await page.waitForURL(/\/checkout\//);
  // Without a plan in the link, checkout starts at choosing one.
  await expect(page.locator('#step-plan')).toBeVisible();
  await page.click('#next');
  await expect(page.locator('#chosen')).toHaveText('Studio · monthly');
  await expect(page.locator('#total')).toHaveText('$29');
  await payWith(page, '4242 4242 4242 4242');
  await expect(page.locator('#done-text')).toHaveText('Payment received. The plan is active.');

  await page.goto('/en/account/');
  await expect(page.locator('#plan-name')).toHaveText('Studio');
  await expect(page.locator('#plan-usage')).toHaveText('0 of 100 profiles used');
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
  await expect(page.locator('#done-text')).toHaveText('Trial started. Studio is available for 7 days.');
  await page.goto('/en/account/');
  await expect(page.locator('#plan-status')).toContainText('Trial ends on');
});

test('while payments are off, paid plans say coming soon and the free trial still starts', async ({ page }) => {
  // The server says it can't take payments (as in production until a gateway is in).
  await page.route('**/plans', async r => { const res = await r.fetch(); await r.fulfill({ response: res, json: { ...await res.json(), payments: false } }); });
  await page.goto('/zh/pricing/');
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
  await expect(page.locator('#done-text')).toHaveText('Trial started. Studio is available for 7 days.');
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

test('signing up needs the terms and privacy policy agreed to, which open beside the form', async ({ page }) => {
  await page.goto('/en/signup/');
  await page.fill('#email', uniqueEmail());
  await page.fill('#password', PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.locator('#err')).toHaveText('Read and agree to the terms of service and privacy policy first.');
  await expect(page.locator('#consent')).toBeFocused();
  await expect(page.locator('#form').getByRole('link', { name: 'Terms of service' })).toHaveAttribute('target', '_blank');
  await page.check('#consent');
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/verify\//);
});

test('logging in outlasts the browser only with “Remember me”', async ({ page, context }) => {
  const email = await signUp(page, 'en');
  for (const remember of [false, true]){
    await context.clearCookies();
    await page.goto('/en/login/');
    await page.fill('#email', email);
    await page.fill('#password', PASSWORD);
    if (remember) await page.check('#remember');
    await page.click('button[type="submit"]');
    await page.waitForURL(/\/account\//);
    const { expires } = (await context.cookies()).find(c => c.name === 'folio_session')!;
    if (remember) expect(expires * 1000).toBeGreaterThan(Date.now() + 29 * 86_400_000);
    else expect(expires).toBe(-1);
  }
});

test('a forgotten password is reset in three steps; a wrong code stops the first, passwords that differ the second', async ({ page, context }) => {
  const email = await signUp(page, 'zh');
  await context.clearCookies();
  await page.goto('/zh/login/');
  await page.getByRole('link', { name: '忘记密码？' }).click();
  await page.fill('#email', email);
  await page.getByRole('button', { name: '获取验证码' }).click();
  await expect(page.locator('#sent')).toBeVisible();
  await expect(page.locator('#get')).toBeDisabled();
  const code = await resetCode(email);
  const steps = page.locator('.rs-steps li');
  await page.fill('#code', code === '000000' ? '111111' : '000000');
  await page.getByRole('button', { name: '下一步' }).click();
  await expect(page.locator('#err')).toHaveText('验证码错误，请核对邮件后重试。');
  await expect(steps.first()).toHaveAttribute('aria-current', 'step');
  await page.fill('#code', code);
  await page.getByRole('button', { name: '下一步' }).click();
  await expect(steps.nth(1)).toHaveAttribute('aria-current', 'step');
  await page.fill('#password', 'a brand new secret');
  await page.fill('#confirm', 'a brand new secrets');
  await page.getByRole('button', { name: '保存新密码' }).click();
  await expect(page.locator('#err')).toHaveText('两次输入的密码不一致。');
  await page.fill('#confirm', 'a brand new secret');
  await page.getByRole('button', { name: '保存新密码' }).click();
  await expect(page.getByRole('heading', { name: '密码已重置' })).toBeVisible();
  await expect(steps.nth(2)).toHaveAttribute('aria-current', 'step');
  await page.getByRole('link', { name: '返回登录' }).click();
  await expect(page.locator('#email')).toHaveValue(email);
  await page.fill('#password', 'a brand new secret');
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/account\//);
});

test('the contact form gives a reference number, and keeps what was written when it can’t send', async ({ page }) => {
  // The old sales form's address leads to it.
  await page.goto('/en/contact-sales/');
  await expect(page).toHaveURL(/\/en\/contact\/$/);
  await page.getByRole('radio', { name: /Support/ }).click();
  await expect(page.locator('#kind')).toHaveValue('support');
  await page.fill('#name', 'Maya Chen');
  await page.fill('#email', uniqueEmail());
  await page.selectOption('#team', '21-100');
  await page.fill('#message', 'We run 1,200 profiles across three teams.');
  await expect(page.locator('#count')).toHaveText('41 / 500');
  // Not agreeing to the privacy policy stops it there.
  await page.click('button[type="submit"]');
  await expect(page.locator('#consent')).toBeFocused();
  await page.check('#consent');
  await page.route('**/sales-inquiries', r => r.abort(), { times: 1 });
  await page.click('button[type="submit"]');
  await expect(page.locator('#err')).toHaveText('That didn’t go through. Try again later; what you wrote is still here.');
  await expect(page.locator('#message')).toHaveValue('We run 1,200 profiles across three teams.');
  await page.click('button[type="submit"]');
  await expect(page.locator('#number')).toHaveText(/^Reference #\d{6}$/);
});

test('an emailed invitation leads a new person through sign-up into the workspace', async ({ page }) => {
  const host = await owner();
  const email = uniqueEmail();
  await host.api.post(`workspaces/${host.workspaceId}/invitations`, { data: { email, roleId: await host.roleId('member') } });
  const mail = await lastMail(email);
  expect(mail.Subject).toBe(`${host.email} invited you to Larkspur Trading on Folio`);
  const link = mail.Text.match(/https?:\/\/\S+\/invite\/\?token=[\w-]+/)![0];

  await page.goto(link.replace(/^https?:\/\/[^/]+/, ''));
  await expect(page.locator('#lead')).toHaveText(`${host.email} invited you to join the Folio workspace Larkspur Trading as a member.`);
  await expect(page.locator('#for')).toContainText(`Invited email: ${email} · Expires on `);
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect(page.locator('#email')).toHaveValue(email);
  await page.fill('#password', PASSWORD);
  await page.check('#consent');
  await page.click('button[type="submit"]');
  await page.waitForURL(/\/verify\//);
  await page.fill('#code', await emailCode(email));
  await page.click('button[type="submit"]');

  await page.waitForURL(/\/invite\//);
  await page.getByRole('button', { name: 'Join Larkspur Trading' }).click();
  await expect(page.locator('#lead')).toHaveText('Joined Larkspur Trading.');
  await page.getByRole('link', { name: 'Go to account' }).click();
  await expect(page.locator('#ws-list')).toContainText('Larkspur Trading');
  await expect(page.locator('#ws-list li', { hasText: 'Larkspur Trading' })).toContainText('Member');
});

test('pending invitations show on the account page in Chinese and can be joined there', async ({ page }) => {
  const host = await owner();
  const email = await signUp(page, 'zh');
  await host.api.post(`workspaces/${host.workspaceId}/invitations`, { data: { email, roleId: await host.roleId('admin') } });
  await page.reload();
  const invite = page.locator('#inv-list li');
  await expect(invite).toContainText('Larkspur Trading');
  await expect(invite).toContainText(`${host.email} 邀请您成为管理员`);
  await invite.getByRole('button', { name: '加入' }).click();
  await expect(page.locator('#ws-list li.current')).toContainText('Larkspur Trading');
  await expect(page.locator('#inv-panel')).toBeHidden();
});
