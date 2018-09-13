describe("Light Novel Showcase", function() {
  it("Should display 6 Light Novels", function() {
    cy.visit("http://localhost:3000");
    cy.get(".sc-dnqmqq .sc-iwsKbI").should("have.length", 6);
  });
});
