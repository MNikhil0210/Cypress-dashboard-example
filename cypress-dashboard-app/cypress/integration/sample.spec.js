describe("Sample text check", () => {

  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Cypress dashboard test", () => {
    cy.get("#root > main > div.makeStyles-paper-1 > h1").should("have.text", "Sign in");
  });
});
