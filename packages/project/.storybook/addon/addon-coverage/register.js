import React from 'react';
import addons, { types } from '@storybook/addons';
import path from 'path';

const ADDON_ID = 'storybook/coverage';
const PANEL_ID = `${ADDON_ID}/panel`;
const PANEL_TITLE = 'Coverage';
const coverage = {};

function normalize(name) {
  return name.toLowerCase().replace(/-/, '');
}

function loadCoverage() {
  try {
    const finds = require.context('../../../../../coverage/react', true, /index\.html$/);
    finds.keys().forEach((file) => {
      const dir = path.dirname(file);
      const componentName = dir.split('/').pop();
      coverage[normalize(componentName)] = file.replace('./', '');
    });
  } catch (e) {
    console.error('[Storybook/Addon coverage] coverage not found', e);
  }
}

function renderCoverage(api) {
  const pathname = window.location.pathname;
  return (args) => {
    const storyData = api.getCurrentStoryData();
    if (args.key !== PANEL_ID || !args.active || !storyData || !storyData.kind) {
      return;
    }
    const componentName = storyData.kind.split('/').pop();
    const test = componentName && coverage[normalize(componentName)];
    if (!test) {
      return;
    }
    return React.createElement('iframe', {
      key: test,
      src: pathname + test,
      style: {
        width: '100%',
        height: '100%'
      }
    });
  };
}

function registerCallback(api) {
  addons.addPanel(PANEL_ID, {
    type: types.PANEL,
    title: PANEL_TITLE,
    render: renderCoverage(api)
  });
};

try {
  loadCoverage();
  addons.register(ADDON_ID, registerCallback);
} catch (e) {
  console.error('[Storybook/Addon coverage]', e);
}
