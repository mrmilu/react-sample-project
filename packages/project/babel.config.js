module.exports = {
  env: {
    test: {
      presets: [
            ['@babel/preset-env', {
                'targets': {
                'node': 'current'
                }
            }]
        ]
    }
  },
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-macros',
    '@babel/plugin-transform-react-jsx',
    'babel-plugin-styled-components'
  ]
};
