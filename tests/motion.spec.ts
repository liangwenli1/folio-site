// Nothing on the site moves on its own: the home page and the sign-in pages show a still picture of the workbench
// (PLAN 6.21, 1.1). With reduced motion not even hover transitions run.
import { expect, test } from '@playwright/test';

for (const path of ['', 'login/', 'signup/', 'forgot/']){
  test(`nothing moves on /${path}`, async ({ page }) => {
    await page.goto(`/en/${path}`);
    await expect(page.locator('.shot img').first()).toBeVisible();
    await page.mouse.wheel(0, 1600);
    await page.waitForTimeout(500);
    expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  });
}

test('with reduced motion even hover transitions are off', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/zh/');
  await expect(page.locator('.phero .btn-primary')).toHaveCSS('transition-duration', '0s');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
