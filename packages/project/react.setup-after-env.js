require('@testing-library/jest-dom/extend-expect');
const { cleanup } = require('./tests/test-utils');
require('jest-styled-components');

afterEach(() => {
  cleanup();
});
