Cypress.Commands.add('login', (username = Cypress.env('USERNAME') as string, password = Cypress.env('PASSWORD') as string) => {
  const loginUrl = '/#/home';
  cy.visit(loginUrl);

  cy.get('input[type=email]').as('inputUsername');
  cy.get('input[type=password]').as('inputPassword');
  cy.findByText(/I accept the terms and conditions/)
    .parents('.wrapper-checkbox')
    .find('icon')
    .as('acceptTerms');
  cy.get('button').as('signIn');

  const beVisible = 'be.visible';
  cy.get('@inputUsername').should(beVisible).type(username);
  cy.get('@inputPassword').should(beVisible).type(password, { sensitive: true });
  cy.get('@acceptTerms').should(beVisible).click();
  cy.get('@signIn').should(beVisible).click();

  cy.location('hash').should('eq', '#/users/overview');
});

Cypress.Commands.add('loginAdmin', () => {
  cy.login(Cypress.env('USERNAME_ADMIN'), Cypress.env('PASSWORD_ADMIN'));
});

Cypress.Commands.add('logout', () => {
  cy.get('div.wrapper-user-menu-data')
    .then(($userMenu) => {
      if (!$userMenu) {
        return;
      }
      if (!$userMenu.hasClass('active')) {
        $userMenu.trigger('click');
      }
    })
    .parent()
    .find('a.logout', { timeout: 10000 })
    .should('be.visible')
    .click();
});
