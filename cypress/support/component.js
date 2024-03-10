// cypress/support/component.js

// Adicione esta linha para tornar o Cypress globalmente disponível
/* global Cypress */

import { mount } from 'cypress/vue';

Cypress.Commands.add('mount', mount);

// Restante do seu código...

// Exemplo de uso:
// cy.mount(MyComponent)