class visitwebsite {
    verifyURL() {
          // cy.get('').should("have.text", "test");
          cy.title().should('include', 'TodoMVC: React')
    
          // Check for a specific element that exists on the page
          cy.get('.new-todo').should('be.visible')
      
          cy.request('https://todomvc.com/examples/react/dist/')
            .its('status')
            .should('eq', 200)
    }
}

export default visitwebsite;