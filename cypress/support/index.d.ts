/// <reference types="cypress" />

type ShowCaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
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
     * @example cy.getFields([{label: 'Aroamtic, name: 'aromatic'}])
     * */
    getFields(fields: FieldsAttributes[]): Chainable<Element>
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
    /**
     * Custom command to check if value is less than
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>
    /**
     * Custom command to check if value is less than
     * @example cy.selectAndApplyFilter('Under $50')
     */
    selectAndApplyFilter(value: string): Chainable<Element>
  }
}
