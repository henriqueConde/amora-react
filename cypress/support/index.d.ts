/// <reference types="cypress" />

type ShowCaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /*
     * Custom command to check banner in page
     * @example cy.getByDataCy('selector')
     * */
    getByDataCy(selector: string): Chainable<JQuery<HTMLElement> | Element>
    /*
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     * */
    shouldRenderBanner(): Chainable<Element>
    /*
     * Custom command to check banner in page
     * @example cy.shouldRenderShowcase({ name: 'New Products', highlight: true })
     * */
    shouldRenderShowcase(attr: ShowCaseAttributes): Chainable<Element>
  }
}
