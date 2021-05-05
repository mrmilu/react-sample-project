/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Updated type to hide sensitive data
     * @param {string} text
     * @param {Partial<Cypress.TypeOptions & {sensitive: boolean}>} options
     * @returns {Cypress.Chainable<Element>}
     */
    type(text: string, options?: Partial<Cypress.TypeOptions & { sensitive: boolean }>): Chainable<Element>;
  }
}
