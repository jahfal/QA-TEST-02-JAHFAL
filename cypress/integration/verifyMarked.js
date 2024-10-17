class verifyMarkedClass {
  verifyMarkedTasks() {
    cy.xpath("//input[@class='toggle']").click({multiple: true});
    cy.get(".completed").last().should("have.class", "completed");
  }
}

export default verifyMarkedClass;