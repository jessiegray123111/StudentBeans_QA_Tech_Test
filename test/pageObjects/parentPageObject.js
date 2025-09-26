const { assert } = require('chai');

class ParentPageObject {
  async isElementEqualToExpected(element, expectedText) {
    const elementText = await element.getText();
    assert.strictEqual(
      elementText,
      expectedText,
      `Expected text "${expectedText}" but found "${elementText}"`
    );
  }

  get cookieAcceptButton() {
    return $('#onetrust-accept-btn-handler');
  }

  async acceptCookiesIfPresent() {
    const btn = await this.cookieAcceptButton;
    if (await btn.isExisting()) {
      await btn.click();
    }
  }
}

module.exports = ParentPageObject;
  