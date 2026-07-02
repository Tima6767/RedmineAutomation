import { expect } from '@playwright/test';
class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-submit');
    this.errorMessage = page.locator('#flash_error');
  }

  async expectLoginPageOpened() {
   await expect(this.page).toHaveURL('https://www.redmine.org/login');
  }

   async open() {
    await this.page.goto('https://www.redmine.org/login');
  }
   async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;