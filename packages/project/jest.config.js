const path = require('path');
const config = require('../../jest.config.base');

const cfg = config('react', __dirname);

cfg.setupFilesAfterEnv.unshift(path.resolve(__dirname, './react.setup-after-env.js'));
cfg.transform = {
  '^.+\\.tsx?$': 'babel-jest',
  '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
};
cfg.collectCoverageFrom = [...cfg.collectCoverageFrom, '!**/*.(story|stories).tsx'];
cfg.coverageReporters = [...cfg.coverageReporters, ['json', { outputFile: './src/stories/.jest-test-results.json' }]];

module.exports = cfg;
