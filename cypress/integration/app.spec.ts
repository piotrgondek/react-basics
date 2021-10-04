/// <reference types="cypress" />
describe('App', () => {
  [
    [375, 667],
    [280, 800],
  ].forEach(([width, height]) => {
    const viewport = `${width}x${height}`;

    it(`${viewport}`, () => {
      cy.viewport(width, height);

      cy.visit('/');

      cy.document().its('fonts.status').should('equal', 'loaded');

      cy.matchImageSnapshot(`[${viewport}] Whole page`,
        {
          capture: 'fullPage',
        });
    });
  });
});
