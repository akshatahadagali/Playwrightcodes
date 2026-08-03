import { test, expect } from '@playwright/test';

test('playwright testing', async ({ page , context}) => {
   await context.tracing.start(
    {
      snapshots: true , 
      screenshots: true
    });


  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  //test code 
 //await context.tracing.stop({ path: 'tests-trace.zip' });

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
