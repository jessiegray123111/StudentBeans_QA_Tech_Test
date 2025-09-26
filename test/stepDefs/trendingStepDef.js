const { When, Then } = require('@cucumber/cucumber');
const TrendingPageObject = require('../pageObjects/trendingPageObject');

const trendingPageObject = new TrendingPageObject();

When('I navigate to Trending Now', async () => {
  await trendingPageObject.goToTrendingNow();
});

Then(/^I open the (\d+)(?:st|nd|rd|th) discount within the Trending Now offers list$/, async (index) => {
  await trendingPageObject.openTrendingOffer(parseInt(index, 10));
});

