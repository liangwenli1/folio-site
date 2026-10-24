// Layout guarantees that screenshots can miss: nothing scrolls sideways on a phone.
import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

for (const lang of ['en', 'zh']){
  test(`no sideways scrolling on a phone (${lang})`, async ({ page }) => {
    for (const path of ['', 'login/', 'signup/', 'forgot/']){
      await page.goto(`/${lang}/${path}`);
      const extra = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(extra, `/${lang}/${path}`).toBe(0);
    }
  });
}
