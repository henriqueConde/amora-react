import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('Should be able to sign up', () => {
    const user = createUser()

    cy.visit('/sign-up')

    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /sign up now/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button', { name: /logout/i }).should('exist')
  })

  it('Should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/email/i).type('cintiantunes@gmail.com')
    cy.findByPlaceholderText(/^password/i).type('123456')

    cy.findByRole('button', { name: /sign in now/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button', { name: /logout/i }).click()

    cy.wait(500)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button', { name: /logout/i }).should('not.exist')
    cy.findByRole('link', { name: /sign in/i }).should('exist')
  })
})
