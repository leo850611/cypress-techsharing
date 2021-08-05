
describe('Cypress Workshop', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it.only('can see home page', () => {
      cy.findByText("Home").should("exist");
      cy.findByText("Groups").should("exist");
      cy.findByText("Visit cypress.io to read the documentation").should("exist");
    })
  
    it.only('can see home page title', () => {
        cy.findByText("End-to-End Testing with Cypress.io Workshop").should("exist");
    })
  })
  