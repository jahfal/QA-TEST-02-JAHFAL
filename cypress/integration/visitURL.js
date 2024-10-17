class visitwebsite {
  verifyURL() {
    cy.title().should("include", "TodoMVC: React");
    cy.get(".new-todo").should("be.visible");
    cy.request("https://todomvc.com/examples/react/dist/")
      .its("status")
      .should("eq", 200);
  }
}

export default visitwebsite;
