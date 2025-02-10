import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;

Given('I navigate to {string}', async (url: string) => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate(url);
});

When('I enter username {string} and password {string}', async (username: string, password: string) => {
    await loginPage.login(username, password);
});

Then('I should see the dashboard', async () => {
    await expect(page.locator('#dashboard')).toBeVisible();
    await browser.close();
});