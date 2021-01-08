describe("Add plates via Bulk upload CSV file", () => {

  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check if newly added plates are visible in inventory", () => {
    cy.get("#root > main > div.makeStyles-paper-1 > h1").should("have.text", "Sign in");
  });
});
