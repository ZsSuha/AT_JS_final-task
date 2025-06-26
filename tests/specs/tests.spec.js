describe("first test", () => {
  it("should open www.epam.com", async () => {
    const expecedTitle =
      "EPAM | Software Engineering & Product Development Services";

    await browser.url("/");
    await expect(browser).toHaveTitle(expecedTitle);
  });
  it("should open hamburger menu", async () => {
    await browser.url("/");
    await $(".hamburger-menu__button").click();
    await expect($("//div[@class='os-content']")).toBeDisplayed();
  });

  it.only("should navigate to Services page", async () => {
    await browser.url("/");
    const links = await $$(".top-navigation__item-link");

    await links[0].click();
    await expect(browser).toHaveTitle("Services | EPAM");
  });
});
