const { test, expect } = require('@playwright/test');
test('Browser Context Playwright Test111', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("mrinmoy.blr@gmail.com");
    await page.locator("#userPassword").fill("Anjali@12");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    // await page.pause();
});