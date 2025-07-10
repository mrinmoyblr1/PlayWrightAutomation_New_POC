const { test, expect } = require('@playwright/test');
const { Console } = require('node:console');
test('Browser Context Playwright Test111', async ({ page }) => {
    const email = "mrinmoy.blr@gmail.com";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Anjali@12");
    await page.getByRole("button", { name: 'Login' }).click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3' }).getByRole("button", { name: ' Add To Cart' }).click();
    await page.getByRole("listitem").getByRole("button", { name: '  Cart ' }).click();
    await page.locator("div li").first().waitFor();
    expect(await page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button", { name: 'Checkout' }).click();
    await page.getByPlaceholder("Select Country").pressSequentially("Ind");
    await page.getByRole("button", { name: "India" }).nth(1).clic‰k();
    await page.getByText("Place Order ").click();
    console.log(await page.locator(".hero-primary").textContent());
    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
});