/// <reference types="cypress" />

context('login', () => {
    it('logs in as "NewUsername"', () => {
      // Clear cookies
      cy.clearCookies()
      // Clear local storage
      cy.clearLocalStorage()
      
      cy.visit("https://boardwars.onrender.com");
      cy.get('[data-testid="MenuIcon"]').click();
      cy.contains("Login").click();
      cy.get('[placeholder="email"]').type("user@mail.com");
      cy.get('[placeholder="password"]').type("Welkom123");
      cy.contains("Button", "Login").click();
      cy.contains("Login").click();
      cy.contains("NewUsername");
    });
  })
  