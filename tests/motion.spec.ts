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

test('the demo plays in view, pauses, and jumps to a scene', async ({ page }) => {
  await page.goto('/en/');
  const root = page.locator('#demo-root'), toggle = page.locator('#demo-toggle');
  await root.scrollIntoViewIfNeeded();
  await expect(root.locator('.dstep').first()).toHaveClass(/done/);
  await expect(root).toHaveClass(/stamped/, { timeout: 8000 });
  await toggle.click();
  await expect(toggle).toHaveText('Play demo');
  await expect(root).toHaveClass(/paused/);
  // A scene button plays from that scene.
  await page.locator('[data-go="4"]').click();
  await expect(root).toHaveAttribute('data-scene', '4');
  await expect(page.locator('[data-go="4"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(toggle).toHaveText('Pause demo');
  await expect(root).toHaveClass(/passed/, { timeout: 8000 });
});

test('with reduced motion everything shows its finished state', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/zh/');
  for (const sel of ['.vectors', '.compare']) await expect(page.locator(sel)).toHaveClass(/play/);
  await expect(page.locator('.sync')).toHaveClass(/done/);
  await expect(page.locator('.compare-stamp')).toHaveCSS('opacity', '0.9');
  await expect(page.locator('.sync .fail')).toHaveCSS('opacity', '1');
  await expect(page.locator('#idcard .stamp')).not.toHaveClass(/thud/);
  // The demo waits on the first scene, finished, and its buttons show the others finished.
  await expect(page.locator('#demo-toggle')).toHaveText('播放演示');
  await expect(page.locator('#demo-root')).toHaveClass(/stamped/);
  await page.locator('[data-go="3"]').click();
  await expect(page.locator('#demo-root')).toHaveClass(/risk/);
  await expect(page.locator('.drisk')).toBeVisible();
});
