/// <reference types="cypress" />

context("Visit for LambdaTest Test Scenario 1", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo");
  });

  // https://on.cypress.io/interacting-with-elements

  it("Click on Progress Bar and slides", () => {
    var progress = cy.get(".w-3\\/12 .mb-10").eq(3);

    progress.click();

    cy.contains("Drag & Drop Sliders").click();

    cy.get("#slider3 h4").should("have.text", " Default value 15");

    //Click on 15 and slide value to 95
    cy.get('input[value="15"]').invoke("val", 95).trigger("change");
    //cy.get("#rangeSuccess").should("have.text", "95");
    //Click on 15 and change number value to 95 in right
    cy.get("#rangeSuccess")
      .invoke("val", 95)
      .trigger("change")
      .should("have.text", 95);
  });
});
