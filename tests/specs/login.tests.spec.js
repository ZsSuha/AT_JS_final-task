const { expect } = require("chai");
const loginPage = require("../po/login.page");
const { validUsers } = require("../user/user.data");

describe("Automated login form testing", () => {
  const validUsername = validUsers[0].username;

  beforeEach(async () => {
    await loginPage.open();
  });

  it("UC-1: Test Login form with empty credentials", async () => {
    await loginPage.username.setValue("");
    await loginPage.password.setValue("");
    await loginPage.loginBtn.click();

    const err = await loginPage.errorMsg.getText();
    expect(err).to.include("Username is required");
  });

  it("UC-2: Test Login form with credentials by passing Username", async () => {
    await loginPage.username.setValue(validUsername);
    await loginPage.password.setValue("");

    await loginPage.loginBtn.click();
    const err = await loginPage.errorMsg.getText();
    expect(err).to.include("Password is required");
  });

  validUsers.forEach(({ username, password }) => {
    it("UC-3: Test Login form with credentials by passing Username & Password", async () => {
      await loginPage.login(username, password);
      const title = await loginPage.pageTitle.getText();
      expect(title).to.equal("Swag Labs");
    });
  });
});
