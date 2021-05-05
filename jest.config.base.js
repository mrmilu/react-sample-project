const path = require('path');

module.exports = (name, rootDir = __dirname) => ({
  rootDir,
  reporters: ['default'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: ['**/*.(spec|test).(ts|tsx)', '**/__tests__/*.(ts|tsx)', '!/build/', '!/dist/'],
  testURL: 'http://localhost/',
  collectCoverage: false,
  coverageDirectory: path.resolve(__dirname, `./coverage/${name}`),
  collectCoverageFrom: ['**/*.(ts|tsx)', '!**/*.d.ts'],
  cache: false,
  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup-after-env.js')],
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        sourceMap: true,
        inlineSourceMap: true
      },
      diagnostics: true
    }
  }
});
