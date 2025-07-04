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
test('Ui Controls', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='document']");
    await dropdown.selectOption("Consultant");
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked()); // It will retuern boolean value.
    await page.locator("#terms").click();
    expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy(); // Here we are checking the checkbox is unchecked. 
    await expect(page.locator(".blinkingText")).toHaveAttribute('class', 'blinkingText');
    // Another option
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
    // await page.pause();
});



test.only('Child Windows Handles', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='document']");


    const [newPage] = Promise.all(
        [
            context.waitForEvent('page'),  // This will listen for any page
            documentLink.click(),   // New page is opened here
        ])


        




});



