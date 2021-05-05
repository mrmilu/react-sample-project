/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-var-requires,@typescript-eslint/ban-ts-comment,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
/// <reference types="cypress" />

import { getEnvVars } from './env-vars';

const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): ReturnType<Cypress.PluginConfig> => {
  initPlugin(on, config);

  const options = {
    webpackOptions: require('../../webpack.config'),
    watchOptions: {}
  };
  on('file:preprocessor', webpackPreprocessor(options));

  on('before:browser:launch', (_browser, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse(),
    pa11y: pa11y()
  });

  const vars = getEnvVars(process.env.ENVIRONMENT || 'local');

  return {
    ...config,
    env: {
      ...config.env,
      ...vars
    },
    baseUrl: vars.WEB_URL as string
  };
};
