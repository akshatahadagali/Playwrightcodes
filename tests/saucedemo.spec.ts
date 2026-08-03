import { test, expect } from '@playwright/test';

test('saucedemo', async ({ page }) => {

  await page.locator('body').click();
 //await page.goto('chrome-error://chromewebdata/');

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('error_user');

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

 // await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('div').filter({ hasText: 'Swag Labs' }).nth(5).click();
  await page.goto('https://www.saucedemo.com/');
});