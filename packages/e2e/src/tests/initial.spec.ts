describe('Load admin section', () => {
  // beforeEach(() => {
  //   cy.loginAdmin();
  // });
  // afterEach(() => {
  //   cy.logout();
  // });
  it('Should load initial page', () => {
    cy.loginAdmin();
    cy.contains('Users');
    cy.get('.layout-main')
      .should('be.visible')
      .get('ul.menu')
      .should('be.visible')
      .as('lateralMenu')
      .findByText(/White Labels/)
      .should('be.visible');
    // cy.get('@lateralMenu').toMatchSnapshot();
    cy.get('@lateralMenu').screenshot();
    // cy.get('@lateralMenu').toMatchImageSnapshot();
  });
});
