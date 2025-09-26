const { When, Then } = require('@cucumber/cucumber');
const RegistrationPageObject = require('../pageObjects/registrationPageObject');

const registrationPage = new RegistrationPageObject();

When('I open the register form', async () => {
  await registrationPage.openRegisterForm();
});

When('I enter {string} into the email field', async (email) => {
  await registrationPage.enterEmail(email);
});

When('I enter {string} into the password field', async (password) => {
  await registrationPage.enterPassword(password);
});

Then('I should see an error for the email field', async () => {
  await registrationPage.verifyEmailError();
});

Then('I should see an error for the password field', async () => {
  await registrationPage.verifyPasswordError();
});
