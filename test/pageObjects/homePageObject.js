const ParentPageObject = require('./parentPageObject');

class HomePageObject extends ParentPageObject {
    async goToHomePage() {
        await browser.url('/uk')
        await this.acceptCookiesIfPresent()
    }

    async verifyHomePage() {
        await this.isElementEqualToExpected(
            $('h2=Student deals of the day'),
            'Student deals of the day'
        )
    }
}
module.exports = HomePageObject;
