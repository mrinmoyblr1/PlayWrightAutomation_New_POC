const { test, expect } = require('@playwright/test');


test.only('Browser Context Playwright Test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();


    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");


    // Chrome - plugins/cookies

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("The Title is: " + await page.title());
    await userName.fill("mrinmoy.blr1111@gmail.com");
    await password.fill('Anjali123');
    await page.locator("#terms").click();
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("mrinmoy.blr@gmail.com");
    await signIn.click();






    //await page.pause();
});


test('Page Playwright Test', async ({ page }) => {
    await page.goto("https://google.com");
    console.log("The Title is: " + await page.title());
    await expect(page).toHaveTitle("Google");
});
