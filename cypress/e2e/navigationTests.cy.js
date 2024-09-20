describe("Navigation Tests", () => {
  it("Should navigate home", () => {
    cy.visit("/bitcoin");
    cy.get("button").contains("Back").click();
  });
  it("Should have 404", () => {
    cy.visit("/wefwef");
    cy.wait(5000);
    cy.contains("An error has occurred: Request failed with status code 404");
  });
  it("Should navigate to Coin Page", () => {
    cy.visit("/");
    cy.contains("BTC").click();
  });
});
