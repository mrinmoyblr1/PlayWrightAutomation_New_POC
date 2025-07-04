const { test, expect } = require('@playwright/test');
test('Browser Context Playwright Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    // Chrome - plugins/cookies
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("The Title is: " + await page.title());
    await userName.fill("mrinmoy.blr1111@gmail.com");
    await password.fill('Anjali@12');
    await page.locator("#terms").click();
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill('learning');
    await page.locator("#terms").click();
    await signIn.click();
    // console.log(await cardTitles.nth(1).textContent());
    console.log(await cardTitles.first().textContent());
    // Get Names of all the Products
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    //await page.pause();
});
test('Page Playwright Test', async ({ page }) => {
    await page.goto("https://google.com");
    console.log("The Title is: " + await page.title());
    await expect(page).toHaveTitle("Google");
});


test.only('Ui Controls', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant");
    await page.pause();
});
