/* eslint-env node, mocha */

// for unhandled promise rejection debugging
process.on("unhandledRejection", r => console.error(r)); // eslint-disable-line no-console

const assert = require("assert");
const { setupWebdriver } = require("../utils/setupWebdriver");
const { getChromeElementBy } = require("../utils/getChromeElementBy");
const {
  nav: { navigateToURL },
} = require("../utils/nav");
const { defaultTestPreferences } = require("../config");

async function getInfobar(driver) {
  return getChromeElementBy.tagName(driver, "notification");
}

if (process.env.UI === "native-ui") {
  describe("Infobar interaction", function() {
    // This gives Firefox time to start, and us a bit longer during some of the tests.
    this.timeout(15000);

    let driver;

    before(async () => {
      driver = await setupWebdriver.promiseSetupDriver(defaultTestPreferences);
      await setupWebdriver.installExtension(driver);
      // Allow our extension some time to set up the initial ui
      await driver.sleep(1000);
    });

    after(async () => {
      driver.quit();
    });

    it("The translation infobar is not shown on about:debugging", async () => {
      await navigateToURL(driver, "about:debugging");
      const notice = await getInfobar(driver);
      assert(notice === null);
    });

    it("The translation infobar is shown on a web-page with Spanish content", async () => {
      await navigateToURL(
        driver,
        "http://0.0.0.0:4000/es.wikipedia.org-2021-01-20-welcome-box.html",
      );
      const infobarElement = await getInfobar(driver);
      assert(infobarElement !== null);
      const valueAttribute = await infobarElement.getAttribute("value");
      assert.equal(valueAttribute, "translation");
    });

    /*
    it("the translate button exists", async () => {
      const notice = await getInfobar(driver);
      assert(notice !== null);
      const button = await promiseBrowserTranslationInfobar(driver);
      assert(typeof button === "object");
    });

    it("responds to click", async () => {
      const button = await promiseBrowserTranslationInfobar(driver);
      button.click();
      // TODO: Add some actual assertion here, verifying that the main interface is shown
      assert(true);
    });
     */
  });
}
