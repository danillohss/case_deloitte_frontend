/* eslint-disable no-undef */
// cypress/integration/seu-arquivo-de-teste.spec.js

/// <reference types="cypress" />

describe('Add movie to a favorite', () => {
    it('acessando url', () => {
        cy.visit('http://localhost:8080/');
        cy.wait(3000);
        cy.get(':nth-child(1) > #card').click();
        cy.wait(3000);
        cy.get('#checkboxNoLabel').click();
        cy.wait(3000);
        cy.get(':nth-child(2) > .btn').click();
        cy.wait(3000);

        // Removendo dos favoritos \/
        cy.get('#card').click();
        cy.wait(3000);
        cy.get('#checkboxNoLabel').click();
    });
});