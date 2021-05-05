import './config/console';
import './config/performance';
import './config/tests';
import './config/i18n';
import './config/redux';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Introduction',
        ['Docs']
      ]
    }
  },
  previewTabs: {
    canvas: { title: 'Code', hidden: false },
    'storybook/docs/panel': { title: 'Documentation' }
  }
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' }
      ]
    }
  }
};
