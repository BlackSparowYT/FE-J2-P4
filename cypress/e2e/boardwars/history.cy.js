describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://boardwars.onrender.com");
    cy.get('[data-testid="MenuIcon"]').click();
    cy.contains("History").click();
    cy.contains("noetnoud");
  })
})