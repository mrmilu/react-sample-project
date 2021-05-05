/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Login to application with custom user, by default it uses USERNAME and PASSWORD environment variables
     * @example cy.login()
     * @example cy.login('username', 'password')
     */
    login(username?: string, password?: string): void;

    /**
     * Login to application as admin
     * @example cy.loginAdmin()
     */
    loginAdmin(): void;

    /**
     * Logout command
     * @example cy.logout()
     */
    logout(): void;
  }
}
