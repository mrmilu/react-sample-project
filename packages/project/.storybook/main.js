const { default: addons, mockChannel } = require('@storybook/addons');
const path = require('path');
const tsconfig = path.resolve(__dirname, '../tsconfig.json');

addons.setChannel(mockChannel());

module.exports = {
  stories: [
    '../@(src|documentation)/**/*.@(story|stories).@(tsx|mdx)'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx$/],
          include: [path.resolve(__dirname, '../src')]
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: true }
        }
        // injectStoryParameters: true
      }
    },
    '@storybook/addon-essentials',
    'storybook-addon-material-ui',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    './addon/addon-coverage/register',
    'storybook-addon-performance/register',
    '@storybook/addon-links',
    {
      name: 'storybook-addon-turbo-build',
      options: {
        // Please refer below tables for available options
        optimizationLevel: 2
      }
    }
  ],
  typescript: {
    check: true,
    checkOptions: { tsconfig },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: false,
      skipChildrenPropWithoutDoc: false,
      shouldRemoveUndefinedFromOptional: true,
      tsconfigPath: tsconfig
      // propFilter: prop => !/^(testID)$/.test(prop.name),
    }
  },
  webpackFinal: async (config, args) => {
    config.module.rules.push({
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    });
    return {
      ...config,
      plugins: config.plugins.filter(plugin => plugin.constructor.name !== 'ESLintWebpackPlugin')
    };
  }
};
