const { test, expect } = require('@playwright/test');
const { Console } = require('node:console');
test.only('Browser Context Playwright Test111', async ({ page }) => {
    const email = "mrinmoy.blr@gmail.com";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Anjali@12");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            //await products.nth(i).locator(".fa-shopping-cart").click();
            //await products.nth(i).locator("//*[text()=' Add To Cart']").click();  //This is chain locator
            // await products.nth(i).locator("text=Add To Cart").click(); // This is one of the ways to find locator using Text
            await products.nth(i).locator("text= Add To Cart").click(); // This is one of the ways to find locator using Text
            break;
        }
    }
    //await page.locator(".btn-custom .fa-shopping-cart").click();
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("Ind");
    const dropdown = await page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    expect(await page.locator(".user__name label").first()).toHaveText(email);  // The method toHaveText(email) is part of expect
    await page.locator(".action__submit").click();
    console.log(await page.locator(".hero-primary").textContent());
    expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    //console.log(await page.locator("label[class=ng-star-inserted]").textContent());
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();// Here we used parent css then child css
    console.log(orderID);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        if (orderID.includes(rowOrderID)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIDDetails = await page.locator(".col-text").textContent();
    expect(orderID.includes(orderIDDetails)).toBeTruthy();
});