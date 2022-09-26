describe('Product Page', () => {
  it('should render home sections', () => {
    // visit page
    cy.visit('/product/liz')

    cy.getByDataCy('product-info').within(() => {
      cy.findByRole('heading', { name: /liz/i }).should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
      cy.findByRole('button', { name: /wishlist/i }).should('exist')
    })

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    // recommended products
    cy.shouldRenderShowcase({
      name: 'You may like this products',
      highlight: false
    })
  })
})
