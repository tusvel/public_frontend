/// <reference types="cypress" />
Cypress.Commands.add('login', (email: string, password: string) => {});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

export {};
