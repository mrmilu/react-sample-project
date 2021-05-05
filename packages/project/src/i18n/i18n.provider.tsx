import React, { PropsWithChildren, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Locale, useTranslation } from './i18n.hooks';

export type I18nProviderProps = Required<PropsWithChildren<unknown>> & {
  locale: Locale;
};

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const { i18n, changeLanguage } = useTranslation();
  useEffect(() => {
    void changeLanguage(locale);
  }, [changeLanguage, locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
