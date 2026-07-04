import { expect } from '@playwright/test';

class SearchPage {
  constructor(page) {
    this.page = page;
  }

  static SEARCH_INPUT = '#q';
  static SEARCH_RESULTS = '#search-results';
  static FIRST_SEARCH_RESULT = '#search-results a';

  get searchInput() {
    return this.page.locator(SearchPage.SEARCH_INPUT);
  }

  get searchResults() {
    return this.page.locator(SearchPage.SEARCH_RESULTS);
  }

  get firstSearchResult() {
    return this.page.locator(SearchPage.FIRST_SEARCH_RESULT).first();
  }

  async searchFor(searchQuery) {
    await this.searchInput.fill(searchQuery);
    await this.searchInput.press('Enter');
  }

  async openFirstSearchResult() {
    await this.firstSearchResult.click();
  }

  async expectSearchValue(value) {
    await expect(this.searchInput).toHaveValue(value);
  }
}

export default SearchPage;