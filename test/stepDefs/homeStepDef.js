const { Given } = require('@cucumber/cucumber');
const HomePageObject = require('../pageObjects/homePageObject');

const home = new HomePageObject();

Given('I am on the studentbeans homepage', async () => {
  await home.goToHomePage();
});
