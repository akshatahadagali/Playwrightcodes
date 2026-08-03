
import { test, expect } from '@playwright/test';

test('selectors', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.click ('id=user-name')
  //await page.locator('id=user-name').fill('standard_user')
  await page.locator('[id="user-name"]').fill ('akshata')
 
  //using css selector 
  //#login-button
  await page.locator('#login-button') .click
  //using x path 
  await page.locator('#login-button') .click
   await page.locator('xpath=//input[@name="password"]').fill('guest')
   await page.locator('//input[@name="password"]').fill ('test')
   //using text
   await page.locator('text=Login').click();
  
   
  
});