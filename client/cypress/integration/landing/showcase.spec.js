describe("Light Novel Showcase", function() {
  it("Should display 6 Light Novels", function() {
    cy.visit("http://localhost:3000");
    cy.get("#showcase div").should("have.length", 6);
  });

  it("Should go to expected page", function() {
    cy.visit("http://localhost:3000");
    cy.get("#showcase a:nth-child(1)").click();
  });
});
