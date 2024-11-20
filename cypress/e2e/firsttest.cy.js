// <reference typees="cypress" />;

describe("First test", () => {
  it("should find components .", () => {
    cy.visit("http://localhost:3000/todo");

    cy.get("input");

    cy.get("input").type("Hello, World!");

    cy.get("input").should("have.value", "Hello, World!");
  });
});
