const { createYield } = require("typescript")

describe('Demo', () => {
  it('should test the app', () => {
    cy.visit('/')
    cy.get('[data-test=server_response]').should('contain', 'Hello from server!')
  })
  
})
