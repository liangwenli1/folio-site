// The site has no decorative motion: nothing animates on its own, and with reduced motion not even hover transitions.
import { expect, test } from '@playwright/test';

for (const path of ['', 'signup/']){
  test(`nothing moves on /${path}`, async ({ page }) => {
    await page.goto(`/en/${path}`);
    await page.mouse.wheel(0, 1600);
    await page.waitForTimeout(300);
    expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  });
}

test('with reduced motion even hover transitions are off', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/zh/');
  await expect(page.locator('.hero .btn-primary')).toHaveCSS('transition-duration', '0s');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
