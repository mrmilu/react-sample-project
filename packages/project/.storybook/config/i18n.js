import React from 'react';
import { I18nProvider } from '../../src/i18n';
import { addDecorator } from '@storybook/react';

addDecorator(
  (Story, { globals }) => (
    <I18nProvider locale={globals.locale}>
      <Story />
    </I18nProvider>
  )
);
