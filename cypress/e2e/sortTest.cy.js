describe("Options Tests", () => {
  it("Select Price", () => {
    cy.visit("/");
    cy.get("input[type='checkbox']").click();
    cy.contains("Price").click();
    cy.contains("Price");
  });
  it("Select Price(Desc)", () => {
    cy.visit("/");
    cy.get("input[type='checkbox']").click();
    cy.contains("Price").click();
    cy.contains("Price");
  });
});
