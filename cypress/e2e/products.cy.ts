import {
  priceFields,
  brandFields,
  sortFields,
  categoriesFields
} from '../../src/utils/filters/fields'

describe('Products page', () => {
  before(() => {
    cy.visit('/products')
  })

  it('should render filters', () => {
    cy.findByRole('heading', { name: /sort/i })
    cy.findByRole('heading', { name: /price/i })
    cy.findByRole('heading', { name: /brand/i })
    cy.findByRole('heading', { name: /categories/i })

    cy.getFields(priceFields)
    cy.getFields(brandFields)
    cy.getFields(sortFields)
    cy.getFields(categoriesFields)
  })

  it('should show 2 products at first and then show more products when show more button is clicked', () => {
    cy.getByDataCy('product-card').should('have.length', 2)
    cy.findByRole('button', { name: /show more/i }).click()

    cy.getByDataCy('product-card').should('have.length', 5)
  })

  it('should order by price', () => {
    cy.selectAndApplyFilter('Lowest to highest')

    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.findByText('$79.90').should('exist')
      })

    cy.selectAndApplyFilter('Highest to lowest')

    cy.location('href').should('contain', 'sort=price%3Adesc')
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.findByText('$233.90').should('exist')
      })
  })

  it('should filter by price', () => {
    cy.selectAndApplyFilter('Under $100')
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(100)
      })

    cy.selectAndApplyFilter('Under $150')
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(150)
      })

    cy.selectAndApplyFilter('Under $250')
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(250)
      })

    cy.selectAndApplyFilter('Under $500')
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(500)
      })
  })

  it('should be able to select and apply brand and category filters', () => {
    cy.selectAndApplyFilter('Lumiere Eau')
    cy.selectAndApplyFilter('Aromatic')

    cy.location('href').should(
      'contain',
      'brand=lumiere+eau&categories=aromatic'
    )
  })
})
