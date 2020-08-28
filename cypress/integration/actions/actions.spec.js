/// <reference types="cypress" />

context("Common user cases", () => {
  beforeEach(() => {
    cy.visit("./src/public/index.html");
  });

  it("E .click() - click on a DOM element", () => {
    cy.get("#input").type("E");

    cy.get("#button").click();

    cy.get("#ashPokemons").should("contain", "2");
  });

  it("NESO .click() - click on a DOM element", () => {
    cy.get("#input").type("NESO");

    cy.get("#button").click();

    cy.get("#ashPokemons").should("contain", "4");
  });

  it("ENSNSNSNSNS .click() - click on a DOM element", () => {
    cy.get("#input").type("NSNSNSNSNS");

    cy.get("#button").click();

    cy.get("#ashPokemons").should("contain", "2");
  });

  it("Huge string .click() - click on a DOM element", () => {
    const worstCaseScenario = new Array(5000).fill("N").join("");

    cy.get("#input").type(worstCaseScenario);

    cy.get("#button").click();

    cy.get("#ashPokemons").should("contain", "5001");
  });
});
