import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLang, resources } from './locale';

/**
 * Initialize react i18 with all translations
 * @returns {i18n}
 */
function init() {
  const options = {
    resources,
    defaultNS: 'translation',
    fallbackNS: 'translation',
    debug: false,
    saveMissing: true,
    lng: defaultLang,
    fallbackLng: defaultLang,
    interpolation: {
      escapeValue: false
    }
  };

  void i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(options);

  return i18next;
}

init();
