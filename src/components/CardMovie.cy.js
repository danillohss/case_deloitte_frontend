import CardMovie from './CardMovie.vue'

describe('<CardMovie />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CardMovie)
  })
})