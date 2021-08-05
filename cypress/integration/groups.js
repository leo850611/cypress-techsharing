
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
            var address = "ABC";
            var city = "Shenzhen";
            var stateOrProvince = "Shenzhen";
            var country = "China";
            var postalCode = "666";

            cy.get("#address").clear().type(address);
            cy.get("#city").clear().type(city);
            cy.get("#stateOrProvince").clear().type(stateOrProvince);
            cy.get("#country").clear().type(country);
            cy.get("#postalCode").clear().type(postalCode);

            cy.contains('Submit').click().then(()=>{
                cy.contains(address+' '+city+' '+stateOrProvince+' '+country+' '+postalCode);
            })
        });

    })
  })
  