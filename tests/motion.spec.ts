// The site has no decorative motion: nothing animates on its own but the workbench walkthrough, which pauses with its
// button, when it is out of view and when the page is hidden, and with reduced motion stands still. With reduced
// motion not even hover transitions run.
import { expect, test, type Page } from '@playwright/test';

const others = (page: Page) => page.evaluate(() => document.getAnimations().filter(a => !((a.effect as KeyframeEffect | null)?.target as Element | null)?.closest('.showcase')).length);
const frameAfter = async (page: Page, ms: number) => { await page.waitForTimeout(ms); return page.locator('.showcase').getAttribute('data-frame'); };

for (const path of ['', 'signup/']){
  test(`nothing but the walkthrough moves on /${path}`, async ({ page }) => {
    await page.goto(`/en/${path}`);
    await expect(page.locator('.showcase')).toHaveAttribute('data-state', 'playing');
    await page.mouse.wheel(0, 1600);
    await page.waitForTimeout(300);
    expect(await others(page)).toBe(0);
  });
}

test('the walkthrough plays, and pauses with its button, out of view and while the page is hidden', async ({ page }) => {
  await page.goto('/en/');
  const demo = page.locator('.showcase');
  await expect(demo).toHaveAttribute('data-state', 'playing');
  await expect(demo).not.toHaveAttribute('data-frame', '0', { timeout: 15_000 });
  // The camera moves in, so the workbench's text is close to its real size.
  await expect.poll(async () => Number(await demo.getAttribute('data-zoom')), { timeout: 15_000 }).toBeGreaterThan(1.3);

  await demo.getByRole('button', { name: 'Pause walkthrough' }).click();
  await expect(demo).toHaveAttribute('data-state', 'paused');
  const at = await demo.getAttribute('data-frame');
  expect(await frameAfter(page, 4000)).toBe(at);
  await demo.getByRole('button', { name: 'Play walkthrough' }).click();
  await expect(demo).toHaveAttribute('data-state', 'playing');

  await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
  await expect(demo).toHaveAttribute('data-state', 'paused');
  await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: false, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
  await expect(demo).toHaveAttribute('data-state', 'playing');

  await page.mouse.wheel(0, 3000);
  await expect(demo).toHaveAttribute('data-state', 'paused');
});

test('with reduced motion the walkthrough shows the profile list, and even hover transitions are off', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/zh/');
  const demo = page.locator('.showcase');
  await expect(demo).toHaveAttribute('data-state', 'still');
  expect(await frameAfter(page, 3000)).toBe('0');
  await expect(demo.getByRole('button')).toBeHidden();
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(page.locator('.hero .btn-primary')).toHaveCSS('transition-duration', '0s');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
