const path = require('path');
const config = require('./packages/project/babel.config');

config.babelrcRoots = ['.', path.resolve(__dirname, './packages/')];

module.exports = config;
