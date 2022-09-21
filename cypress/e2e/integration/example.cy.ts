describe('Cypress TS', () => {
  it.skip('should go to google', () => {
    cy.google()
  })

  it('should visit won games', () => {
    cy.visit('http://localhost:3000')
    cy.findByText(/news/i).should('exist')
  })
})
