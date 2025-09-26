const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async openSearchBar() {
    await this.searchButton.click()
    await this.searchInput.waitForDisplayed({ timeout: 10000 })
  }

  async typeSearch(term) {
    const entry = this.searchInput
    await entry.setValue(term)
  }

  async selectSearchResult(index) {
    const items = await this.searchResults
    if (items.length < index) {
      throw new Error(
        `Asked for result #${index} but only found ${items.length}`
      )
    }
    await items[index - 1].click()
  }

  get cookieAcceptButton() {
    return $('#onetrust-accept-btn-handler')
  }

  get searchButton() {
    return $('button[data-testid="nav-search-desktop"]')
  }

  get searchInput() {
    return $('input[data-testid="search-input"]')
  }

  get searchResults() {
    return $$('a[data-testid="search-result-offer"]')
  }
}

module.exports = SimpleSearchPageObject
