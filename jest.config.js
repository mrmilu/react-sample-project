const config = require('./jest.config.base');

const cfg = config('monorepo', __dirname);
cfg.projects = ['<rootDir>/packages/*/jest.config.js'];

module.exports = cfg;
