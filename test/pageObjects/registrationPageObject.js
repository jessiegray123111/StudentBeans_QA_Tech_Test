class RegistrationPageObject {
  async openRegisterForm() {
    const registerButton = await $('=Register');
    await registerButton.waitForClickable();
    await registerButton.click();

    await $('input[type="email"]').waitForDisplayed({ timeout: 5000 });
    await $('input[type="password"]').waitForDisplayed({ timeout: 5000 });
  }

  async enterEmail(email) {
    const emailInput = await $('input[type="email"]');
    await emailInput.waitForDisplayed();
    await emailInput.setValue(email);
  }

  async enterPassword(password) {
    const passwordInput = await $('input[type="password"]');
    await passwordInput.waitForDisplayed();
    await passwordInput.setValue(password);
  }

  async verifyEmailError() {
    const bodyText = await $('body').getText();
    if (!bodyText.includes('The email is invalid.')) {
      throw new Error('Email error message not found');
    }
  }

  async verifyPasswordError() {
    const bodyText = await $('body').getText();
    if (!bodyText.includes('Your password must be at least 8 characters')) {
      throw new Error('Password error message not found');
    }
  }
}

module.exports = RegistrationPageObject;
