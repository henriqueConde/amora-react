describe('Home Page', () => {
  it('should render home sections', () => {
    // visit page
    cy.visit('/')

    // select banners
    cy.shouldRenderBanner()

    // News section
    cy.shouldRenderShowcase({ name: 'New Products', highlight: false })
    cy.shouldRenderShowcase({ name: 'Most Popular', highlight: true })
    cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true })
    cy.shouldRenderShowcase({ name: 'Promotional products', highlight: true })
  })
})
