describe("1 to 50 Game Automation", () => {
  beforeEach(() => {
    cy.visit("https://zzzscore.com/1to50/en/");
  });

  it("should select numbers from 1 to 50", () => {
    for (let number = 1; number <= 50; number++) {
      cy.xpath(
        `//div[normalize-space()='${number}']//span[@class='box']`
      ).click();
    }
  });
});
