import { expect } from '@playwright/test';

class LoginPage {
  static USERNAME_INPUT = '#username';
  static PASSWORD_INPUT = '#password';
  static LOGIN_BUTTON = '#login-submit';
  static ERROR_MESSAGE = '#flash_error';

  constructor(page) {
    this.page = page;
  }

  get usernameInput() {
    return this.page.locator(LoginPage.USERNAME_INPUT);
  }

  get passwordInput() {
    return this.page.locator(LoginPage.PASSWORD_INPUT);
  }

  get loginButton() {
    return this.page.locator(LoginPage.LOGIN_BUTTON);
  }

  get errorMessage() {
    return this.page.locator(LoginPage.ERROR_MESSAGE);
  }

  async expectLoginPageOpened() {
    await expect(this.page).toHaveURL('/login');
  }

  async open() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;