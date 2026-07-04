class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async clickHomeLink() {
    await this.page.click('.home');
  }

  async clickProjectsLink() {
    await this.page.click('.projects');
  }

  async clickHelpLink() {
    await this.page.click('.help');
  }

  async clickLoginButton() {
    await this.page.click('.login');
    }
    
   
}
export default HomePage;