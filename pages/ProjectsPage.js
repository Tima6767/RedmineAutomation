import { expect } from '@playwright/test';
class ProjectsPage {
  constructor(page) {
    this.page = page;
    this.projectsHeading = page.getByRole('heading', { name: 'Projects' });
    this.redmineProjectLink = page.locator('#projects-index a[href="/projects/redmine"]');
  }

  async expectProjectsPageOpened() {
    await expect(this.projectsHeading).toBeVisible();
  }

  async expectRedmineProjectVisible() {
    await expect(this.redmineProjectLink).toBeVisible();
  }

  async searchProjects(searchTerm) {
    await this.page.fill('#q', searchTerm);
    await this.page.press('#q', 'Enter');
  }
}

export default ProjectsPage;