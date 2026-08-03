//import { from } from "node:stream/iter";
import {test, expect} from '@playwright/test';

 test ('My Test', async ({page}) => {

    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');

 })


