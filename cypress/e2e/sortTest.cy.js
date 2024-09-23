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
    cy.contains("Price(Desc)").click();
    cy.contains("Price(Desc)");
  });
  it("Select Cap", () => {
    cy.visit("/");
    cy.get("input[type='checkbox']").click();
    cy.contains("Cap").click();
    cy.contains("Cap");
  });
  it("Select Cap(Desc)", () => {
    cy.visit("/");
    cy.get("input[type='checkbox']").click();
    cy.contains("Cap(Desc)").click();
    cy.contains("Cap(Desc)");
  });
  it("Select Change Rate", () => {
    cy.visit("/");
    cy.get("input[type='checkbox']").click();
    cy.contains("Change Rate").click();
    cy.contains("Change Rate");
  });
  it("Select Change Rate(Desc)", () => {
    cy.visit("/");
    cy.get("input[type='checkbox']").click();
    cy.contains("Change Rate(Desc)").click();
    cy.contains("Change Rate(Desc)");
  });
});
