import type { Resource } from 'i18next';
import { en } from './en';
import { es } from './es';

export const locales = { en, es };

export const resources: Resource = Object.entries(locales).reduce((a, [key, value]) => ({ ...a, [key]: { translation: value } }), {});

export const defaultLang = 'en';
