import HomePage from '../../pages/HomePage.js';
import LoginPage from '../../pages/LoginPage.js';
import ProjectsPage from '../../pages/ProjectsPage.js';
import SearchPage from '../../pages/SearchPage.js';
import { test, expect, } from '@playwright/test';
test.describe('redmine tests', () => {
  test('Verify Redmine top navigation links work correctly', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigateToHome();

    await homePage.clickHomeLink();
    await expect(page).toHaveURL('https://www.redmine.org/');

    await homePage.clickProjectsLink();
    await expect(page).toHaveURL('https://www.redmine.org/projects');

    await homePage.clickHomeLink();
    await expect(page).toHaveURL('https://www.redmine.org/');

    await homePage.clickHelpLink();
    await expect(page).toHaveURL('https://www.redmine.org/guide');

    await homePage.clickHomeLink();
    await expect(page).toHaveURL('https://www.redmine.org/');

    await homePage.clickLoginButton();
    await expect(page).toHaveURL('https://www.redmine.org/login');
});

test('Verify Redmine project is displayed on Projects page', async ({ page }) => {
  const homePage = new HomePage(page);
  const projectsPage = new ProjectsPage(page);

  await homePage.navigateToHome();
  await homePage.clickProjectsLink();

  await expect(page).toHaveURL('https://www.redmine.org/projects');
  await projectsPage.expectProjectsPageOpened();
  await projectsPage.expectRedmineProjectVisible();
});
       
 test('Verify search functionality', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);

  const searchQuery = 'plugin';

  await homePage.navigateToHome();

  await searchPage.searchFor(searchQuery);

  await expect(page).toHaveURL(/\/search/);
  await expect(page.locator('#q')).toHaveValue(searchQuery);
  await expect(searchPage.searchResults).toContainText(searchQuery);

  await searchPage.openFirstSearchResult();

  await expect(page).not.toHaveURL(/\/search/);
});

test('Verify Sign in page elements and navigation back to Home page', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigateToHome();

  await homePage.clickLoginButton();
  await expect(page).toHaveURL('https://www.redmine.org/login');
  await loginPage.expectLoginPageOpened();
  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL('https://www.redmine.org/');

});

test('Verify invalid login validation and form state', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const invalidUsername = 'wrong_user_12345';
  const invalidPassword = 'wrong_pass_12345';

  await loginPage.open();
  await loginPage.login(invalidUsername, invalidPassword);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(page).toHaveURL('https://www.redmine.org/login');
  await expect(loginPage.usernameInput).toHaveValue(invalidUsername);
  await expect(loginPage.passwordInput).toHaveValue('');
});
});