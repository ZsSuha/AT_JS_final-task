class LoginPage {
  get username() {
    return $("//input[@data-test='username']");
  }
  get password() {
    return $("//input[@data-test='password']");
  }
  get loginBtn() {
    return $("//input[@data-test='login-button']");
  }
  get errorMsg() {
    return $("//h3[@data-test='error']");
  }
  get pageTitle() {
    return $("//*[@class='app_logo']");
  }

  async open() {
    await browser.url("/");
  }

  async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }

  async clearInputs() {
    await this.username.clearValue();
    await this.password.clearValue();
  }
}
module.exports = new LoginPage();
