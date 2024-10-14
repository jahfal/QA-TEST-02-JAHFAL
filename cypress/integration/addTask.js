class addTaskClass {
    addTask() {
        cy.xpath("//input[@id='todo-input']").type('Go to H Club SCBD {enter}')
        cy.xpath("//input[@id='todo-input']").type('Buy a bottle of Singleton {enter}')
        cy.xpath("//input[@id='todo-input']").type('Dance the night out! {enter}')
    }

    verifyTasks() {
        cy.xpath("//label[normalize-space()='Go to H Club SCBD']").should("have.text", "Go to H Club SCBD"); 
        cy.xpath("//label[normalize-space()='Buy a bottle of Singleton']").should("have.text", "Buy a bottle of Singleton"); 
        cy.xpath("//label[normalize-space()='Dance the night out!']").should("have.text", "Dance the night out!"); 
    }
}

export default addTaskClass;