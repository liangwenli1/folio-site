// The landing page's animations: they play when their section comes into view, and with reduced motion the finished
// state is there from the start.
import { expect, test } from '@playwright/test';

test('feature animations play once their section is in view', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('.sync')).not.toHaveClass(/done/);
  await page.locator('#inside').scrollIntoViewIfNeeded();
  await expect(page.locator('.vectors')).toHaveClass(/play/);
  await expect(page.locator('.compare')).toHaveClass(/play/);
  await page.locator('.sync').scrollIntoViewIfNeeded();
  await expect(page.locator('.sync')).toHaveClass(/done/);
  await expect(page.locator('.sync .fail')).toHaveText('Element not found');
});

test('with reduced motion everything shows its finished state', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/zh/');
  for (const sel of ['.vectors', '.compare']) await expect(page.locator(sel)).toHaveClass(/play/);
  await expect(page.locator('.sync')).toHaveClass(/done/);
  await expect(page.locator('.compare-stamp')).toHaveCSS('opacity', '0.9');
  await expect(page.locator('.sync .fail')).toHaveCSS('opacity', '1');
  await expect(page.locator('#idcard .stamp')).not.toHaveClass(/thud/);
});
