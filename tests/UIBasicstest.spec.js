const { test, expect } = require('@playwright/test');
test('Browser Context Playwright Test', async ({ browser }) => {
    // Chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("The Title is: " + await page.title());
    await page.locator('#username').fill("mrinmoy.blr@gmail.com");
    await page.locator("[type='password']").fill('Anjali123');
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    await page.pause();


});


test('Page Playwright Test', async ({ page }) => {
    await page.goto("https://google.com");
    console.log("The Title is: " + await page.title());
    await expect(page).toHaveTitle("Google");
});
