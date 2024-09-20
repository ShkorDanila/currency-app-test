describe("Modal Tests", () => {
  it("Should search input change value", () => {
    cy.visit("/");
    cy.get('input[type="text"]')
      .type("bitcoin")
      .should("have.value", "bitcoin");
  });
  it("Should modal be opened", () => {
    cy.visit("/");
    cy.get("button").contains("Add").click();
    cy.get("dialog");
  });
  it("Should modal add coin", () => {
    cy.visit("/bitcoin");
    cy.contains("Add").click();
    cy.get("dialog")
      .get("section")
      .get('input[type="number"]')
      .type("3")
      .should("have.value", "3");
    cy.get("dialog").contains("Add").click();
  });
  it("Should portfolio be opened", () => {
    cy.visit("/bitcoin");
    cy.get("header").get("section").contains("USD").click();
    cy.get("dialog").contains("No coins");
  });
  it("Should portfolio not be empty", () => {
    cy.visit("/bitcoin");
    cy.contains("Add").click();
    cy.get("dialog")
      .get("section")
      .get('input[type="number"]')
      .type("3")
      .should("have.value", "3");
    cy.get("dialog").contains("Add").click();
    cy.visit("/bitcoin");
    cy.get("header").get("section").contains("USD").click();
    cy.get("dialog").contains("BTC");
  });
});
