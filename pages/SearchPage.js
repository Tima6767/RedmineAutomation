class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#q');
    this.searchResults = page.locator('#search-results');
    this.firstSearchResult = this.searchResults.locator('a').first();
  }

  async searchFor(searchQuery) {
    await this.searchInput.fill(searchQuery);
    await this.searchInput.press('Enter');
  }

  async openFirstSearchResult() {
    await this.firstSearchResult.click();
  }
}

export default SearchPage;