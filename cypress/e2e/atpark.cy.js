describe('pay_for_parking', () => {
  it('passes', () => {
    cy.visit("https://atpark.at.govt.nz")
    cy.origin('https://federation.aucklandtransport.govt.nz', () => {
      cy.get('#userNameInput').type(Cypress.env('USERNAME'));
      cy.get('#passwordInput').type(Cypress.env('PASSWORD'));
      cy.get('#submitButton').click();
    });

    // Click parking menu option
    cy.get('#mainContent > div.container > div > div.col-lg-3.px-4.ng-star-inserted > ul > li:nth-child(2) > a').click();
    cy.get('#id_zone').type(Cypress.env('AREA_CODE'));
    cy.get('#mainContent > div.container > div > div.col-lg-9.col-12.px-0 > ng-component > div > div:nth-child(5) > div:nth-child(1) > form > div:nth-child(7) > button').click();

    cy.get('body > app-root > jaspero-alerts > jaspero-alert > div.jaspero__dialog.ng-tns-c88-4.ng-trigger.ng-trigger-wrapperAn > div.jaspero__dialog-actions.ng-tns-c88-4 > button').then(($el) => {
      if ($el.length) {
        $el.click();
      }
    });

    // adjust the slider
    cy.get('#sliderContainer > div.mobile-display > span.d-flex.justify-content-between > button:nth-child(1)').then(($minus_btn) => {
      if ($minus_btn.length) {
        for (let i = 0; i < 37; i++) {
          $minus_btn.click();
        }
      }
    })
    // cy.contains('Start Parking').click();

  })
});