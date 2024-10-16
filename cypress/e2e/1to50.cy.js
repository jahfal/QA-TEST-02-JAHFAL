describe('1 to 50 Game Automation', () => {
  beforeEach(() => {
    cy.visit('https://zzzscore.com/1to50/en/'); // Step 1: Open the game page
  });

  it('should select numbers from 1 to 50', () => {
    for (let number = 1; number <= 50; number++) {
      cy.xpath(`//div[normalize-space()='${number}']//span[@class='box']`) // Step 2: Dynamic XPath
        .click(); // Step 3: Click the number
    }
    
    // Step 4: Verify game completion (if applicable)
    // cy.get('.game-status-selector') // Replace with actual game status selector
    //   .should('contain', 'Congratulations!'); // Example status message
  });
});
