import type { TOptions } from 'i18next';
import React, { useCallback } from 'react';
import { DefaultNamespace, Namespace, Trans, useTranslation as reactI18UseTranslation, UseTranslationOptions } from 'react-i18next';
import './i18n.config';
import type { Resources } from './i18n.resources';
import type { locales } from './locale';

export type Locale = keyof typeof locales;

/**
 * Hook to translate text in react components
 * @param {N} ns
 * @param {UseTranslationOptions} options
 * @returns {{t: (key: keyof Resources, opt?: TOptions) => string, ready: boolean, i18n: i18n}}
 */
export function useTranslation<N extends Namespace = DefaultNamespace>(ns?: N, options?: UseTranslationOptions) {
  const { i18n, ready } = reactI18UseTranslation(ns, options);

  /**
   * Translate using a string
   * @type {(key: string, opt?: TOptions) => string}
   */
  const tt: (key: string, opt?: TOptions) => string = useCallback(
    (key, opt?): string => {
      return i18n.t(key.toString(), opt);
    },
    [i18n]
  );

  /**
   * Translate using all keys in translate files
   * @type {(key: keyof Resources, opt?: TOptions) => string}
   */
  const t: (key: keyof Resources, opt?: TOptions) => string = useCallback(
    (key, opt?): string => {
      return tt(key.toString(), opt);
    },
    [tt]
  );

  /**
   * Translate returning a JSX element and can be used to translate html content
   * @type {(key: keyof Resources) => JSX.Element}
   */
  const tHtml: (key: keyof Resources, opt?: TOptions) => React.ReactNode = useCallback((key, opt?) => <Trans {...opt}>{key}</Trans>, []);

  /**
   * Change translate language
   */
  const changeLanguage = useCallback((lang: Locale) => i18n.changeLanguage(lang), [i18n]);

  return {
    t,
    tt,
    changeLanguage,
    languages: Object.keys(i18n.options.resources || {}) as Locale[],
    activeLanguage: i18n.language as Locale,
    i18n,
    ready,
    tHtml
  };
}
