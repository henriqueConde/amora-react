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

  it('should show 2 games at first and then show more games when show more button is clicked', () => {
    cy.getByDataCy('product-card').should('have.length', 2)
    cy.findByRole('button', { name: /show more/i }).click()

    cy.getByDataCy('product-card').should('have.length', 5)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.findByRole('button', { name: /filter/i }).click()

    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.wait(500)
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.findByText('$79.90').should('exist')
      })

    cy.findByText(/highest to lowest/i).click()
    cy.findByRole('button', { name: /filter/i }).click()

    cy.location('href').should('contain', 'sort=price%3Adesc')
    cy.wait(500)
    cy.getByDataCy('product-card')
      .first()
      .within(() => {
        cy.findByText('$233.90').should('exist')
      })
  })
})
