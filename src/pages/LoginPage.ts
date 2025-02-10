import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
    private usernameInput = this.page.locator('#username');
    private passwordInput = this.page.locator('#password');
    private loginButton = this.page.locator('#login');

    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}