import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage'
import { pageFixture } from '../pages/pageFixture';

const loginPage = new LoginPage()
let generatedPesel: string;
let generatedIdNumber: string;

Given('Klient otwiera wniosek {}', async (url: string) => {
    await pageFixture.page.goto(url)
});