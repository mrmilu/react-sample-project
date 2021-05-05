/// <reference types="cypress" />

Cypress.Commands.overwrite(
  'type',
  (
    originalFn: (element: JQuery<HTMLElement>, text: string, options?: Partial<Cypress.TypeOptions>) => Cypress.Chainable,
    element: JQuery<HTMLElement>,
    text: string,
    options?: Partial<Cypress.TypeOptions & { sensitive: boolean }>
    // eslint-disable-next-line max-params
  ) => {
    if (options?.sensitive) {
      // turn off original log
      options.log = false;
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length)
      });
    }

    return originalFn(element, text, options);
  }
);
