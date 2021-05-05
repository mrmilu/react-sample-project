module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env']
    }
  },
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-react-jsx',
  ]
};
