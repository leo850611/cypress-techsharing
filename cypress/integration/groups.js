
describe('Cypress Workshop', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/groups')
      //cy.findByText("Groups").click();
    })
  
    it.only('can see Shenzhen data', () => {
        cy.findByText("Shenzhen Tech Community").should("exist");
    })

    it.only('can edit Location', () => {
        cy.contains('Shenzhen Tech Community').parent()
        .findByRole("button", { name: "Edit" })
        .click();
        
        cy.contains('Shenzhen Tech Community').parent()
        .findByRole("button", { name: "Edit" })
        .click()
        .then(() => {
            cy.get("#address").clear().type("ABC");
            cy.get("#city").clear().type("Shenzhen");
            cy.get("#stateOrProvince").clear().type("Shenzhen");
            cy.get("#country").clear().type("China");
            cy.get("#postalCode").clear().type("666");

            cy.contains('Submit').click()
        });

    })
  })
  