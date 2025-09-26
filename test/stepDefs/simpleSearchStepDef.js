const { When, Then } = require('@cucumber/cucumber');
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject');

const simpleSearchPageObject = new SimpleSearchPageObject();

When('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar();
});

When(/^I enter "([^"]+)"$/, async (input) => {
  await simpleSearchPageObject.typeSearch(input);
});

Then(
  /^I should select the (\d+)(?:st|nd|rd|th) "([^"]+)" search listing$/,
  async (index, input) => {
    await simpleSearchPageObject.selectSearchResult(parseInt(index, 10), input);
  }
);
