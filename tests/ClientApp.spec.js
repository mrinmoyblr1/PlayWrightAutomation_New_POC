const { test, expect } = require('@playwright/test');
const { Console } = require('node:console');
test.only('Browser Context Playwright Test111', async ({ page }) => {
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("mrinmoy.blr@gmail.com");
    await page.locator("#userPassword").fill("Anjali@12");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();

    for (let i = 0; i < count; i++) {
        //const aa=products.nth(i).locator("b").textContent();
        console.log(await products.nth(i).locator("b").textContent());


    }



    // await page.pause();
});