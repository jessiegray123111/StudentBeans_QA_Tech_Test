const ParentPageObject = require('./parentPageObject')

class TrendingPageObject extends ParentPageObject {
  async goToTrendingNow() {
    await browser.url('/uk/trending-discounts')

    await browser.waitUntil(
      async () => (await $$('article[itemtype*="Offer"]')).length > 0,
      { timeout: 10000, timeoutMsg: 'No offers found in Trending Now' }
    )
  }

  async openTrendingOffer(index) {
    let offers = await $$('article[itemtype*="Offer"]')

    while (offers.length < index) {
      await browser.execute(() => window.scrollBy(0, window.innerHeight))
      await browser.pause(300)
      offers = await $$('article[itemtype*="Offer"]')
    }

    const offer = offers[index - 1]
    await offer.scrollIntoView()
    await offer.click()
  }
}

module.exports = TrendingPageObject
